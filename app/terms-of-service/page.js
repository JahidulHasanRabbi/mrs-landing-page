import LegalDocument from "../components/legal/LegalDocument";
import { TERMS } from "../components/legal/legalData";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the KingGroup44 platform: eligibility, accounts, deposits and withdrawals, bonuses, game rules, and more.",
};

export default function Page() {
  return <LegalDocument doc={TERMS} eyebrow="Legal" />;
}
