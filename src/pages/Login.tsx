import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [registerData, setRegisterData] = useState({
    companyName: "",
    companyMainEmail: "",
    companyPhone: "",
    address: "",
    adminName: "",
    adminEmail: "",
    password: "",
    passwordConfirm: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", loginData);
    // TODO: Implement login logic
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register data:", registerData);
    // TODO: Implement registration logic
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.primary/0.1),transparent_50%)]" />
      
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold hero-gradient-text">Revalyze</span>
          </Link>
          
          <h1 className="text-2xl font-bold mb-2">Welcome to Revalyze</h1>
          <p className="text-muted-foreground">Sign in to your account or create a new one</p>
        </div>

        <Card className="card-elevated">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Account Access</CardTitle>
            <CardDescription className="text-center">
              Choose an option below to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Create Account</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4 mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4 mt-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        placeholder="Your Company Ltd."
                        value={registerData.companyName}
                        onChange={(e) => setRegisterData({...registerData, companyName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyMainEmail">Company Email</Label>
                      <Input
                        id="companyMainEmail"
                        type="email"
                        placeholder="contact@company.com"
                        value={registerData.companyMainEmail}
                        onChange={(e) => setRegisterData({...registerData, companyMainEmail: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyPhone">Company Phone</Label>
                      <Input
                        id="companyPhone"
                        type="tel"
                        placeholder="+31 6 12345678"
                        value={registerData.companyPhone}
                        onChange={(e) => setRegisterData({...registerData, companyPhone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        placeholder="Street, City, Country"
                        value={registerData.address}
                        onChange={(e) => setRegisterData({...registerData, address: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="adminName">Admin Name</Label>
                      <Input
                        id="adminName"
                        placeholder="John Admin"
                        value={registerData.adminName}
                        onChange={(e) => setRegisterData({...registerData, adminName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="adminEmail">Admin Email</Label>
                      <Input
                        id="adminEmail"
                        type="email"
                        placeholder="admin@company.com"
                        value={registerData.adminEmail}
                        onChange={(e) => setRegisterData({...registerData, adminEmail: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="Create a strong password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={registerData.passwordConfirm}
                        onChange={(e) => setRegisterData({...registerData, passwordConfirm: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
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

export default Login;