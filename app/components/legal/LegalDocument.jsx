"use client";

// Renders a long-form legal document (Privacy Policy, Terms of Service) from the
// shared { intro, sections } data shape. Both documents are structurally
// identical — preamble paragraphs followed by numbered sections — so they share
// this one component.

import { ContentPage, Intro, Section, Blocks } from "./primitives";

export default function LegalDocument({ doc, eyebrow = "Legal" }) {
  return (
    <ContentPage title={doc.title} eyebrow={`KingGroup44 · ${eyebrow}`} updated={doc.updated}>
      <Intro paragraphs={doc.intro} />
      {doc.sections.map((section) => (
        <Section key={section.n} n={section.n} title={section.title}>
          <Blocks blocks={section.blocks} />
        </Section>
      ))}
    </ContentPage>
  );
}
