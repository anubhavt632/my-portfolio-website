import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Lock } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // TODO: Check authentication status from your MERN backend
  // const isAuthenticated = checkAuthStatus();
  // if (!isAuthenticated) navigate("/auth");
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <section className="flex-1 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <Button variant="outline" onClick={() => navigate("/auth")}>
              <Lock className="mr-2 h-4 w-4" />
              Login Required
            </Button>
          </div>
          
          <Alert className="mb-8 border-destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Authentication Required:</strong> Connect your MERN backend to enable login functionality. 
              Once authenticated, you'll be able to add, edit, and manage your portfolio projects.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Graphic Design</CardTitle>
                <CardDescription>Total Projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">--</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Video Editing</CardTitle>
                <CardDescription>Total Projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">--</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>Total Projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">--</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Add New Project</CardTitle>
              <CardDescription>Create and manage your portfolio projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-center py-8">
                <p className="text-muted-foreground">
                  Dashboard functionality requires backend integration.
                </p>
                <Button disabled>Add Project (Requires Cloud)</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
