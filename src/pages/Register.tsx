import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Register() {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectedPlan: "",
    acceptTerms: false,
  });

  // Pre-select plan if coming from pricing
  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan) {
      setFormData((prev) => ({ ...prev, selectedPlan: plan }));
    }
  }, [searchParams]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    if (!formData.acceptTerms) {
      alert("Please accept the terms and conditions");
      return;
    }

    console.log("Registration form submitted:", formData);
    // TODO: Implement registration logic
  };

  const plans = [
    {
      value: "starter",
      label:
        t("pricing.starter.title") +
        " - " +
        t("pricing.starter.price") +
        t("pricing.starter.period"),
    },
    {
      value: "pro",
      label:
        t("pricing.pro.title") +
        " - " +
        t("pricing.pro.price") +
        t("pricing.pro.period"),
    },
    {
      value: "business",
      label:
        t("pricing.business.title") +
        " - " +
        t("pricing.business.price") +
        t("pricing.business.period"),
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="p-6">
        <Link
          to="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md flex flex-col gap-2">
          {/* Logo/Brand */}
          <div className="justify-center flex">
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

          <Card
            className="
              relative overflow-hidden rounded-xl
              border transition
              [background:var(--gradient-surface)]
              [box-shadow:var(--shadow-card)]
              [border-color:hsl(var(--border))]
              [transition:var(--transition-smooth)]
            "
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t("register.title")}</CardTitle>
              <CardDescription>{t("register.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">{t("register.fullName")}</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    required
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName">
                    {t("register.companyName")}
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">{t("register.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">{t("register.password")}</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">
                    {t("register.confirmPassword")}
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange("confirmPassword", e.target.value)
                      }
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Plan Selection */}
                <div className="space-y-2">
                  <Label htmlFor="plan">{t("register.selectPlan")}</Label>
                  <Select
                    value={formData.selectedPlan}
                    onValueChange={(value) =>
                      handleInputChange("selectedPlan", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("register.selectPlan")} />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-neutral-800">
                      {plans.map((plan) => (
                        <SelectItem
                          key={plan.value}
                          value={plan.value}
                          className=""
                        >
                          {plan.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("acceptTerms", !!checked)
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t("register.terms")}
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#3f3eb3]"
                  variant="default"
                  size="lg"
                >
                  {t("register.createAccount")}
                </Button>
              </form>

              {/* Sign In Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {t("register.haveAccount")}{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:underline font-medium"
                  >
                    {t("register.loginHere")}
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
