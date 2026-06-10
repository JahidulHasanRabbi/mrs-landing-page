"use client";

// Reusable presentational building blocks for the legal / info pages. They share
// the landing page's dark-green + gold casino aesthetic (same chrome, motion
// language, and gold-glow type) so the documents feel like part of the product
// rather than a plain legal afterthought.

import { useState } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { mono, sora, goldGlowText, EASE, fadeUp, stagger, staggerTight, inView } from "../shared/motion";
import { MaskIcon, Shine, SiteHeader, SiteFooter, PageBackground } from "../shared/SiteChrome";

const inter = "font-[family-name:var(--font-inter)]";

// Page shell: background + sticky header + animated hero + body + footer.
// `eyebrow` shows above the title; `updated`/`tagline` show below it.
export function ContentPage({ title, eyebrow = "KingGroup44", updated, tagline, children }) {
  return (
    <MotionConfig reducedMotion="never">
      <div className="relative isolate min-h-screen w-full bg-[#020b01]">
        <PageBackground />
        <SiteHeader />
        <main className="relative flex w-full flex-col items-center">
          <PageHero eyebrow={eyebrow} title={title} updated={updated} tagline={tagline} />
          <div className="w-full max-w-[920px] px-4 pb-12 sm:px-6 lg:px-8">{children}</div>
        </main>
        <SiteFooter />
      </div>
    </MotionConfig>
  );
}

function PageHero({ eyebrow, title, updated, tagline }) {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-10 pt-12 text-center sm:pb-14 sm:pt-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mx-auto flex max-w-[820px] flex-col items-center gap-5"
      >
        <motion.span
          variants={fadeUp}
          className={`inline-flex items-center gap-2 rounded-full border border-[rgba(170,141,39,0.8)] bg-[#041202] px-4 py-1.5 text-xs font-bold uppercase tracking-[2.4px] text-[#ffd700] ${mono}`}
        >
          <span className="size-1.5 rotate-45 bg-[#ffd700]" />
          {eyebrow}
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className={`bg-clip-text text-4xl font-extrabold leading-tight tracking-[-1px] text-transparent sm:text-5xl lg:text-6xl ${sora}`}
          style={{
            backgroundImage: "linear-gradient(110deg, #fff7cc 0%, #ffd700 45%, #ffe86d 60%, #c8a516 100%)",
          }}
        >
          {title}
        </motion.h1>
        {tagline && (
          <motion.p variants={fadeUp} className={`max-w-[600px] text-base text-[#d0c6ab] sm:text-lg ${inter}`}>
            {tagline}
          </motion.p>
        )}
        {updated && (
          <motion.p variants={fadeUp} className={`text-xs tracking-[1.5px] text-[#999077] ${mono}`}>
            {updated}
          </motion.p>
        )}
        {/* Gold divider with a centered diamond. */}
        <motion.div variants={fadeUp} className="mt-2 flex w-full max-w-[220px] items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(255,215,0,0.6)]" />
          <span className="size-2 rotate-45 bg-[#ffd700] drop-shadow-[0_0_6px_#ffd700]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(255,215,0,0.6)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Lead-in paragraphs shown above the numbered sections (the document preamble).
export function Intro({ paragraphs }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={stagger}
      className="mb-10 flex flex-col gap-4 border-l-2 border-[rgba(255,215,0,0.4)] pl-5"
    >
      {paragraphs.map((p, i) => (
        <motion.p key={i} variants={fadeUp} className={`text-[15px] leading-7 text-[#cfc6ab] sm:text-base ${inter}`}>
          {p}
        </motion.p>
      ))}
    </motion.div>
  );
}

