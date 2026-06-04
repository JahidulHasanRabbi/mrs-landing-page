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

export const metadata = {
  title: "KingGroup44 — The Next-Gen Mini Game Platform",
  description:
    "Spin, score, predict, and win exciting rewards on KingGroup44. Explore premium mini-games, climb the VIP ranks, and claim exclusive partner bonuses.",
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
