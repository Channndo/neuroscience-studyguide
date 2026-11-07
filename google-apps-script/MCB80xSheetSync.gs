/**
 * MCB80x progress backup — Google Apps Script
 *
 * Deploy: Extensions → Apps Script → paste this file → Deploy → New deployment →
 *   Type: Web app · Execute as: Me · Who has access: Anyone
 * Copy the Web app URL into mcb80x-cloud-config.js (sheetsWebAppUrl).
 *
 * Required: Project Settings → Script properties → SYNC_SECRET = your-long-random-string
 * (injected at deploy time into mcb80x-cloud-config.js — never commit secrets to git)
 *
 * Sheet tab "user_accounts" is created automatically. Rows store encrypted payloads only
 * (ciphertext from the browser — Google never sees the passphrase).
 */
var SHEET_NAME = "user_accounts";
var HEADERS = ["email", "google_sub", "display_name", "updated_at", "crypto_version", "payload_json"];

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sh.setFrozenRows(1);
  }
  return sh;
}

function normalizeEmail_(email) {
  if (!email) return "";
  return String(email).trim().toLowerCase();
}

function checkSecret_(secret) {
  var expected = PropertiesService.getScriptProperties().getProperty("SYNC_SECRET");
  if (!expected) return false;
  return String(secret || "") === expected;
}

function findRowIndex_(email) {
  var sh = sheet_();
  var data = sh.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (normalizeEmail_(data[i][0]) === email) return i + 1;
  }
  return -1;
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** One-time via: clasp run setSyncSecret --params '["YOUR_SECRET"]' */
function setSyncSecret(secret) {
  if (!secret) throw new Error("secret required");
  PropertiesService.getScriptProperties().setProperty("SYNC_SECRET", String(secret));
  return { ok: true };
}

function doGet(e) {
  try {
    var p = e.parameter || {};
    if (!checkSecret_(p.secret || "")) {
      return jsonResponse_({ ok: false, error: "unauthorized" });
    }
    if (p.action !== "pull") {
      return jsonResponse_({ ok: false, error: "unknown action" });
    }
    var email = normalizeEmail_(p.email);
    if (!email) return jsonResponse_({ ok: false, error: "email required" });

    var rowIdx = findRowIndex_(email);
    if (rowIdx < 0) {
      return jsonResponse_({ ok: true, found: false });
    }
    var sh = sheet_();
    var row = sh.getRange(rowIdx, 1, rowIdx, HEADERS.length).getValues()[0];
    var payload = {};
    try {
      payload = JSON.parse(row[5] || "{}");
    } catch (err) {
      payload = {};
    }
    return jsonResponse_({
      ok: true,
      found: true,
      email: row[0],
      googleSub: row[1] || "",
      displayName: row[2] || "",
      updatedAt: row[3] ? String(row[3]) : "",
      cryptoVersion: row[4] || 1,
      envelope: payload
    });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    if (!checkSecret_(body.secret || "")) {
      return jsonResponse_({ ok: false, error: "unauthorized" });
    }
    if (body.action !== "push") {
      return jsonResponse_({ ok: false, error: "unknown action" });
    }
    var email = normalizeEmail_(body.email);
    if (!email) return jsonResponse_({ ok: false, error: "email required" });
    if (!body.envelope || typeof body.envelope !== "object") {
      return jsonResponse_({ ok: false, error: "encrypted envelope required" });
    }

    var sh = sheet_();
    var now = new Date().toISOString();
    var rowValues = [
      email,
      body.googleSub || "",
      body.displayName || "",
      now,
      body.cryptoVersion || 1,
      JSON.stringify(body.envelope)
    ];
    var rowIdx = findRowIndex_(email);
    if (rowIdx > 0) {
      sh.getRange(rowIdx, 1, rowIdx, HEADERS.length).setValues([rowValues]);
    } else {
      sh.appendRow(rowValues);
    }
    return jsonResponse_({ ok: true, updatedAt: now });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}
