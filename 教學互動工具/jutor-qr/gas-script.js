// =====================================================
// Jutor 文章朗讀 — 學生完成回報（含成績）
// Google Apps Script
// =====================================================
// 使用說明：
// 1. 開啟 Google Sheet，建立一個新分頁叫「朗讀紀錄」
// 2. 點選「擴充功能」→「Apps Script」
// 3. 貼上此程式碼，儲存
// 4. 點「部署」→「新增部署作業」→「網頁應用程式」
//    - 執行身份：我（你的帳號）
//    - 存取權：所有人
// 5. 複製部署網址，貼到 student.html 的 GAS_URL 變數
// =====================================================

const SHEET_NAME = '朗讀紀錄';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    let sheet   = ss.getSheetByName(SHEET_NAME);

    // 如果分頁不存在，建立並加標題列
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['完成時間', '班級', '座號', '姓名', '最佳成績', '項目']);
      const header = sheet.getRange(1, 1, 1, 6);
      header.setFontWeight('bold')
            .setBackground('#4f46e5')
            .setFontColor('#ffffff')
            .setHorizontalAlignment('center');
      sheet.setFrozenRows(1);
      // 設定欄寬
      sheet.setColumnWidth(1, 160); // 完成時間
      sheet.setColumnWidth(2, 100); // 班級
      sheet.setColumnWidth(3, 60);  // 座號
      sheet.setColumnWidth(4, 80);  // 姓名
      sheet.setColumnWidth(5, 80);  // 最佳成績
      sheet.setColumnWidth(6, 90);  // 項目
    }

    const score = data.score || '未填寫';
    const row = sheet.appendRow([
      data.time  || new Date().toLocaleString('zh-TW'),
      data.class || '',
      data.num   || '',
      data.name  || '',
      score,
      data.task  || '文章朗讀'
    ]);

    // 成績欄位上色（依分數高低）
    const lastRow = sheet.getLastRow();
    const scoreCell = sheet.getRange(lastRow, 5);
    const scoreNum = parseInt(score);
    if (!isNaN(scoreNum)) {
      if (scoreNum >= 90)      scoreCell.setBackground('#d1fae5').setFontColor('#065f46'); // 綠
      else if (scoreNum >= 70) scoreCell.setBackground('#fef3c7').setFontColor('#92400e'); // 黃
      else                     scoreCell.setBackground('#fee2e2').setFontColor('#991b1b'); // 紅
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 測試用（可在 Apps Script 編輯器直接執行）
function testWrite() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  let sheet   = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['完成時間', '班級', '座號', '姓名', '最佳成績', '項目']);
    const header = sheet.getRange(1, 1, 1, 6);
    header.setFontWeight('bold').setBackground('#4f46e5').setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
  sheet.appendRow(['2026/03/19 10:00:00', '5年甲班', '10', 'Andy（測試）', '85', '文章朗讀']);
  SpreadsheetApp.flush();
  Logger.log('寫入成功！');
}
