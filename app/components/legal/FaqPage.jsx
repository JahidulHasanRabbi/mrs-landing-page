"use client";

// FAQ page: questions grouped by category, each group rendered as an accordion.

import { motion } from "framer-motion";
import { FAQ as F } from "./legalData";
import { mono, sora, goldGlowText, fadeUp, inView } from "../shared/motion";
import { ContentPage, Accordion } from "./primitives";

const inter = "font-[family-name:var(--font-inter)]";

export default function FaqPage() {
  return (
    <ContentPage title={F.title} eyebrow="KingGroup44 · Help Center" tagline={F.tagline}>
      <div className="flex flex-col gap-10">
        {F.groups.map((group) => (
          <section key={group.category}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              variants={fadeUp}
              className={`mb-4 text-xl font-bold uppercase tracking-[2px] text-[#ffd700] sm:text-2xl ${mono}`}
              style={goldGlowText}
            >
              {group.category}
            </motion.h2>
            <Accordion items={group.items} />
          </section>
        ))}
      </div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={fadeUp}
        className={`mt-12 text-center text-base italic text-[#cfc6ab] ${inter}`}
      >
        {F.closing}
      </motion.p>
    </ContentPage>
  );
}
