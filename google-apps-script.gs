/**
 * ARC PLAY GAMES — Google Sheets submission collector
 *
 * 1) Create a Google Sheet.
 * 2) Extensions → Apps Script.
 * 3) Paste this code.
 * 4) Deploy → New deployment → Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 5) Copy the /exec URL into CONFIG.submissionEndpoint in index.html.
 *
 * The first row will be created automatically.
 */
const SHEET_NAME = "Submissions";

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) sh.appendRow(["Timestamp","X Username","Wallet"]);
  return sh;
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const username = String(data.username || "").trim();
    const wallet = String(data.wallet || "").trim();
    if (!username) throw new Error("Missing username");
    sheet_().appendRow([new Date(), username, wallet]);
    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
