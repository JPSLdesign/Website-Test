import { Button } from "./ui/button";
import { ShoppingCart, User, Search, Moon, Sun } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function Header({ isDarkMode, onToggleTheme }: HeaderProps) {
  return (
    <header className="w-full border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl tracking-tight">ZENSEI</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Collection
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Care Guide
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            
            {/* Visible Separator */}
            <div className="h-6 w-px bg-border/60 mx-2" />
            
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onToggleTheme}
              className="hover:bg-accent"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}