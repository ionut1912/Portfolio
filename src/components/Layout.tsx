import { NAV_LINKS } from "@/data/portfolioData";
import Home from "@/pages/Home";
import type { JSX } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";

export default function Layout(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <button
            className="flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
            onClick={() => navigate("/")}
          >
            <span className="font-bold text-lg tracking-tight">IonutDev</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.id}
                to={`/${link.id}`}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? "text-primary" : "hover:text-primary"}`
                }
              >
                {link.label}
              </NavLink>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
