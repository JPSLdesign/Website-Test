import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturedBonsai } from "./components/FeaturedBonsai";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class to document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <FeaturedBonsai />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}