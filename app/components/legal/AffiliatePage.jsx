"use client";

// Affiliate Program page: pitch + benefits grid, the three commission models
// (RevShare table, CPA, Hybrid), how-to-join steps, tracking/payment/marketing
// detail, prohibited traffic, sub-affiliate + compliance, and a contact CTA.

import { motion } from "framer-motion";
import { AFFILIATE as A } from "./legalData";
import { mono, sora, goldGlowText, fadeUp, inView } from "../shared/motion";
import {
  ContentPage,
  Intro,
  BlockHeading,
  Bullets,
  Prose,
  Note,
  DataTable,
  Steps,
  FeatureCard,
  CardGrid,
} from "./primitives";

const inter = "font-[family-name:var(--font-inter)]";

export default function AffiliatePage() {
  return (
    <ContentPage title={A.title} eyebrow="KingGroup44 · Partnerships" tagline={A.tagline}>
      <Intro paragraphs={A.intro} />

      {/* Why partner */}
      <BlockHeading>Why Partner With Us?</BlockHeading>
      <div className="mt-2">
        <CardGrid cols={2}>
          {A.why.map((item) => (
            <FeatureCard key={item.b} name={item.b} desc={item.t} />
          ))}
        </CardGrid>
      </div>

      {/* Commission structure */}
      <BlockHeading>Commission Structure</BlockHeading>

      <h3 className={`mb-1 text-lg font-bold text-white ${sora}`}>{A.revShare.title}</h3>
      <Prose>{A.revShare.intro}</Prose>
      <div className="my-4">
        <DataTable head={A.revShare.table.head} rows={A.revShare.table.rows} />
      </div>
      <Note>{A.revShare.note}</Note>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <ModelCard title={A.cpa.title} body={A.cpa.body} />
        <ModelCard title={A.hybrid.title} body={A.hybrid.body} />
      </div>

      {/* How to join */}
      <BlockHeading>How to Join</BlockHeading>
      <Prose>Joining the KingGroup44 Affiliate Program is free and straightforward:</Prose>
      <div className="mt-5">
        <Steps items={A.steps} />
      </div>

      {/* Tracking */}
      <BlockHeading>{A.tracking.title}</BlockHeading>
      <Prose>{A.tracking.intro}</Prose>
      <div className="my-4">
        <Bullets items={A.tracking.items} />
      </div>
      <Note>{A.tracking.note}</Note>

      {/* Payment + Marketing side by side on desktop */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h3 className={`mb-4 text-xl font-bold uppercase tracking-[1.5px] text-[#ffd700] ${mono}`} style={goldGlowText}>
            {A.payment.title}
          </h3>
          <Bullets items={A.payment.items} />
        </div>
        <div>
          <h3 className={`mb-4 text-xl font-bold uppercase tracking-[1.5px] text-[#ffd700] ${mono}`} style={goldGlowText}>
            {A.marketing.title}
          </h3>
          <Prose>{A.marketing.intro}</Prose>
          <div className="my-3">
            <Bullets items={A.marketing.items} />
          </div>
          <Note>{A.marketing.note}</Note>
        </div>
      </div>

      {/* Prohibited traffic */}
      <BlockHeading>{A.prohibited.title}</BlockHeading>
      <Prose>{A.prohibited.intro}</Prose>
      <div className="mt-4">
        <Bullets items={A.prohibited.items} />
      </div>

      {/* Sub-affiliate + compliance */}
      <BlockHeading>{A.subAffiliate.title}</BlockHeading>
      <Prose>{A.subAffiliate.body}</Prose>

      <BlockHeading>{A.compliance.title}</BlockHeading>
      <Prose>{A.compliance.intro}</Prose>
      <div className="my-4">
        <Bullets items={A.compliance.items} />
      </div>
      <Note>{A.compliance.note}</Note>

      {/* Contact CTA */}
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
            {A.contact.title}
          </h2>
          <p className={`text-[15px] text-[#d8d0b8] ${inter}`}>{A.contact.intro}</p>
          <div className="flex flex-col items-center gap-1.5">
            <a
              href={A.contact.telegramUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={`text-base font-bold text-[#ffd700] underline decoration-[rgba(255,215,0,0.4)] underline-offset-2 hover:text-[#ffe86d] ${mono}`}
            >
              Telegram — {A.contact.telegram}
            </a>
          </div>
          <p className={`text-sm italic text-[#cfc6ab] ${inter}`}>{A.contact.hours}</p>
        </div>
      </motion.div>
    </ContentPage>
  );
}

function ModelCard({ title, body }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={fadeUp}
      className="relative overflow-hidden rounded-xl border border-[rgba(170,141,39,0.5)] p-6 shadow-[inset_-9px_8px_10px_0px_rgba(0,0,0,0.25)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#082f06] to-[#031a00]" />
      <div className="relative flex flex-col gap-3">
        <h3 className={`text-lg font-bold text-white ${sora}`}>{title}</h3>
        {body.map((p, i) => (
          <p key={i} className={`text-[15px] leading-7 text-[#cfc6ab] ${inter}`}>
            {p}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