// A numbered document section rendered as a gold-edged card. Hover lifts it
// slightly and brightens the border so long documents stay lively to scroll.
export function Section({ n, title, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative mb-5 overflow-hidden rounded-2xl border border-[rgba(170,141,39,0.45)] p-6 shadow-[inset_-9px_8px_18px_0px_rgba(0,0,0,0.25)] transition-colors hover:border-[#ffd700] sm:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2f08] to-[#04140200]" />
      {/* Gold rail down the left edge. */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#ffd700] to-[#826e00] opacity-70 transition-opacity group-hover:opacity-100" />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center gap-3">
          {n != null && (
            <span
              className={`grid size-9 shrink-0 place-items-center rounded-lg border border-[rgba(255,215,0,0.5)] bg-[#041202] text-sm font-extrabold text-[#ffd700] ${mono}`}
              style={goldGlowText}
            >
              {n}
            </span>
          )}
          <h2 className={`text-xl font-bold text-white sm:text-2xl ${sora}`}>{title}</h2>
        </div>
        <div className="flex flex-col gap-4 pl-0 sm:pl-12">{children}</div>
      </div>
    </motion.section>
  );
}

// Plain section without a card frame — for landing-style content blocks.
export function Subheading({ children }) {
  return (
    <h3 className={`text-sm font-bold uppercase tracking-[1.8px] text-[#ffd700] ${mono}`}>{children}</h3>
  );
}

export function Prose({ children }) {
  return <p className={`text-[15px] leading-7 text-[#cfc6ab] sm:text-base ${inter}`}>{children}</p>;
}

export function Note({ children }) {
  return <p className={`text-sm italic leading-6 text-[#999077] ${inter}`}>{children}</p>;
}

// Bullet list with gold diamond markers. Items are strings or { b, t } pairs
// where `b` is a bold gold lead-in.
export function Bullets({ items }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={staggerTight}
      className="flex flex-col gap-2.5"
    >
      {items.map((item, i) => {
        const obj = typeof item === "object";
        return (
          <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
            <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-[#ffd700] drop-shadow-[0_0_4px_rgba(255,215,0,0.6)]" />
            <span className={`text-[15px] leading-7 text-[#cfc6ab] ${inter}`}>
              {obj ? (
                <>
                  <span className="font-bold text-[#ffe86d]">{item.b}</span>
                  {item.t ? <> — {item.t}</> : null}
                </>
              ) : (
                item
              )}
            </span>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

// Numbered step list — for "How to Join" style flows.
export function Steps({ items }) {
  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={stagger}
      className="flex flex-col gap-4"
    >
      {items.map((item, i) => (
        <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
          <span
            className={`grid size-9 shrink-0 place-items-center rounded-full border border-[rgba(255,215,0,0.5)] bg-[#041202] text-sm font-extrabold text-[#ffd700] ${mono}`}
            style={goldGlowText}
          >
            {i + 1}
          </span>
          <span className={`pt-1 text-[15px] leading-7 text-[#cfc6ab] ${inter}`}>
            <span className="font-bold text-[#ffe86d]">{item.b}</span>
            {item.t ? <> — {item.t}</> : null}
          </span>
        </motion.li>
      ))}
    </motion.ol>
  );
}

// Contact / detail card — gold-edged with label:value rows; values can be links.
export function Callout({ title, lines }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={fadeUp}
      className="relative overflow-hidden rounded-xl border border-[#ffd700] p-5 shadow-[inset_-9px_8px_10px_0px_rgba(0,0,0,0.25)] sm:p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a5205] to-[#051d02]" />
      <div className="relative flex flex-col gap-2">
        {title && <p className={`text-sm font-bold uppercase tracking-[1.5px] text-[#ffd700] ${mono}`}>{title}</p>}
        {lines.map((line, i) => (
          <div key={i} className="flex flex-wrap items-baseline gap-x-2">
            {line.label && <span className={`text-sm font-bold text-[#9fdf9a] ${mono}`}>{line.label}:</span>}
            {line.href ? (
              <a
                href={line.href}
                target={line.href?.startsWith("http") ? "_blank" : undefined}
                rel={line.href?.startsWith("http") ? "nofollow noopener noreferrer" : undefined}
                className={`text-sm font-bold text-[#ffd700] underline decoration-[rgba(255,215,0,0.4)] underline-offset-2 transition-colors hover:text-[#ffe86d] ${mono}`}
              >
                {line.value}
              </a>
            ) : (
              <span className={`text-sm text-[#e6e0cd] ${mono}`}>{line.value}</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Data table (e.g. the affiliate commission tiers).
export function DataTable({ head, rows }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={fadeUp}
      className="overflow-hidden rounded-xl border border-[rgba(170,141,39,0.6)]"
    >
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gradient-to-r from-[#0a3406] to-[#1e5119]">
            {head.map((h) => (
              <th key={h} className={`px-5 py-3 text-xs font-bold uppercase tracking-[1.5px] text-[#ffd700] ${mono}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-[rgba(170,141,39,0.25)] transition-colors hover:bg-[rgba(255,215,0,0.06)] ${
                i % 2 ? "bg-[rgba(255,255,255,0.015)]" : ""
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-5 py-3 text-sm ${
                    j === row.length - 1 ? `font-extrabold text-[#ffe86d] ${mono}` : `text-[#cfc6ab] ${inter}`
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

// Feature / tool card grid item.
export function FeatureCard({ name, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative overflow-hidden rounded-xl border border-[rgba(170,141,39,0.5)] p-5 shadow-[inset_-9px_8px_10px_0px_rgba(0,0,0,0.25)] transition-colors hover:border-[#ffd700]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#082f06] to-[#031a00]" />
      <div className="relative flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="size-2 rotate-45 bg-[#ffd700] drop-shadow-[0_0_5px_#ffd700]" />
          <h3 className={`text-base font-bold text-white ${sora}`}>{name}</h3>
        </div>
        {desc && <p className={`text-sm leading-6 text-[#cfc6ab] ${inter}`}>{desc}</p>}
      </div>
    </motion.div>
  );
}

export function CardGrid({ children, cols = 2 }) {
  const grid = cols === 3 ? "md:grid-cols-3" : "sm:grid-cols-2";
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={stagger}
      className={`grid grid-cols-1 gap-4 ${grid}`}
    >
      {children}
    </motion.div>
  );
}

// Section heading used between content blocks (not inside a numbered card).
export function BlockHeading({ children, icon }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={fadeUp}
      className="mb-5 mt-12 flex items-center gap-3"
    >
      {icon && <MaskIcon src={icon} className="size-6 text-[#ffd700]" />}
      <h2
        className={`text-2xl font-bold uppercase tracking-[2px] text-[#ffd700] sm:text-3xl ${mono}`}
        style={goldGlowText}
      >
        {children}
      </h2>
    </motion.div>
  );
}

// Accordion for the FAQ. Each item expands one answer at a time within its group.
export function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            variants={fadeUp}
            className={`relative overflow-hidden rounded-xl border shadow-[inset_-9px_8px_10px_0px_rgba(0,0,0,0.25)] transition-colors ${
              isOpen ? "border-[#ffd700]" : "border-[rgba(170,141,39,0.45)]"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#082f06] to-[#031a00]" />
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="relative flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className={`text-[15px] font-bold text-white sm:text-base ${sora}`}>{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="grid size-6 shrink-0 place-items-center text-xl font-light text-[#ffd700]"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="relative overflow-hidden"
                >
                  <p className={`px-5 pb-5 text-[15px] leading-7 text-[#cfc6ab] ${inter}`}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

// Big call-to-action button with the signature shine sweep.
export function CtaButton({ href, children, icon }) {
  return (
    <motion.a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "nofollow noopener noreferrer" : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#6a5b0a] bg-[#ffd700] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[1.2px] text-[#3a3000] ${mono}`}
    >
      <Shine delay={0} />
      {icon && <MaskIcon src={icon} className="size-4" />}
      {children}
    </motion.a>
  );
}

// Generic renderer for the { p, h, ul, callout, note } block schema used by the
// long-form Privacy & Terms sections.
export function Blocks({ blocks }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.p) return <Prose key={i}>{block.p}</Prose>;
        if (block.h) return <Subheading key={i}>{block.h}</Subheading>;
        if (block.ul) return <Bullets key={i} items={block.ul} />;
        if (block.note) return <Note key={i}>{block.note}</Note>;
        if (block.callout) return <Callout key={i} {...block.callout} />;
        return null;
      })}
    </>
  );
}
