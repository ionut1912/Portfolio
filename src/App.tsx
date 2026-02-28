import { useState, type JSX } from "react";
import { Footer } from "./components/Footer";
import { NAV_LINKS } from "./data/portfolioData";
import type { SectionId } from "./types/portfolio";
import Home from "./pages/Home";

export default function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const renderContent = (): JSX.Element => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <Home />;
      case "projects":
        return <Home />;
      case "contact":
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <button
            className="flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
            onClick={() => setActiveSection("home")}
          >
            <span className="font-bold text-lg tracking-tight">IonutDev</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id ? "text-primary" : "hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            className="hidden md:flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold rounded-lg transition-all shadow-nav"
            href="mailto:hello@alexdev.com"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}
