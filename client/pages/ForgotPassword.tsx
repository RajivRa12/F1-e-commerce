import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Flag, Mail, ArrowLeft, Eye, EyeOff, Lock, Clock } from "lucide-react";

type Step = "email" | "otp" | "reset";

export default function ForgotPassword() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep("otp");
      setTimeLeft(60); // 60 seconds countdown
      
      // Start countdown
      const interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (otp === "123456") { // Demo OTP
        setStep("reset");
      } else {
        alert("Invalid OTP. Please try again. (Demo: use 123456)");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate password reset
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Password reset successful! You can now login with your new password.");
      // Redirect to login
      window.location.href = "/login";
    } catch (error) {
      console.error("Error resetting password:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    if (timeLeft > 0) return;
    
    setIsLoading(true);
    try {
      // Simulate resending OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTimeLeft(60);
      
      // Start countdown again
      const interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
    } catch (error) {
      console.error("Error resending OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Flag className="h-12 w-12 text-racing-red" />
            </div>
            <h1 className="text-3xl font-black text-foreground mb-2">
              {step === "email" && "Reset Password"}
              {step === "otp" && "Verify Email"}
              {step === "reset" && "New Password"}
            </h1>
            <p className="text-muted-foreground">
              {step === "email" && "Enter your email to receive a reset code"}
              {step === "otp" && "Enter the 6-digit code sent to your email"}
              {step === "reset" && "Create your new password"}
            </p>
          </div>

          {step === "email" && (
            <form className="mt-8 space-y-6" onSubmit={handleEmailSubmit}>
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-racing-red hover:bg-racing-red/90"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Reset Code"}
                </Button>
              </div>

              <div className="text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center text-sm font-medium text-racing-red hover:text-racing-red/80"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to login
                </Link>
              </div>
            </form>
          )}

          {step === "otp" && (
            <form className="mt-8 space-y-6" onSubmit={handleOtpSubmit}>
              <div>
                <Label htmlFor="otp" className="text-sm font-medium">
                  Verification Code
                </Label>
                <div className="mt-1">
                  <Input
                    id="otp"
                    name="otp"
                    type="text"
                    maxLength={6}
                    required
                    className="text-center text-2xl tracking-widest"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Code sent to {email}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Demo: Use code <span className="font-mono font-bold">123456</span>
                </p>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-racing-red hover:bg-racing-red/90"
                  size="lg"
                  disabled={isLoading || otp.length !== 6}
                >
                  {isLoading ? "Verifying..." : "Verify Code"}
                </Button>
              </div>

              <div className="text-center space-y-2">
                {timeLeft > 0 ? (
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    Resend code in {timeLeft}s
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={resendOtp}
                    className="text-sm font-medium text-racing-red hover:text-racing-red/80"
                    disabled={isLoading}
                  >
                    Resend verification code
                  </button>
                )}
                
                <div>
                  <button
                    type="button"
                    onClick={() => setStep("email")}
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Change email address
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === "reset" && (
            <form className="mt-8 space-y-6" onSubmit={handlePasswordReset}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="newPassword" className="text-sm font-medium">
                    New Password
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input
                      id="newPassword"
                      name="newPassword"
                      type={showPassword ? "text" : "password"}
                      required
                      className="pl-10 pr-10"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmNewPassword" className="text-sm font-medium">
                    Confirm New Password
                  </Label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      className="pl-10 pr-10"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-racing-red hover:bg-racing-red/90"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Updating..." : "Reset Password"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
