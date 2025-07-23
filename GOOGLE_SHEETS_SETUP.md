# Google Sheets Integration Setup

## Overview
The Velocity Racing signup form captures user data directly to Google Sheets for easy management and analysis.

## Setup Instructions

### 1. Create Google Sheets Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Velocity Racing Users"
3. Set up columns in the first row:
   - A1: First Name
   - B1: Last Name  
   - C1: Email
   - D1: Timestamp
   - E1: Email Updates
   - F1: Source
   - G1: Status

### 2. Get Spreadsheet ID
1. Copy the spreadsheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`
2. Update `GOOGLE_SHEETS_CONFIG.spreadsheetId` in `server/routes/google-sheets.ts`

### 3. Set up Google Sheets API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google Sheets API
4. Create credentials (Service Account)
5. Download the service account key JSON file

### 4. Environment Variables
Add these to your `.env` file:
```env
GOOGLE_SHEETS_API_KEY=your_api_key_here
GOOGLE_SERVICE_ACCOUNT_KEY=your_service_account_json_here
```

### 5. Production Implementation
Replace the simulated API call in `server/routes/google-sheets.ts` with:

```typescript
const response = await fetch(
  `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_CONFIG.spreadsheetId}/values/${GOOGLE_SHEETS_CONFIG.range}:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_CONFIG.apiKey}`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(sheetsData)
  }
);
```

## Data Captured

Each signup captures:
- **First Name**: User's first name
- **Last Name**: User's last name
- **Email**: User's email address
- **Timestamp**: When they signed up (ISO format)
- **Email Updates**: Whether they opted in for marketing emails
- **Source**: "Velocity Racing Website"
- **Status**: "Active" (can be updated manually)

## Current Status

✅ **Demo Implementation Active**
- Signup form sends data to `/api/signup`
- Data structure prepared for Google Sheets
- Console logging shows captured data
- Ready for production Google Sheets API integration

## Testing

1. Go to `/signup` page
2. Fill out the registration form
3. Check browser console and server logs
4. Data structure will be logged showing what would be sent to Google Sheets

## Security Notes

- Passwords are never stored in Google Sheets
- Email validation should be implemented
- Consider adding CAPTCHA for production
- Implement rate limiting for signup endpoint
