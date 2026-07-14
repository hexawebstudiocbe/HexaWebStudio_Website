/**
 * Google Apps Script for HexaWeb Studio Contact Form Submission
 * 
 * Instructions:
 * 1. Open/Create a Google Sheet.
 * 2. Click Extensions > Apps Script.
 * 3. Delete any default code and paste this script.
 * 4. Replace 'YOUR_SHARED_SECRET_TOKEN' with a secure random token of your choice.
 * 5. Replace 'YOUR_NOTIFICATION_EMAIL@gmail.com' with the email that should receive submissions.
 * 6. Click "Deploy" > "New deployment".
 * 7. Choose type "Web app".
 * 8. Set Execute as: "Me" and Who has access: "Anyone".
 * 9. Click Deploy, authorize permissions, and copy the Web App URL for your Cloudflare Worker config.
 */

// CONFIGURATION
const AUTH_TOKEN = "hexawebsecretkey123"; // Change this to a secure random token (e.g. UUID)
const NOTIFICATION_EMAIL = "hexawebstudiocbe@gmail.com"; // Email to receive notification alerts
const SPREADSHEET_ID = "1hKS-hCofOHbgaEd2xXdelZ93rpzCctjZdxoVPDe38Qg"; // Replace with your Google Spreadsheet ID

function doPost(e) {
  try {
    // 1. Verify Authentication Token
    const postData = JSON.parse(e.postData.contents);
    const token = postData.token;
    
    if (!token || token !== AUTH_TOKEN) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: "Unauthorized: Invalid authorization token."
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // 2. Extract Data
    const { name, email, phone, businessName, message } = postData.data;
    const timestamp = new Date();
    
    // 3. Open Google Sheet by ID or active spreadsheet bound
    const ss = SPREADSHEET_ID && SPREADSHEET_ID !== "YOUR_SPREADSHEET_ID" 
      ? SpreadsheetApp.openById(SPREADSHEET_ID) 
      : SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    // Create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Business Name", "Message"]);
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setFontWeight("bold");
      headerRange.setBackgroundColor("#f3f4f6");
    }
    
    sheet.appendRow([
      timestamp,
      name || "",
      email || "",
      phone || "",
      businessName || "",
      message || ""
    ]);
    
    // 4. Send Gmail Notification
    sendEmailAlert(name, email, phone, businessName, message, timestamp);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Submission saved and notification sent successfully."
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailAlert(name, email, phone, businessName, message, timestamp) {
  const formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
  
  const subject = `🔥 New Lead: Request from ${name || "Unknown"}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #4f46e5; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-top: 0;">New Quote Request Received</h2>
      <p style="color: #4b5563; font-size: 14px;">A visitor submitted the contact form on HexaWeb Studio website.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151; width: 140px;">Name</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #4b5563;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Email</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #4b5563;">
            <a href="mailto:${escapeHtml(email)}" style="color: #4f46e5; text-decoration: none;">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Phone</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #4b5563;">
            <a href="tel:${escapeHtml(phone)}" style="color: #4f46e5; text-decoration: none;">${escapeHtml(phone)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Business Name</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #4b5563;">${escapeHtml(businessName || "N/A")}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Timestamp</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #4b5563;">${formattedDate}</td>
        </tr>
      </table>
      
      <div style="margin-top: 25px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #4f46e5; border-radius: 4px;">
        <h4 style="margin: 0 0 10px 0; color: #374151;">Message / Requirements:</h4>
        <p style="margin: 0; color: #4b5563; font-style: italic; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(message)}</p>
      </div>
      
      <div style="margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 15px; font-size: 11px; color: #9ca3af; text-align: center;">
        Sent automatically from HexaWeb Studio Cloudflare Gateway.
      </div>
    </div>
  `;
  
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: email
  });
}

function escapeHtml(text) {
  if (!text) return "";
  return text.toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
