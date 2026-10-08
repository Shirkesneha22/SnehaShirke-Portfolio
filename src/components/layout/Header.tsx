"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Focus trap and escape key handler for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMobileMenuOpen) return;
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] transition-colors duration-300">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold font-heading tracking-tight text-[var(--text-main)] hover:text-[var(--accent)] transition-colors">
            Portfolio.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--text-muted)] hover:text-[var(--accent)] text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/Sneha_Shirke_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-4 py-2 text-sm font-medium rounded-md bg-[var(--surface)] text-[var(--text-main)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                aria-label="Download my resume as PDF"
              >
                Resume
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-[var(--text-main)] hover:bg-[var(--surface-hover)] transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed inset-0 top-16 sm:top-20 bg-[var(--background)] z-40 overflow-y-auto border-t border-[var(--border)]"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-[var(--border)]">
                <Link
                  href="/Sneha_Shirke_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium rounded-md bg-[var(--surface)] text-[var(--text-main)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                  aria-label="Download my resume as PDF"
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  }
