"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur ${isScrolled ? "shadow-lg shadow-black/20" : ""}`}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="#" className="text-sm font-semibold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          FK 
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="#about" className="text-foreground-secondary hover:text-foreground transition-colors duration-200">About</Link>
          <Link href="#experience" className="text-foreground-secondary hover:text-foreground transition-colors duration-200">Experience</Link>
          <Link href="#projects" className="text-foreground-secondary hover:text-foreground transition-colors duration-200">Projects</Link>
          <Link href="#skills" className="text-foreground-secondary hover:text-foreground transition-colors duration-200">Skills</Link>
          <Link href="#education" className="text-foreground-secondary hover:text-foreground transition-colors duration-200">Education</Link>
          <Link href="#organizational" className="text-foreground-secondary hover:text-foreground transition-colors duration-200">Organization</Link>
          <Link href="#contact" className="text-foreground-secondary hover:text-foreground transition-colors duration-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
