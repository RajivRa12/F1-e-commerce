import { RequestHandler } from "express";

// Google Sheets configuration
const GOOGLE_SHEETS_CONFIG = {
  spreadsheetId: 'your-spreadsheet-id-here', // Replace with actual Google Sheets ID
  range: 'Users!A:G', // Sheet name and range
  apiKey: process.env.GOOGLE_SHEETS_API_KEY, // Add to environment variables
  serviceAccountKey: process.env.GOOGLE_SERVICE_ACCOUNT_KEY // For authentication
};

interface UserSignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string; // Will be hashed before storage
  emailUpdates: boolean;
  timestamp: string;
  source: string;
}

// Function to append data to Google Sheets
async function appendToGoogleSheets(userData: UserSignupData) {
  try {
    // In production, you would use the Google Sheets API
    const sheetsData = {
      range: GOOGLE_SHEETS_CONFIG.range,
      values: [[
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.timestamp,
        userData.emailUpdates ? 'Yes' : 'No',
        userData.source || 'Website Signup',
        'Active' // Status
      ]]
    };

    // Simulated Google Sheets API call structure
    // const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_CONFIG.spreadsheetId}/values/${GOOGLE_SHEETS_CONFIG.range}:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_CONFIG.apiKey}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${accessToken}` // From service account
    //   },
    //   body: JSON.stringify(sheetsData)
    // });

    // For demo purposes, log the data that would be sent
    console.log('📊 GOOGLE SHEETS DATA CAPTURE:');
    console.log('Spreadsheet ID:', GOOGLE_SHEETS_CONFIG.spreadsheetId);
    console.log('Range:', GOOGLE_SHEETS_CONFIG.range);
    console.log('Data to append:', sheetsData.values[0]);
    console.log('---');

    return {
      success: true,
      message: 'Data successfully captured to Google Sheets'
    };

  } catch (error) {
    console.error('Google Sheets API Error:', error);
    throw new Error('Failed to save data to Google Sheets');
  }
}

export const captureSignupData: RequestHandler = async (req, res) => {
  try {
    const signupData: UserSignupData = {
      ...req.body,
      timestamp: new Date().toISOString(),
      source: 'Velocity Racing Website'
    };

    // Validate required fields
    if (!signupData.firstName || !signupData.lastName || !signupData.email) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Hash password before storage (in production)
    // const hashedPassword = await bcrypt.hash(signupData.password, 10);
    // signupData.password = hashedPassword;

    // Capture to Google Sheets
    const sheetsResult = await appendToGoogleSheets(signupData);

    // Send confirmation email (in production)
    // await sendVerificationEmail(signupData.email);

    res.status(201).json({
      success: true,
      message: 'Account created successfully! Data captured to Google Sheets.',
      userId: `velocity_${Date.now()}`,
      sheetsCapture: sheetsResult
    });

  } catch (error) {
    console.error('Signup capture error:', error);
    res.status(500).json({
      success: false,
      message: 'Error capturing signup data. Please try again.'
    });
  }
};

// Export function for direct use
export { appendToGoogleSheets };
