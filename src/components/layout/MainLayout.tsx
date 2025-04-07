
import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Book, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background dark:bg-background transition-colors duration-300">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <div className="bg-study text-study-foreground p-2 rounded-lg">
              <Book className="h-5 w-5" />
            </div>
            <span className="font-heading">Revision Hub</span>
          </Link>

          {/* Mobile menu */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="py-4 space-y-4">
                  <Link 
                    to="/" 
                    className="block py-2 px-4 rounded-md hover:bg-secondary transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    className="block py-2 px-4 rounded-md hover:bg-secondary transition-colors"
                  >
                    About
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link 
                  to="/" 
                  className="font-medium hover:text-study transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="font-medium hover:text-study transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className={cn(
        "container mx-auto px-4 py-8",
        "animate-fade-in" // Add fade-in animation
      )}>
        {children}
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>© 2025 Revision Hub. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/" className="hover:text-study transition-colors">Terms</Link>
            <Link to="/" className="hover:text-study transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-study transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
