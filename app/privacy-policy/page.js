import LegalDocument from "../components/legal/LegalDocument";
import { PRIVACY } from "../components/legal/legalData";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How KingGroup44 collects, uses, shares, and protects your personal data, and the privacy rights available to you.",
};

export default function Page() {
  return <LegalDocument doc={PRIVACY} eyebrow="Legal" />;
}
