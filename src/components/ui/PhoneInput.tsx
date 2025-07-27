import * as React from "react";
import PhoneInputLib from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Default styles (we'll override some)

import { cn } from "@/lib/utils";

interface PhoneInputProps {
  value?: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  className?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, placeholder = "Enter phone number", className }, ref) => {
    return (
      <PhoneInputLib
        ref={ref as any}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        defaultCountry="NL"
        international
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
