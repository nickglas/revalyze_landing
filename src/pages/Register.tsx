import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
import { usePlanStore } from "@/stores/planStore";
import { useCompanyStore } from "@/stores/companyStore";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { isValidPhoneNumber } from "react-phone-number-input";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    companyName: z.string().min(2, "Company name is required"),
    companyPhone: z
      .string()
      .min(1, "Phone number is required")
      .refine((val) => isValidPhoneNumber(val), {
        message: "Invalid phone number",
      }),
    address: z.string().min(5, "Address is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
    selectedPlan: z.string().nonempty("Please select a plan"),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterForm = z.infer<typeof registerSchema>;

export default function Register() {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { plans, selectPlan, selectedPlan } = usePlanStore();
  const { registerCompany, loading } = useCompanyStore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      companyPhone: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
      selectedPlan: "",
      acceptTerms: false,
    },
  });

  // Pre-select plan if coming from pricing
  useEffect(() => {
    const plan = selectedPlan;
    if (plan) setValue("selectedPlan", plan.plan._id);
  }, [searchParams, setValue]);

  const onSubmit = async (data: RegisterForm) => {
    const checkoutUrl = await registerCompany({
      companyName: data.companyName,
      companyMainEmail: data.email,
      companyPhone: data.companyPhone,
      address: data.address,
      priceId: selectedPlan.selectedOption.stripePriceId,
      adminName: data.fullName,
      adminEmail: data.email,
      password: data.password,
      passwordConfirm: data.confirmPassword,
    });

    if (checkoutUrl) {
      window.location.replace(checkoutUrl);
    }
  };

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
          <Card className="relative overflow-hidden rounded-xl border transition">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t("register.title")}</CardTitle>
              <CardDescription>{t("register.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">{t("register.fullName")}</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
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
                    {...register("companyName")}
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyPhone">Company phone number</Label>
                  <PhoneInput
                    value={watch("companyPhone")}
                    onChange={(val) => setValue("companyPhone", val || "")}
                    placeholder="Enter phone number"
                  />
                  {errors.companyPhone && (
                    <p className="text-red-500 text-sm">
                      {errors.companyPhone.message}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address">Company address</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Enter your company address"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">{t("register.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">{t("register.password")}</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      {...register("password")}
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
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
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
                      {...register("confirmPassword")}
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
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                {/* Plan Selection */}
                <div className="space-y-2">
                  <Label htmlFor="plan">{t("register.selectPlan")}</Label>
                  <Select
                    value={selectedPlan.selectedOption.stripePriceId}
                    onValueChange={(value) => setValue("selectedPlan", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("register.selectPlan")} />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-neutral-800">
                      {plans.map((plan) =>
                        plan.billingOptions.map((option) => (
                          <SelectItem
                            key={option.stripePriceId}
                            value={option.stripePriceId}
                          >
                            {plan.name} ({option.interval})
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  {errors.selectedPlan && (
                    <p className="text-red-500 text-sm">
                      {errors.selectedPlan.message}
                    </p>
                  )}
                </div>
                {/* Terms Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    onCheckedChange={(checked) =>
                      setValue("acceptTerms", !!checked)
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none"
                  >
                    {t("register.terms")}
                  </label>
                </div>
                {errors.acceptTerms && (
                  <p className="text-red-500 text-sm">
                    {errors.acceptTerms.message}
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full bg-[#3f3eb3]"
                  variant="default"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Registering..." : t("register.createAccount")}
                </Button>
              </form>

              {/* Sign In Link */}
              <div className="mt-6 text-center flex items-center justify-center gap-4">
                <Link
                  to="/"
                  className="text-primary hover:underline font-medium"
                >
                  Home
                </Link>
                |
                <Link
                  to="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
