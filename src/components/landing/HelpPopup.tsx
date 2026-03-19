import React, { useState, useEffect, memo } from "react";
import { X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import playstoreIcon from "@/assets/social/playstore.svg";
import appstoreIcon from "@/assets/social/appstore.svg";

interface HelpPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// Generate a random 6-digit OTP
const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

type Step = "phone" | "otp" | "success";

const HelpPopup: React.FC<HelpPopupProps> = memo(({ isOpen, onClose }) => {
  const [step, setStep] = useState<Step>("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  // Handle phone number submission - generate OTP
  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      setError("Please enter a valid mobile number");
      return;
    }
    
    setError("");
    setIsLoading(true);
    
    // Simulate sending OTP (in production, this would call an API)
    setTimeout(() => {
      const newOtp = generateOTP();
      setGeneratedOtp(newOtp);
      setStep("otp");
      setIsLoading(false);
      // For demo: show OTP on screen (remove in production)
      console.log("OTP generated:", newOtp);
    }, 1000);
  };

  // Handle OTP verification
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp !== generatedOtp) {
      setError("Invalid OTP. Please try again.");
      return;
    }
    
    setError("");
    setIsLoading(true);
    
    // Simulate verification success
    setTimeout(() => {
      setStep("success");
      setIsLoading(false);
    }, 1000);
  };

  // Handle final submission after OTP verified
  const handleFinalSubmit = () => {
    console.log("Verified phone number:", phoneNumber);
    onClose();
    // Reset state for next time
    setStep("phone");
    setPhoneNumber("");
    setOtp("");
    setGeneratedOtp("");
  };

  const handleClose = () => {
    setStep("phone");
    setPhoneNumber("");
    setOtp("");
    setGeneratedOtp("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-card border border-border rounded-3xl shadow-xl p-8 animate-in fade-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="text-center">
          {step === "phone" && (
            <>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Need Help with Household?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Enter your mobile number and we'll reach out to help you!
              </p>

              {/* Phone form */}
              <form onSubmit={handlePhoneSubmit} className="mt-6 space-y-4">
                <Input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="rounded-xl text-center"
                  required
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-xl gradient-primary text-primary-foreground font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send OTP"}
                </Button>
              </form>
            </>
          )}

          {step === "otp" && (
            <>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Verify Your Number
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We've sent an OTP to {phoneNumber}
              </p>
              
              {/* Demo OTP display - remove in production */}
              <div className="mt-4 p-3 bg-accent rounded-lg">
                <p className="text-xs text-muted-foreground">Demo OTP:</p>
                <p className="text-xl font-bold text-primary">{generatedOtp}</p>
              </div>

              {/* OTP form */}
              <form onSubmit={handleOtpSubmit} className="mt-6 space-y-4">
                <Input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="rounded-xl text-center text-lg tracking-widest"
                  maxLength={6}
                  required
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-xl gradient-primary text-primary-foreground font-bold"
                  disabled={isLoading || otp.length !== 6}
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify OTP"}
                </Button>
                <button
                  type="button"
                  onClick={() => {
                    setStep("phone");
                    setOtp("");
                    setError("");
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Change phone number
                </button>
              </form>
            </>
          )}

          {step === "success" && (
            <>
              <div className="w-16 h-16 mx-auto mt-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
                Number Verified!
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your number {phoneNumber} has been verified successfully.
              </p>
              <Button 
                onClick={handleFinalSubmit}
                size="lg" 
                className="mt-6 w-full rounded-xl gradient-primary text-primary-foreground font-bold"
              >
                Continue
              </Button>
            </>
          )}

          {/* App download section - show after phone or OTP step */}
          {step !== "success" && (
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                You can also download our app
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors"
                >
                  <img src={playstoreIcon} alt="Google Play" className="w-5 h-5" />
                  <span className="text-sm font-medium">Play Store</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors"
                >
                  <img src={appstoreIcon} alt="App Store" className="w-5 h-5" />
                  <span className="text-sm font-medium">App Store</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

HelpPopup.displayName = "HelpPopup";

// Hook to manage popup timing
export const useHelpPopup = (delayMs: number = 15000) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const closePopup = () => setIsOpen(false);

  return { isOpen, closePopup };
};

export default HelpPopup;
