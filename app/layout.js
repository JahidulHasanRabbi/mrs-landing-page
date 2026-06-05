import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kinggroup44.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KingGroup44 — The Next-Gen Mini Game Platform",
    template: "%s — KingGroup44",
  },
  description:
    "Spin, score, predict, and win exciting rewards on KingGroup44. Explore premium mini-games, climb the VIP ranks, and claim exclusive partner bonuses.",
  applicationName: "KingGroup44",
  keywords: [
    "KingGroup44",
    "mini games",
    "online games",
    "VIP rewards",
    "spin and win",
    "leaderboard",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "KingGroup44",
    url: siteUrl,
    title: "KingGroup44 — The Next-Gen Mini Game Platform",
    description:
      "Spin, score, predict, and win exciting rewards on KingGroup44. Explore premium mini-games, climb the VIP ranks, and claim exclusive partner bonuses.",
    images: [
      {
        url: "/assets/landing/logo.png",
        width: 800,
        height: 300,
        alt: "KingGroup44",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KingGroup44 — The Next-Gen Mini Game Platform",
    description:
      "Spin, score, predict, and win exciting rewards on KingGroup44. Explore premium mini-games, climb the VIP ranks, and claim exclusive partner bonuses.",
    images: ["/assets/landing/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
