import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
          
          <Alert className="mb-8 border-destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Backend Required:</strong> This dashboard needs Lovable Cloud enabled to function. 
              Without a backend, you cannot add, edit, or store projects. Enable Cloud for database, authentication, and file storage.
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
    </div>
  );
};

export default Dashboard;
