"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Research", href: "/research" },
  { label: "Open Source", href: "/open-source" },
  { label: "Blog", href: "/blog" },
  { label: "Manifesto", href: "/manifesto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[var(--color-background)]/80 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "bg-transparent"
        )}
      >
        <Container className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Kalaris Labs Home">
            <Image
              src="/assets/black logo kalaris logo ( geometric).png"
              alt="KalarisLabs Logo"
              width={44}
              height={44}
              priority
              className="transition-transform duration-300 group-hover:rotate-12 -mt-0.5"
            />
            <span className="text-[22px] md:text-[26px] font-bold tracking-tight text-[var(--color-foreground)] leading-none">
              KalarisLabs
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/manifesto"
              className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
            >
              Read the Manifesto
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-[var(--color-foreground)] text-[var(--color-background)] text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explore Platform
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[var(--color-foreground)]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-background)] pt-20"
          >
            <Container className="flex flex-col gap-1 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-light text-[var(--color-foreground)] border-b border-[var(--color-border)] hover:text-[var(--color-accent-blue)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-8 flex flex-col gap-3"
              >
                <Link
                  href="/platform"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 h-12 rounded-lg bg-[var(--color-foreground)] text-[var(--color-background)] text-base font-medium"
                >
                  Explore Platform
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
