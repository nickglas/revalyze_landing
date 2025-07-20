import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: {
    name: string;
    price: string;
    priceId: string;
  } | null;
}

export const SubscriptionModal = ({ isOpen, onClose, selectedPlan }: SubscriptionModalProps) => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyMainEmail: "",
    companyPhone: "",
    address: "",
    adminName: "",
    adminEmail: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.passwordConfirm) {
      alert("Passwords do not match");
      return;
    }

    const subscriptionData = {
      ...formData,
      priceId: selectedPlan?.priceId,
    };

    console.log("Subscription data:", subscriptionData);
    // TODO: Implement actual subscription logic here
    
    // Reset form and close modal
    setFormData({
      companyName: "",
      companyMainEmail: "",
      companyPhone: "",
      address: "",
      adminName: "",
      adminEmail: "",
      password: "",
      passwordConfirm: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Subscribe to {selectedPlan?.name}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  placeholder="Enter company name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companyMainEmail">Company Email *</Label>
                <Input
                  id="companyMainEmail"
                  type="email"
                  value={formData.companyMainEmail}
                  onChange={(e) => handleInputChange("companyMainEmail", e.target.value)}
                  placeholder="contact@company.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companyPhone">Company Phone *</Label>
                <Input
                  id="companyPhone"
                  type="tel"
                  value={formData.companyPhone}
                  onChange={(e) => handleInputChange("companyPhone", e.target.value)}
                  placeholder="+31 6 12345678"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Street, City, Country"
                  required
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Admin Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Administrator Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="adminName">Admin Name *</Label>
                <Input
                  id="adminName"
                  value={formData.adminName}
                  onChange={(e) => handleInputChange("adminName", e.target.value)}
                  placeholder="Enter admin name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="adminEmail">Admin Email *</Label>
                <Input
                  id="adminEmail"
                  type="email"
                  value={formData.adminEmail}
                  onChange={(e) => handleInputChange("adminEmail", e.target.value)}
                  placeholder="admin@company.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="passwordConfirm">Confirm Password *</Label>
                <Input
                  id="passwordConfirm"
                  type="password"
                  value={formData.passwordConfirm}
                  onChange={(e) => handleInputChange("passwordConfirm", e.target.value)}
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Plan Summary */}
          {selectedPlan && (
            <div className="bg-surface-elevated p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Selected Plan</h4>
              <div className="flex justify-between items-center">
                <span>{selectedPlan.name}</span>
                <span className="font-bold">{selectedPlan.price}</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="hero" className="flex-1">
              Subscribe Now
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};