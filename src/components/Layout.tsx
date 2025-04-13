
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ClipboardList, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-10 bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ClipboardList className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Course Feedback Compass</span>
            </Link>
            <nav className="flex items-center space-x-4">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                asChild
                className="flex items-center gap-2"
              >
                <Link to="/">
                  <ClipboardList className="h-4 w-4" />
                  <span>Survey</span>
                </Link>
              </Button>
              <Button
                variant={location.pathname === "/results" ? "default" : "ghost"}
                asChild
                className="flex items-center gap-2"
              >
                <Link to="/results">
                  <BarChart className="h-4 w-4" />
                  <span>Results</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Card className="p-6 shadow-md animate-fade-in">
            {children}
          </Card>
        </div>
      </main>
      <footer className="bg-card py-6 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Course Feedback Compass. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
