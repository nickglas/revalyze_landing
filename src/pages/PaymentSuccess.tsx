import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen h-max bg-background flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.primary/0.1),transparent_50%)]" />

      <div className="relative z-10 w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="justify-center flex mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            viewBox="0 0 375 375"
            preserveAspectRatio="xMidYMid meet"
            className="text-[#3f3eb3]"
          >
            <defs>
              <clipPath id="clip1">
                <path d="M 97.773438 96.28125 L 299.644531 96.28125 L 299.644531 278.445312 L 97.773438 278.445312 Z" />
              </clipPath>
              <clipPath id="clip2">
                <path d="M 75 145.886719 L 233.726562 145.886719 L 233.726562 278.445312 L 75 278.445312 Z" />
              </clipPath>
            </defs>
            <g fill="currentColor">
              <g clip-path="url(#clip1)">
                <path d="M 249.347656 220.425781 L 249.332031 220.429688 C 269.644531 209.117188 283.390625 187.425781 283.390625 162.523438 C 283.390625 125.9375 253.734375 96.28125 217.148438 96.28125 L 97.886719 96.28125 L 113.75 114.578125 C 121.910156 123.992188 133.761719 129.402344 146.222656 129.402344 L 217.148438 129.402344 C 235.441406 129.402344 250.269531 144.230469 250.269531 162.523438 C 250.269531 180.816406 235.441406 195.644531 217.148438 195.644531 L 184.027344 195.644531 L 212.742188 228.765625 L 242.957031 263.621094 C 251.121094 273.039062 262.96875 278.445312 275.429688 278.445312 L 299.644531 278.445312 L 249.347656 220.425781 Z" />
              </g>
              <g clip-path="url(#clip2)">
                <path d="M 213.503906 179.082031 L 197.644531 160.789062 C 189.480469 151.371094 177.632812 145.964844 165.171875 145.964844 L 75 145.964844 L 177 263.621094 C 185.164062 273.039062 197.011719 278.445312 209.472656 278.445312 L 233.6875 278.445312 L 147.546875 179.082031 L 213.503906 179.082031 Z" />
              </g>
              <path
                d="M 0.00000516333 2.002294 L 160.000016 2.002294"
                transform="matrix(0.75,0,0,0.75,127.499996,108.256092)"
                stroke="currentColor"
                stroke-width="4"
                fill="none"
              />
            </g>
          </svg>
        </div>

        <Card className="shadow-lg animate-scale-in">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center animate-pulse-glow">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-green-600 dark:text-green-400">
              Payment Successful!
            </CardTitle>
            <CardDescription className="text-center">
              Thank you for your payment. Your transaction has been completed
              successfully and a confirmation email has been sent to your
              registered email address.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  You can now access your account and start using our services.
                </p>

                <Button asChild variant="hero" className="w-full">
                  <Link to="/login">
                    <Zap className="w-4 h-4 mr-2" />
                    Continue to Login
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
