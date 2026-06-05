"use client";

// Responsible Gaming page: commitment, a self-assessment checklist, the control
// tools as a card grid, self-exclusion + underage prevention callouts, support
// organizations, and an always-on help CTA.

import { motion } from "framer-motion";
import { RESPONSIBLE as R } from "./legalData";
import { mono, sora, goldGlowText, fadeUp, stagger, inView } from "../shared/motion";
import {
  ContentPage,
  Intro,
  BlockHeading,
  Bullets,
  Prose,
  Note,
  Callout,
  FeatureCard,
  CardGrid,
} from "./primitives";

const inter = "font-[family-name:var(--font-inter)]";

export default function ResponsibleGamingPage() {
  return (
    <ContentPage title={R.title} eyebrow="KingGroup44 · Player Safety" tagline={R.tagline}>
      <Intro paragraphs={R.commitment} />

      {/* Self-assessment checklist */}
      <BlockHeading>{R.selfCheck.title}</BlockHeading>
      <Prose>{R.selfCheck.intro}</Prose>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="my-5 flex flex-col gap-2.5"
      >
        {R.selfCheck.questions.map((q, i) => (
          <motion.li
            key={i}
            variants={fadeUp}
            className="flex items-start gap-3 rounded-lg border border-[rgba(170,141,39,0.4)] bg-[rgba(8,47,6,0.5)] px-4 py-3"
          >
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded border border-[rgba(255,215,0,0.6)] text-xs text-[#ffd700]">
              ?
            </span>
            <span className={`text-[15px] leading-6 text-[#cfc6ab] ${inter}`}>{q}</span>
          </motion.li>
        ))}
      </motion.ul>
      <Note>{R.selfCheck.outro}</Note>

      {/* Control tools */}
      <BlockHeading>Tools Available to You</BlockHeading>
      <Prose>
        KingGroup44 provides the following responsible gaming tools, all accessible from your account settings.
      </Prose>
      <div className="mt-5">
        <CardGrid cols={2}>
          {R.tools.map((tool) => (
            <FeatureCard key={tool.name} name={tool.name} desc={tool.desc} />
          ))}
        </CardGrid>
      </div>

      {/* Self-exclusion */}
      <div className="mt-6">
        <Callout title={R.selfExclusion.title} lines={[{ value: R.selfExclusion.intro }]} />
      </div>
      <div className="mt-4 pl-1">
        <Bullets items={R.selfExclusion.points} />
      </div>
      <div className="mt-4">
        <Note>{R.selfExclusion.outro}</Note>
      </div>

      {/* Underage prevention */}
      <BlockHeading>{R.underage.title}</BlockHeading>
      <Prose>{R.underage.intro}</Prose>
      <div className="my-4">
        <Bullets items={R.underage.points} />
      </div>
      <CardGrid cols={3}>
        {R.underage.software.map((s) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-xl border border-[rgba(170,141,39,0.5)] p-4 text-center transition-colors hover:border-[#ffd700]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#082f06] to-[#031a00]" />
            <div className="relative flex flex-col gap-1">
              <span className={`text-base font-bold text-white ${sora}`}>{s.name}</span>
              <span className={`text-xs text-[#ffd700] ${mono}`}>{s.display}</span>
            </div>
          </motion.a>
        ))}
      </CardGrid>
      <div className="mt-4">
        <Note>{R.underage.outro}</Note>
      </div>

      {/* Support organizations */}
      <BlockHeading>{R.support.title}</BlockHeading>
      <Prose>{R.support.intro}</Prose>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="mt-5 flex flex-col gap-3"
      >
        {R.support.orgs.map((org) => (
          <motion.a
            key={org.name}
            href={org.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            whileHover={{ x: 4 }}
            className="group relative flex flex-wrap items-center justify-between gap-2 overflow-hidden rounded-xl border border-[rgba(170,141,39,0.45)] px-5 py-4 transition-colors hover:border-[#ffd700]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#082f06] to-[#031a00]" />
            <div className="relative flex items-center gap-3">
              <span className="size-2 rotate-45 bg-[#ffd700] drop-shadow-[0_0_5px_#ffd700]" />
              <span className={`text-base font-bold text-white ${sora}`}>{org.name}</span>
            </div>
            <div className="relative flex items-center gap-4">
              {org.phone && <span className={`text-sm text-[#9fdf9a] ${mono}`}>{org.phone}</span>}
              <span className={`text-sm text-[#ffd700] underline-offset-2 group-hover:underline ${mono}`}>
                {org.display}
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Emergency help */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={fadeUp}
        className="relative mt-12 overflow-hidden rounded-2xl border-2 border-[#ffd700] p-7 text-center shadow-[0px_0px_8px_4px_rgba(255,215,0,0.12)] sm:p-9"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a5205] to-[#051d02]" />
        <div className="relative flex flex-col items-center gap-4">
          <h2 className={`text-2xl font-bold text-white sm:text-3xl ${sora}`} style={goldGlowText}>
            {R.help.title}
          </h2>
          <p className={`max-w-[520px] text-[15px] leading-7 text-[#d8d0b8] ${inter}`}>{R.help.intro}</p>
          <div className="flex flex-col gap-2">
            <a
              href={R.help.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-base font-bold text-[#ffd700] underline decoration-[rgba(255,215,0,0.4)] underline-offset-2 hover:text-[#ffe86d] ${mono}`}
            >
              Telegram — {R.help.telegram}
            </a>
            <span className={`text-sm text-[#9fdf9a] ${mono}`}>Live Chat — {R.help.chat}</span>
          </div>
          <p className={`text-sm italic text-[#cfc6ab] ${inter}`}>{R.help.closing}</p>
        </div>
      </motion.div>
    </ContentPage>
  );
}
