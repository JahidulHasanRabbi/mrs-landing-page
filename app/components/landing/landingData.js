// Static content for the public marketing landing page (Figma node 1334:1355).
// Kept separate from the component so copy/asset edits don't touch layout code.

export const VIP_TIERS = [
  { name: "Bronze", img: "/assets/landing/vip-tiers-icons/1.png" },
  { name: "Silver", img: "/assets/landing/vip-tiers-icons/2.png" },
  { name: "Gold", img: "/assets/landing/vip-tiers-icons/3.png" },
  { name: "Platinum", img: "/assets/landing/vip-tiers-icons/4.png" },
  { name: "Diamond", img: "/assets/landing/vip-tiers-icons/5.png" },
  { name: "Emerald", img: "/assets/landing/vip-tiers-icons/6.png" },
  { name: "Ruby", img: "/assets/landing/vip-tiers-icons/7.png" },
  { name: "Sapphire", img: "/assets/landing/vip-tiers-icons/8.png" },
  { name: "Amethyst", img: "/assets/landing/vip-tiers-icons/9.png" },
];

export const GAMES = [
  {
    name: "Egg Smash",
    img: "/assets/landing/game-egg.png",
    description:
      "Crack open mystery eggs for instant prizes. Every smash could reveal bonus points, free spins, or exclusive rewards.",
  },
  {
    name: "Daily Spin",
    img: "/assets/landing/game-spin.png",
    description:
      "Spin the wheel of fortune once a day for guaranteed rewards. Build your streak to unlock bigger and better prizes.",
  },
  {
    name: "Mart",
    img: "/assets/landing/game-mart.png",
    description:
      "Redeem your earned points for exclusive gifts, bonus rewards, and special items. Discover a wide selection of exciting redemption options.",
  },
  {
    name: "Leaderboard",
    img: "/assets/landing/game-leaderboard.png",
    description:
      "Compete against players worldwide and climb the ranks. Top the leaderboard each season to claim elite rewards.",
  },
  {
    name: "VIP Check-in",
    img: "/assets/landing/game-vip-checkin.png",
    description:
      "Check in daily to earn VIP points and keep your membership tier. Consistency pays off with premium perks and bonuses.",
  },
  {
    name: "VIP Membership",
    img: "/assets/landing/game-vip-membership.png",
    description:
      "Unlock exclusive benefits across nine prestige tiers. Enjoy higher rewards, priority support, and luxury bonuses.",
  },
];

// Shared Telegram contact — every partner's Telegram button points here.
export const TELEGRAM_URL = "https://t.me/imlvyhere";

export const PARTNERS = [
  { name: "Kgame99", logo: "/assets/landing/partner-kgame99.png", claimUrl: "https://kgame99.com/RFA27807719" },
  { name: "LV918", logo: "/assets/landing/partner-lv918.png", claimUrl: "https://lv918.com/RFA27808136" },
  { name: "Ubetclub", logo: "/assets/landing/partner-ubetclub.png", claimUrl: "https://ubetclub.com/RFA27808309" },
  { name: "EP369", logo: "/assets/landing/partner-ep369.png", claimUrl: "https://ep369.me/RFA27807A91" },
  { name: "Acebet77", logo: "/assets/landing/partner-acebet77.png", claimUrl: "https://acebet77.me/RFA27807081" },
  { name: "N1gang", logo: "/assets/landing/partner-n1gang.png", claimUrl: "https://n1gang.net/RFA27808A91" },
];

// Footer / dropdown navigation. Each entry maps a label to its route; the routes
// are the legal/info pages built from the source content document.
export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Responsible Gaming", href: "/responsible-gaming" },
  { label: "Affiliate Program", href: "/affiliate-program" },
  { label: "FAQ", href: "/faq" },
];
