"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, MotionConfig, motion, useMotionValue, useTransform } from "framer-motion";
import { VIP_TIERS, GAMES, PARTNERS, TELEGRAM_URL, PLAY_NOW_LINKS } from "./landingData";
import {
  mono,
  sora,
  goldGlowText,
  EASE,
  fadeUp,
  heroTitle,
  popIn,
  stagger,
  inView,
  inViewTall,
  ctaShake,
} from "../shared/motion";
import { MaskIcon, Shine, SiteHeader, SiteFooter, PageBackground } from "../shared/SiteChrome";

// useLayoutEffect on the client (so the carousel recenters before paint, which
// keeps the infinite-loop snap invisible) but falls back to useEffect on the
// server to avoid React's SSR warning.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function Hero() {
  return (
    <section className="flex w-full flex-col items-center gap-10 overflow-hidden px-4 py-10 sm:px-6 lg:px-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="flex w-full max-w-[821px] flex-col items-center gap-4 pb-6 text-center"
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ scale: 0.2, opacity: 0, rotate: -12 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 11, mass: 0.8, delay: 0.15 }}
            className="rounded-full"
            style={{ filter: "drop-shadow(0 0 18px rgba(255,215,0,0.55))" }}
          >
            <Image
              src="/assets/landing/icons/King-logo.png"
              alt=""
              width={800}
              height={300}
              priority
              className="h-20 w-20 rounded-full object-contain"
            />
          </motion.div>
          <span
            className="bg-gradient-to-r from-[#ffe86d] via-[#ffd700] to-[#ffe86d] bg-clip-text text-2xl capitalize tracking-[3.6px] text-transparent"
            style={{ fontFamily: '"Lucida Calligraphy", "Brush Script MT", cursive' }}
          >
            KingGroup44
          </span>
        </motion.div>
        <motion.h1
          variants={heroTitle}
          // Gradient text (base = the original #e4e1e7) with a bright band the
          // entrance sweeps across for a one-shot gold shimmer.
          className={`bg-clip-text text-4xl font-extrabold leading-tight tracking-[-1.28px] text-transparent sm:text-5xl lg:text-[64px] lg:leading-[65px] ${sora}`}
          style={{
            backgroundImage:
              "linear-gradient(110deg, #e4e1e7 0%, #e4e1e7 42%, #fff7cc 49%, #ffffff 52%, #fff7cc 55%, #e4e1e7 62%, #e4e1e7 100%)",
            backgroundSize: "250% 100%",
          }}
        >
          The Next-Gen Mini Game Platform
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className={`max-w-[640px] text-base leading-7 text-[#d0c6ab] sm:text-lg ${mono}`}
        >
          Enter a world of high-stakes entertainment with our exclusive collection of premium
          mini-games and luxury rewards.
        </motion.p>
      </motion.div>

      <VipTierBar />
    </section>
  );
}

