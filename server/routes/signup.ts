import { RequestHandler } from "express";
import { captureSignupData } from "./google-sheets";

// Use the enhanced Google Sheets capture function
export const handleSignup: RequestHandler = captureSignupData;
