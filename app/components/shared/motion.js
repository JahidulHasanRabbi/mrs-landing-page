// Shared design tokens + Framer Motion variants for the whole site.
// Pure data (no JSX) so any component — landing or content page — can import the
// same animation language and gold/mono typographic helpers. Keeping these in
// one module is what makes the landing page and the legal/info pages feel like
// one product.

// Font-family utility classes (the CSS variables are defined in app/layout.js).
export const mono = "font-[family-name:var(--font-jetbrains-mono)]";
export const sora = "font-[family-name:var(--font-sora)]";

// The signature gold text-glow used on headings and pills.
export const goldGlowText = { textShadow: "0px 0px 20px #826e00, 0px 0px 10px #ffd700" };

export const EASE = [0.22, 1, 0.36, 1]; // expo-out — entrances land soft

// On-load / on-scroll entrance: a clear rise + fade.
export const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

// Showpiece headline: a large rise + scale-up out of a heavy blur, paired with a
// gold shimmer that sweeps across the letters (the backgroundPosition travel).
export const heroTitle = {
  hidden: {
    opacity: 0,
    y: 64,
    scale: 0.88,
    filter: "blur(18px)",
    backgroundPosition: "160% 0%",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    backgroundPosition: "-60% 0%",
    transition: { duration: 1.1, ease: EASE },
  },
};

// Dramatic spring pop with real overshoot — badges/logo punch in from small.
export const popIn = {
  hidden: { opacity: 0, scale: 0.2, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 12, mass: 0.8 },
  },
};

// A visible cascade (≈130ms apart) so you actually watch items arrive in order.
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

// A tighter cascade for dense lists (rows, bullets) on the content pages.
export const staggerTight = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

// Reveal once, when ~a quarter of the element has scrolled into view.
export const inView = { once: true, amount: 0.25 };

// CTA attention-grabber: a quick side-to-side "shake" that fires every few
// seconds (repeatDelay) rather than constantly. `delay` offsets paired buttons.
export const ctaShake = (delay = 0) => ({
  x: [0, -5, 5, -4, 4, -2, 2, 0],
  transition: { duration: 0.55, ease: "easeInOut", repeat: Infinity, repeatDelay: 3, delay },
});

// A small, fixed sprinkle of gold motes for page backgrounds. Positions are
// hardcoded (percentages) rather than randomized so SSR and client render match.
export const BG_DOTS = [
  { top: "4%", left: "27%", size: 5, opacity: 0.47 },
  { top: "9%", left: "70%", size: 4, opacity: 0.26 },
  { top: "14%", left: "13%", size: 3, opacity: 0.5 },
  { top: "18%", left: "68%", size: 4, opacity: 0.14 },
  { top: "24%", left: "10%", size: 5, opacity: 0.36 },
  { top: "30%", left: "59%", size: 5, opacity: 0.38 },
  { top: "37%", left: "85%", size: 3, opacity: 0.32 },
  { top: "43%", left: "23%", size: 4, opacity: 0.48 },
  { top: "52%", left: "68%", size: 5, opacity: 0.28 },
  { top: "58%", left: "46%", size: 4, opacity: 0.42 },
  { top: "64%", left: "80%", size: 3, opacity: 0.22 },
  { top: "71%", left: "17%", size: 5, opacity: 0.42 },
  { top: "77%", left: "57%", size: 5, opacity: 0.38 },
  { top: "83%", left: "40%", size: 4, opacity: 0.29 },
  { top: "88%", left: "84%", size: 4, opacity: 0.32 },
  { top: "92%", left: "26%", size: 3, opacity: 0.19 },
];
