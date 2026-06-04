"use client";

// Shared chrome used by every page: the masked-icon helper, the CTA shine, the
// scrolling ticker, the sticky header (with dropdown nav), the footer, and the
// gold-mote background. The landing page and all the legal/info pages render the
// exact same header/footer so navigation feels seamless across routes.

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FOOTER_LINKS } from "../landing/landingData";
import { mono, EASE, fadeUp, stagger, inView, BG_DOTS } from "./motion";

/* Inline-mask icon: the Iconify SVGs use currentColor, so masking with
 * `bg-current` lets each icon inherit its parent's text color. */
export function MaskIcon({ src, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`block shrink-0 bg-current ${className}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

// A glossy "shine" glare that sweeps diagonally across its parent every few
// seconds — the classic CTA shimmer. The parent must be `relative
// overflow-hidden` so the band is clipped to the button's rounded shape.
export function Shine({ delay = 0 }) {
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
      initial={{ x: "-150%" }}
      animate={{ x: ["-150%", "400%"] }}
      transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.8, delay }}
    />
  );
}

// Scrolling ticker — the text drifts continuously like a headline. Two copies
// + an x animation of 0 → -50% (one copy width) loops seamlessly.
export function Ticker({ className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {[0, 1].map((copy) => (
          <span
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className={`pr-16 text-sm font-bold tracking-[1.2px] text-[#ffd700] ${mono}`}
          >
            Spin, score, predict, and win exciting rewards on KingGroup44!
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu on Escape for keyboard users.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="sticky top-0 z-20 w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#041502] to-[#1e5119]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0px_0px_24px_0px_black]" />
      <div className="relative mx-auto max-w-[1440px] px-4 py-3 sm:px-6 lg:px-10">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Logo always routes home, so the header doubles as a back-to-home
           * affordance on the content pages. */}
          <Link href="/" aria-label="KingGroup44 — home" className="shrink-0">
            <Image
              src="/assets/landing/logo.png"
              alt="KingGroup44"
              width={800}
              height={300}
              priority
              style={{ width: "auto" }}
              className="h-16 w-auto sm:h-20"
            />
          </Link>
          {/* Desktop: ticker sits inline between the logo and the menu. */}
          <Ticker className="hidden flex-1 md:block" />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-30 ml-auto grid size-10 place-items-center text-[#ffd700] md:ml-0"
          >
            <MaskIcon src="/assets/landing/icons/pajamas-hamburger.svg" className="size-7" />
          </button>
        </div>
        {/* Mobile: no room inline next to the logo, so the ticker gets its own
         * full-width row beneath the logo/menu. */}
        <Ticker className="mt-2 md:hidden" />

        {/* Dropdown menu (site links). A transparent full-screen catcher closes
         * it on any outside click; the panel itself drops in from the top-right. */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                tabIndex={-1}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-10 cursor-default"
              />
              <motion.nav
                id="site-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="absolute right-4 top-full z-20 mt-2 w-56 overflow-hidden rounded-xl border-2 border-[rgba(170,141,39,0.8)] bg-gradient-to-b from-[#041502] to-[#0c3a0a] shadow-[0px_8px_24px_rgba(0,0,0,0.5)] sm:right-6 lg:right-10"
              >
                <ul className="flex flex-col py-2">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setMenuOpen(false)}
                      className={`block px-5 py-3 text-sm font-bold tracking-[1px] text-[#d0c6ab] transition-colors hover:bg-[rgba(255,215,0,0.08)] hover:text-[#ffd700] ${mono}`}
                    >
                      Home
                    </Link>
                  </li>
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-5 py-3 text-sm font-bold tracking-[1px] text-[#d0c6ab] transition-colors hover:bg-[rgba(255,215,0,0.08)] hover:text-[#ffd700] ${mono}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[rgba(77,71,50,0.2)] bg-[#010c00]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
      >
        <motion.div variants={fadeUp}>
          <Link href="/" aria-label="KingGroup44 — home">
            <Image
              src="/assets/landing/logo.png"
              alt="KingGroup44"
              width={800}
              height={300}
              style={{ width: "auto" }}
              className="h-20 w-auto"
            />
          </Link>
        </motion.div>
        <motion.nav
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 pb-6"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-bold tracking-[1.2px] text-[#999077] transition-colors hover:text-[#ffd700] ${mono}`}
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
        <motion.p variants={fadeUp} className={`text-center text-base text-[#999077]`}>
          © 2026 KingGroup44. High-Stakes Digital Entertainment.
        </motion.p>
      </motion.div>
    </footer>
  );
}

// The shared page backdrop: a top-down green→black radial wash plus the twinkling
// gold motes. Renders behind everything (negative z-index) and clips its own
// horizontal overflow so it never creates a scroll container.
export function PageBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #0a3406 0%, #052003 35%, #021001 65%, #000000 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {BG_DOTS.map((dot, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gradient-to-b from-[#ffd000] to-[#997d00]"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
            animate={{ opacity: [dot.opacity * 0.35, dot.opacity, dot.opacity * 0.35] }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </div>
    </>
  );
}