// A single VIP badge tile (shield + label). Shared between the mobile
// auto-sliding marquee and the desktop evenly-spaced row. The shield PNGs are
// transparent, so a `drop-shadow` filter makes the gold glow hug the silhouette
// (matching Figma) instead of the square halo a box-shadow would produce.
function BadgeTile({ tier, className = "" }) {
  return (
    <div
      // Tile widths sized so the longest tier ("Cosmic Emperor", 14 chars in
      // JetBrains Mono) fits on a single line — uneven 1-line/2-line wrapping
      // is what made the mobile bar look ragged.
      className={`group flex w-[100px] shrink-0 cursor-pointer flex-col items-center gap-1 sm:w-[132px] lg:w-auto ${className}`}
    >
      <motion.div
        className="relative size-12 sm:size-16 lg:size-20"
        style={{ filter: "drop-shadow(0 0 8px #ffd700) drop-shadow(0 0 16px rgba(255,215,0,0.5))" }}
        whileHover={{
          scale: 1.18,
          y: -8,
          filter:
            "drop-shadow(0 0 14px #ffd700) drop-shadow(0 0 30px rgba(255,215,0,0.85))",
        }}
        whileTap={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        <Image src={tier.img} alt={tier.name} fill sizes="80px" className="object-contain" />
      </motion.div>
      <span
        className={`whitespace-nowrap text-[10px] font-bold tracking-[0.5px] text-[#ffd700] transition-[text-shadow,transform] duration-300 group-hover:scale-105 group-hover:[text-shadow:0_0_8px_rgba(255,215,0,0.9)] sm:text-xs sm:tracking-[1.2px] ${mono}`}
      >
        {tier.name}
      </span>
    </div>
  );
}

// Animated gold glow that orbits the bar's rounded-pill border. Built from a
// conic-gradient with a single bright sweep that rotates around the bar's
// center, masked to the border ring via the standard "padding + mask-composite
// exclude" trick. `useMotionValue` drives the gradient's `from` angle so the
// sweep moves smoothly without needing CSS @property registration.
function BorderFlare() {
  const angle = useMotionValue(0);

  useEffect(() => {
    const controls = animate(angle, 360, {
      duration: 7,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [angle]);

  const background = useTransform(
    angle,
    (a) =>
      `conic-gradient(from ${a}deg at 50% 50%,` +
      "rgba(255,215,0,0) 0%," +
      "rgba(255,215,0,0) 82%," +
      "rgba(255,230,120,1) 88%," +
      "#ffffff 92%," +
      "rgba(255,230,120,1) 96%," +
      "rgba(255,215,0,0) 100%)",
  );

  return (
    <motion.div
      aria-hidden="true"
      // Match the parent's responsive radius: a softer rounded-3xl on mobile
      // reads as a premium card; the full pill returns at lg where the bar is
      // wide enough to carry it.
      className="pointer-events-none absolute inset-0 z-[1] rounded-3xl lg:rounded-[9999px]"
      style={{
        background,
        padding: "4px",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        filter:
          "drop-shadow(0 0 6px #ffd700) drop-shadow(0 0 14px rgba(255,215,0,0.85))",
      }}
    />
  );
}

// Mobile/tablet VIP badge marquee — auto-scrolls continuously and is also
// draggable so users can swipe through the badges at their own pace. After a
// drag releases, the auto-scroll picks up from wherever the user let go.
// Two identical copies + a constant left-drift make the loop seamless;
// dragConstraints clamps drag to one copyWidth either way so the user can
// never expose the empty space beyond the track.
function VipMarqueeMobile() {
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const [copyWidth, setCopyWidth] = useState(0);

  // Linear drift from current x toward -copyWidth; on natural completion,
  // jump back to 0 and restart. Duration scales with remaining distance so
  // the speed (px/s) is constant across drag-resumes.
  const startScroll = useCallback(() => {
    if (copyWidth === 0) return;
    animRef.current?.stop();
    let xv = x.get();
    // Defensive: if a resize left x outside the seamless range, wrap it in.
    if (xv < -copyWidth || xv > 0) {
      xv = ((xv % copyWidth) + copyWidth) % copyWidth;
      if (xv > 0) xv -= copyWidth;
      x.set(xv);
    }
    const remaining = xv + copyWidth;
    const duration = (remaining / copyWidth) * 18;
    animRef.current = animate(x, -copyWidth, {
      duration: Math.max(0.01, duration),
      ease: "linear",
      onComplete: () => {
        x.set(0);
        startScroll();
      },
    });
  }, [copyWidth, x]);

  useIsoLayoutEffect(() => {
    const measure = () => {
      const firstCopy = trackRef.current?.children[0];
      if (!firstCopy) return;
      setCopyWidth(firstCopy.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    startScroll();
    return () => animRef.current?.stop();
  }, [startScroll]);

  return (
    <div className="relative overflow-hidden py-4 sm:py-6 lg:hidden">
      <motion.div
        ref={trackRef}
        drag="x"
        dragMomentum={false}
        dragElastic={0.08}
        dragConstraints={{ left: -copyWidth, right: 0 }}
        onDragStart={() => animRef.current?.stop()}
        onDragEnd={() => startScroll()}
        className="flex w-max cursor-grab active:cursor-grabbing [&_img]:pointer-events-none"
        // touchAction: pan-y keeps vertical page scroll working even though
        // framer-motion's drag is bound to this element.
        style={{ x, touchAction: "pan-y", willChange: "transform" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0">
            {VIP_TIERS.map((tier) => (
              <BadgeTile key={tier.name} tier={tier} className="px-2.5 sm:px-3" />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function VipTierBar() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={stagger}
      className="relative flex w-full max-w-[1360px] flex-col items-center"
    >
      {/* Overlapping "VIP RANK BADGES" pill */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
        }}
        className="relative z-10 -mb-5 rounded-full border-2 border-[rgba(170,141,39,0.8)] bg-[#041202] px-4 py-1.5 drop-shadow-[0px_0px_4px_rgba(255,215,0,0.15)]"
      >
        <span
          className={`text-lg font-bold uppercase tracking-[2px] text-[#ffd700] sm:text-2xl sm:tracking-[3.6px] lg:text-4xl ${mono}`}
          style={goldGlowText}
        >
          VIP Rank Badges
        </span>
      </motion.div>

      <motion.div
        variants={fadeUp}
        // Softer rounded-3xl on mobile (the stretched horizontal pill read as
        // awkward at narrow widths); the full pill returns at lg, where the
        // bar is wide enough to carry the shape.
        className="relative w-full overflow-hidden rounded-3xl border-2 border-[rgba(170,141,39,0.8)] shadow-[0px_0px_8px_6px_rgba(255,215,0,0.15)] lg:rounded-[9999px]"
      >
        {/* Wide, short radial (bright green center fading to near-black at the
         * edges) — matches the Figma gradient so the badge tiles blend into the
         * bar instead of reading as bright boxes. */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl lg:rounded-[9999px]"
          style={{
            background:
              "radial-gradient(ellipse 52% 52% at 50% 50%, #109d05 8%, #0f7906 31%, #0d5607 54%, #0b3208 77%, #0a2108 88%, #090f09 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_-2px_9px_15.2px_0px_rgba(59,176,48,0.19)] lg:rounded-[9999px]"
        />
        <BorderFlare />
        {/* Mobile/tablet: continuous auto-scroll + manual swipe (see
         * VipMarqueeMobile). */}
        <VipMarqueeMobile />

        {/* Desktop: all tiers fit, so spread them evenly with the pop-in cascade.
         * Extra horizontal padding keeps the first/last labels clear of the
         * rounded-pill curve (otherwise "Starlight" / "Cosmic King" clip). */}
        <motion.div
          variants={stagger}
          className="relative hidden items-center justify-between px-10 py-6 lg:flex xl:px-14"
        >
          {VIP_TIERS.map((tier) => (
            <motion.div key={tier.name} variants={popIn} className="flex flex-col items-center">
              <BadgeTile tier={tier} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const GAME_TITLE_GLOW = { textShadow: "0px 0px 15px #826e00, 0px 0px 7.5px #ffd700" };

function GameCard({ game, isActive, onSelect, onPlay, instant = false }) {
  return (
    // Outer is a div (not a button) so the real Play Now button can nest
    // inside without invalid HTML. Tapping the card body just selects it —
    // launching the partner link is now reserved for the explicit Play Now
    // pill, so users don't accidentally open a new tab by tapping the image.
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      aria-current={isActive || undefined}
      // `instant` kills the scale/glow transitions during the loop's invisible
      // copy-snap. Because the snap moves "active" to a different DOM node, an
      // enabled transition would visibly animate the snapped card up from
      // scale-90/no-border to its active size + glow — the loop-point glitch.
      className={`flex shrink-0 cursor-pointer flex-col items-center gap-3 outline-none sm:gap-4 ${instant ? "" : "transition-transform duration-500 ease-out"} ${isActive ? "z-10 scale-[1.12] lg:scale-[1.35]" : "scale-90 opacity-90"
        }`}
    >
      <div
        className={`relative h-[220px] w-[150px] overflow-hidden rounded-2xl sm:h-[315px] sm:w-[225px] ${instant ? "" : "transition-shadow duration-500"} ${isActive
            ? "border-2 border-[#ffd700] shadow-[0px_0px_10px_0px_#ffd700,0px_0px_24px_0px_#826e00]"
            : ""
          }`}
      >
        <Image src={game.img} alt={game.name} fill sizes="265px" className="object-cover" />
        {isActive && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPlay();
            }}
            className="absolute inset-x-3 bottom-3 rounded-full bg-[#ffd700] px-4 py-2.5 text-center text-sm font-bold text-[#3a3000] drop-shadow-[0px_0px_15px_rgba(255,215,0,0.5)] sm:px-6 sm:py-3 sm:text-lg"
          >
            <span className={sora}>Play Now</span>
          </button>
        )}
      </div>
      <span
        className={`text-center text-base font-bold uppercase tracking-[1.5px] text-[#d1caa7] sm:text-xl sm:tracking-[2.7px] ${mono}`}
        style={GAME_TITLE_GLOW}
      >
        {game.name}
      </span>
    </div>
  );
}

const GAMES_N = GAMES.length;
// Seven back-to-back copies of GAMES. We keep `active` inside the center copy
// and normalize back to it after every slide — far more headroom than any
// real-world swipe needs, so the boundary is effectively unreachable.
const COPIES = 7;
const CENTER_COPY = Math.floor(COPIES / 2);
const CENTER_FIRST = CENTER_COPY * GAMES_N;
const CENTER_LAST = CENTER_FIRST + GAMES_N - 1;
const GAMES_LOOP = Array.from({ length: COPIES * GAMES_N }, (_, i) => GAMES[i % GAMES_N]);

function GamesSection() {
  const [active, setActive] = useState(CENTER_FIRST);
  const [hovered, setHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  // `instant` kills the GameCard scale/glow CSS transitions for one frame
  // around the loop snap: the formerly-active outer-copy card and the new
  // active center-copy card swap appearances at the same on-screen pixels
  // without a visible scale animation.
  const [instant, setInstant] = useState(false);

  // The track's translateX is a motion value. Framer-motion writes straight
  // to the DOM on every change, so drag and animation updates never trigger
  // a React render — that's what keeps the swipe smooth.
  const x = useMotionValue(0);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const wasDragged = useRef(false);
  // Velocity carried from the most recent drag release into the snap-back
  // spring, so the slide feels like a continuation of the user's gesture
  // instead of a fresh animation.
  const lastVelocity = useRef(0);
  // The first layout pass and every loop-snap should jump x instantly
  // instead of animating. Reset to false after the jump runs.
  const skipNextAnim = useRef(true);

  // Auto-advance pauses on mouse hover OR while a drag is in flight. Derived
  // rather than a single flag so a mouse drag-and-release doesn't clobber the
  // hover-pause that was already in effect.
  const paused = hovered || isDragging;

  const targetXFor = useCallback((idx) => {
    const viewport = viewportRef.current;
    const card = trackRef.current?.children[idx];
    if (!viewport || !card) return 0;
    return viewport.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2);
  }, []);

  // Drive the track to the active card. Spring with carried velocity gives
  // the post-drag slide that "released finger" feel; an instant jump is used
  // on mount and on the invisible loop snap. onComplete normalizes active
  // back to the center copy whenever it drifts out, keeping the loop endless
  // without ever exposing the track ends.
  useIsoLayoutEffect(() => {
    const target = targetXFor(active);
    animRef.current?.stop();
    if (skipNextAnim.current) {
      x.set(target);
      skipNextAnim.current = false;
      lastVelocity.current = 0;
      return;
    }
    const v = lastVelocity.current;
    lastVelocity.current = 0;
    animRef.current = animate(x, target, {
      type: "spring",
      stiffness: 350,
      damping: 40,
      velocity: v,
      restDelta: 0.5,
      onComplete: () => {
        if (active < CENTER_FIRST || active > CENTER_LAST) {
          const normalized =
            CENTER_FIRST +
            ((((active - CENTER_FIRST) % GAMES_N) + GAMES_N) % GAMES_N);
          skipNextAnim.current = true;
          setInstant(true);
          setActive(normalized);
        }
      },
    });
    return () => animRef.current?.stop();
  }, [active, x, targetXFor]);

  // Re-enable card transitions one paint after a loop snap.
  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setInstant(false)),
    );
    return () => cancelAnimationFrame(id);
  }, [instant]);

  // Resize: snap x to the current active card (no animation).
  useEffect(() => {
    const handler = () => {
      animRef.current?.stop();
      x.set(targetXFor(active));
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [active, x, targetXFor]);

  // Pause auto-advance only for a real mouse hover. We use pointerType-gated
  // pointer events instead of onMouseEnter/Leave because on touch devices a
  // tap fires a sticky mouseenter with no matching mouseleave.
  const pauseForMouse = (e) => e.pointerType === "mouse" && setHovered(true);
  const resumeForMouse = (e) => e.pointerType === "mouse" && setHovered(false);

  // Auto-advance one card every 2.6s. Restarts after every active change so
  // a manual swipe or tap never races a queued tick.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => i + 1), 2600);
    return () => clearInterval(id);
  }, [paused, active]);

  // Drag handlers — framer-motion's built-in `drag="x"` owns the gesture.
  // We just decide what active to snap to once the user lets go.
  const onDragStart = () => {
    wasDragged.current = true;
    setIsDragging(true);
    animRef.current?.stop();
  };

  const onDragEnd = (_e, info) => {
    setIsDragging(false);
    const children = trackRef.current?.children;
    if (!children || children.length < 2) return;
    const pitch = children[1].offsetLeft - children[0].offsetLeft;
    if (pitch <= 0) return;

    // Project where x would settle with a touch of inertia, then snap to the
    // nearest card center. Multiplier picked so a typical flick (~2000 px/s)
    // carries ~2 cards past the release point — feels natural, not slidey.
    const projected = x.get() + info.velocity.x * 0.18;
    const baseX = targetXFor(0); // x value when the first track child is centered
    const rawIdx = Math.round((baseX - projected) / pitch);
    const snappedIdx = Math.max(0, Math.min(GAMES_LOOP.length - 1, rawIdx));

    lastVelocity.current = info.velocity.x;
    setActive(snappedIdx);
  };

  // Clear wasDragged after the click that follows pointer-up has had a
  // chance to fire. Without this, the next card tap would be swallowed.
  useEffect(() => {
    if (isDragging || !wasDragged.current) return;
    const id = setTimeout(() => {
      wasDragged.current = false;
    }, 80);
    return () => clearTimeout(id);
  }, [isDragging]);

  const current = GAMES[active % GAMES_N];

  const openRandomPlayLink = () => {
    if (wasDragged.current) return;
    const url = PLAY_NOW_LINKS[Math.floor(Math.random() * PLAY_NOW_LINKS.length)];
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const selectCard = (i) => {
    if (wasDragged.current) return;
    setActive(i);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={stagger}
      className="flex w-full flex-col items-center gap-2 overflow-hidden py-6 sm:py-10"
    >
      <motion.div variants={fadeUp} className="w-full">
        <div
          ref={viewportRef}
          className="w-full select-none overflow-hidden"
          onPointerEnter={pauseForMouse}
          onPointerLeave={resumeForMouse}
        >
          <motion.div
            ref={trackRef}
            drag="x"
            dragMomentum={false}
            dragElastic={0}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            // Vertical padding must clear the *scaled* active card plus its label
            // — the viewport's overflow-hidden (which hides the off-screen loop
            // cards) would otherwise clip them. The zoom is gentler on mobile
            // (1.12× vs 1.35×), so less headroom is needed there; scaling the
            // padding down also keeps the card + description on one screen.
            className={`flex items-center gap-4 py-4 sm:gap-6 sm:py-6 lg:gap-10 lg:py-20 [&_img]:pointer-events-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            // `touchAction: pan-y` lets the browser keep vertical page scroll
            // even though framer-motion's drag is bound to this element.
            // `willChange: transform` promotes the track to its own
            // compositor layer so each frame is a cheap GPU composite, not a
            // re-rasterization of 42 card images.
            style={{ x, touchAction: "pan-y", willChange: "transform" }}
          >
            {GAMES_LOOP.map((game, i) => (
              <GameCard
                key={i}
                game={game}
                isActive={i === active}
                instant={instant}
                onSelect={() => selectCard(i)}
                onPlay={openRandomPlayLink}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Detail panel follows the centered card, with the pointer above it.
       * The pointer is an outlined triangle (green fill, gold stroke matching
       * the card border) that floats just above the card — not a solid wedge
       * tucked under it. */}
      <motion.div variants={fadeUp} className="flex flex-col items-center px-4">
        <svg
          aria-hidden="true"
          width="60"
          height="48"
          viewBox="0 0 60 48"
          fill="none"
          className="relative z-10 mb-2 drop-shadow-[0px_0px_8px_rgba(255,215,0,0.35)]"
        >
          <path
            d="M30 5 L56 44 L4 44 Z"
            fill="#0a5205"
            stroke="#ffd700"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <div className="relative w-full max-w-[413px] overflow-hidden rounded-xl border border-[#ffd700] px-5 py-4 shadow-[inset_-9px_8px_10px_0px_rgba(0,0,0,0.25)] sm:px-10 sm:py-12">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a5205] to-[#051d02]" />
          {/* Re-keying on the active game name remounts this block, so its
           * intro replays each time the carousel advances — the copy resolves
           * in with a soft blur/rise instead of snapping between games. */}
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: EASE }}
            className="relative flex flex-col gap-1.5 sm:gap-2"
          >
            <h3 className={`text-lg font-bold text-white sm:text-3xl ${sora}`} style={goldGlowText}>
              {current.name}
            </h3>
            <p className="text-xs leading-5 text-[#d0c6ab] font-[family-name:var(--font-inter)] sm:text-base sm:leading-6">
              {current.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function PartnerCard({ partner }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative flex flex-col items-stretch gap-6 overflow-hidden rounded-xl border border-[#ffd700] p-8 shadow-[inset_-9px_8px_10px_0px_rgba(0,0,0,0.25)] sm:p-12">
      <div className="absolute inset-0 bg-gradient-to-b from-[#082f06] to-[#031a00]" />
      <div className="relative flex flex-col gap-6">
        {/* Logo + name */}
        <div className="flex flex-col items-center gap-4">
          <div className={partner.bigLogo ? "relative size-40 sm:size-48" : "relative size-28 sm:size-32"}>
            <Image src={partner.logo} alt={partner.name} fill sizes={partner.bigLogo ? "192px" : "128px"} className="object-contain drop-shadow-[0px_0px_12px_rgba(84,233,138,0.45)]" />
          </div>
          <h3 className={`text-2xl font-bold text-white ${sora}`}>{partner.name}</h3>
        </div>

        {/* Bonus rows */}
        <div className="flex flex-col gap-1 drop-shadow-[0px_0px_5px_rgba(84,233,138,0.8)]">
          <div
            className={`flex items-center justify-between rounded-lg border border-[#0c7f00] bg-[#e3f0e5] px-6 py-3 text-[#0c7f00] ${mono}`}
          >
            <span className="text-lg font-extrabold tracking-[1.2px]">Welcome Bonus</span>
            <span className="text-2xl font-extrabold">60%</span>
          </div>
          <div
            className={`flex items-center justify-between rounded-lg border border-[#0c7f00] bg-[#e3f0e5] px-6 py-3 text-[#0c7f00] ${mono}`}
          >
            <span className="font-extrabold tracking-[1.2px]">
              <span className="block text-lg leading-tight">New Register</span>
              <span className="block text-xs leading-tight">All Slot (Event Game)</span>
            </span>
            <span className="text-2xl font-extrabold">RM 50</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <motion.a
            href={partner.claimUrl}
            target="_blank"
            rel="noopener noreferrer"
            animate={ctaShake(0)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`relative flex min-w-0 flex-1 items-center justify-center overflow-hidden whitespace-nowrap rounded-lg border border-[#6a5b0a] bg-[#ffd700] px-3 py-3 text-xs font-extrabold tracking-[1.2px] text-[#3a3000] ${mono}`}
          >
            <Shine delay={0} />
            Claim Now
          </motion.a>
          <motion.a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            animate={ctaShake(0.4)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`relative flex min-w-0 flex-1 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-lg border border-[#30ccdd] bg-[#1592a0] px-3 py-3 text-xs font-extrabold tracking-[1.2px] text-[#ebebeb] ${mono}`}
          >
            <Shine delay={1.4} />
            <MaskIcon src="/assets/landing/icons/ph-telegram-logo-duotone.svg" className="size-4" />
            Telegram
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function PartnersSection() {
  return (
    <section className="flex w-full flex-col items-center gap-3 px-4 py-10 sm:px-6 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={fadeUp}
        className="flex items-center gap-2 text-[#ffd700]"
      >
        <MaskIcon src="/assets/landing/icons/fluent-arrow-eject-20-filled.svg" className="size-8 rotate-90" />
        <span
          className={`text-2xl font-bold uppercase tracking-[3.6px] sm:text-3xl lg:text-4xl ${mono}`}
          style={goldGlowText}
        >
          Our Partners
        </span>
        <MaskIcon src="/assets/landing/icons/fluent-arrow-eject-20-filled.svg" className="size-8 -rotate-90" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inViewTall}
        variants={stagger}
        className="grid w-full max-w-[1360px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {PARTNERS.map((partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </motion.div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <MotionConfig reducedMotion="never">
      {/* No `overflow-hidden` here: it would create a scroll container and break
     * the header's `position: sticky`. Horizontal-overflow clipping lives on the
     * background-motes layer (and the individual sections) instead. */}
      <div className="relative isolate min-h-screen w-full bg-[#020b01]">
        <PageBackground />
        <SiteHeader />
        <main className="flex w-full flex-col items-center">
          <Hero />
          <GamesSection />
          <PartnersSection />
        </main>
        <SiteFooter />
      </div>
    </MotionConfig>
  );
}
