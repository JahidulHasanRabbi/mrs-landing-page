// Source content for the legal / info pages (Privacy, Terms, Responsible Gaming,
// Affiliate Program, FAQ). Lifted verbatim from KingGroup44's pages-content
// document and kept as pure data so copy edits never touch layout code.
//
// Block schema consumed by app/components/legal/primitives.jsx:
//   { p: "..." }                          → paragraph
//   { h: "..." }                          → subheading inside a section
//   { ul: ["..." | { b, t }] }            → bullet list (b = bold lead, t = rest)
//   { ol: [{ b, t }] }                    → numbered steps
//   { table: { head: [], rows: [[]] } }   → data table
//   { note: "..." }                       → muted aside line
//   { callout: { title?, lines: [{ label?, value, href? }] } } → contact card

const UPDATED = "Last updated: June 2025";

// Sole contact channel surfaced on the public pages — all contact callouts and
// blocks point here instead of email / phone / postal address.
export const TELEGRAM_URL = "https://t.me/imlvyhere";
const TELEGRAM_HANDLE = "@imlvyhere";

/* ----------------------------------------------------------------- Privacy -- */

export const PRIVACY = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  updated: UPDATED,
  intro: [
    'KingGroup44 ("we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, with whom we share it, and what rights you have in relation to it.',
    "By accessing or using our website and services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our platform immediately.",
  ],
  sections: [
    {
      n: 1,
      title: "Who We Are",
      blocks: [
        {
          p: "KingGroup44 is a fully licensed and regulated online gaming operator. We strictly adhere to all compliance and regulatory standards to ensure a safe, secure, and transparent gaming environment for all our users.",
        },
        { p: "For any privacy-related inquiries, contact our Data Protection Officer via Telegram:" },
        {
          callout: {
            lines: [
              { label: "Telegram", value: TELEGRAM_HANDLE, href: TELEGRAM_URL },
            ],
          },
        },
      ],
    },
    {
      n: 2,
      title: "Information We Collect",
      blocks: [
        { p: "We collect information in the following ways:" },
        { h: "Information you provide directly" },
        {
          ul: [
            "Full name, date of birth, and gender",
            "Email address, phone number, and residential address",
            "Government-issued ID documents (for identity verification)",
            "Payment information (bank details, card details, e-wallet accounts)",
            "Username, password, and account preferences",
            "Communications you send us (support tickets, chat logs, emails)",
          ],
        },
        { h: "Information collected automatically" },
        {
          ul: [
            "IP address and geolocation data",
            "Device type, operating system, and browser",
            "Pages visited, time spent, and clickstream data",
            "Session data and login timestamps",
            "Cookies and similar tracking technologies",
          ],
        },
        { h: "Information from third parties" },
        {
          ul: [
            "Identity and fraud verification providers",
            "Payment processors and banking partners",
            "Marketing and analytics partners",
            "Publicly available sources for compliance purposes",
          ],
        },
      ],
    },
    {
      n: 3,
      title: "How We Use Your Information",
      blocks: [
        { p: "We use your personal data for the following purposes:" },
        {
          ul: [
            { b: "Account management", t: "Creating, verifying, and maintaining your account" },
            { b: "Service delivery", t: "Processing deposits, withdrawals, bets, and game activity" },
            { b: "Identity verification (KYC)", t: "Complying with anti-money laundering (AML) and Know Your Customer regulations" },
            { b: "Fraud prevention", t: "Detecting and preventing fraudulent, illegal, or abusive activity" },
            { b: "Customer support", t: "Responding to your inquiries and resolving disputes" },
            { b: "Marketing", t: "Sending promotional offers and updates where you have given consent" },
            { b: "Legal compliance", t: "Meeting our obligations under applicable laws and regulations" },
            { b: "Responsible gaming", t: "Monitoring activity to identify signs of problem gambling" },
            { b: "Analytics", t: "Improving our platform, products, and user experience" },
          ],
        },
      ],
    },
    {
      n: 4,
      title: "Legal Basis for Processing",
      blocks: [
        { p: "We process your personal data under the following legal bases:" },
        {
          ul: [
            { b: "Contractual necessity", t: "to perform our obligations under your account agreement" },
            { b: "Legal obligation", t: "to comply with AML, KYC, tax, and gaming regulations" },
            { b: "Legitimate interests", t: "to prevent fraud and improve our services" },
            { b: "Consent", t: "for marketing communications and non-essential cookies" },
          ],
        },
      ],
    },
    {
      n: 5,
      title: "Cookies and Tracking Technologies",
      blocks: [
        { p: "We use cookies and similar technologies to enhance your experience on our platform. These include:" },
        {
          ul: [
            { b: "Essential cookies", t: "Required for the website to function correctly" },
            { b: "Functional cookies", t: "Remember your preferences and settings" },
            { b: "Analytical cookies", t: "Help us understand how users interact with our platform (e.g., Google Analytics)" },
            { b: "Marketing cookies", t: "Used to deliver relevant advertisements" },
          ],
        },
        { p: "You can control cookie preferences through our Cookie Consent tool or your browser settings. Note that disabling certain cookies may affect platform functionality." },
      ],
    },
    {
      n: 6,
      title: "Sharing Your Information",
      blocks: [
        { p: "We do not sell your personal data. We may share it with:" },
        {
          ul: [
            { b: "Service providers", t: "Payment processors, KYC verification partners, cloud hosting providers, and customer support tools" },
            { b: "Regulatory authorities", t: "Gaming commissions, financial intelligence units, or law enforcement when legally required" },
            { b: "Affiliate partners", t: "Limited data may be shared with affiliates for commission tracking purposes, subject to data processing agreements" },
            { b: "Business transfers", t: "In the event of a merger, acquisition, or sale of assets" },
            { b: "Legal protection", t: "When necessary to enforce our Terms of Service or protect the rights and safety of users" },
          ],
        },
        { p: "All third parties we share data with are contractually obligated to protect it and use it only for the purposes we specify." },
      ],
    },
    {
      n: 7,
      title: "International Data Transfers",
      blocks: [
        { p: "Your data may be transferred to and processed in countries outside your own. Where such transfers occur, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by relevant data protection authorities." },
      ],
    },
    {
      n: 8,
      title: "Data Retention",
      blocks: [
        { p: "We retain your personal data for as long as:" },
        {
          ul: [
            "Your account is active",
            "Required by law (AML regulations typically require 5 years after account closure)",
            "Necessary to resolve disputes or enforce agreements",
          ],
        },
        { p: "Upon expiry of the retention period, your data is securely deleted or anonymized." },
      ],
    },
    {
      n: 9,
      title: "Your Rights",
      blocks: [
        { p: "Depending on your jurisdiction, you may have the following rights:" },
        {
          ul: [
            { b: "Access", t: "Request a copy of the personal data we hold about you" },
            { b: "Rectification", t: "Correct inaccurate or incomplete data" },
            { b: "Erasure", t: "Request deletion of your data (subject to legal retention obligations)" },
            { b: "Restriction", t: "Request that we limit processing of your data" },
            { b: "Portability", t: "Receive your data in a structured, machine-readable format" },
            { b: "Objection", t: "Object to processing based on legitimate interests or for direct marketing" },
            { b: "Withdraw consent", t: "At any time, where processing is based on consent" },
          ],
        },
        {
          p: "To exercise any of these rights, contact us on Telegram at @imlvyhere. We will respond within 30 days.",
        },
      ],
    },
    {
      n: 10,
      title: "Security",
      blocks: [
        { p: "We implement industry-standard security measures including SSL/TLS encryption, two-factor authentication, firewalls, and regular security audits to protect your personal information. Despite these measures, no online system is entirely risk-free." },
      ],
    },
    {
      n: 11,
      title: "Children's Privacy",
      blocks: [
        { p: "Our services are strictly for adults aged 18 years or older (or the legal age in your jurisdiction). We do not knowingly collect data from minors. If we discover that a minor has created an account, it will be immediately closed and all data deleted." },
      ],
    },
    {
      n: 12,
      title: "Changes to This Policy",
      blocks: [
        { p: "We may update this Privacy Policy from time to time. Material changes will be communicated via email or a prominent notice on our website. Continued use of our services after changes take effect constitutes acceptance of the updated policy." },
      ],
    },
    {
      n: 13,
      title: "Contact Us",
      blocks: [
        { p: "For any questions or concerns regarding this Privacy Policy, contact us on Telegram:" },
        {
          callout: {
            lines: [
              { label: "Telegram", value: TELEGRAM_HANDLE, href: TELEGRAM_URL },
            ],
          },
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------- Terms -- */

export const TERMS = {
  slug: "terms-of-service",
  title: "Terms of Service",
  updated: UPDATED,
  intro: [
    'These Terms of Service ("Terms") govern your use of the KingGroup44 platform. By registering an account or using our services, you confirm that you have read, understood, and agreed to these Terms in their entirety. If you do not agree, you must not use our services.',
    "KingGroup44 is a fully licensed and legally operated online gaming platform, committed to providing a secure, transparent, and fair gaming environment in accordance with international regulatory standards.",
  ],
  sections: [
    {
      n: 1,
      title: "Eligibility",
      blocks: [
        { p: "To use KingGroup44, you must:" },
        {
          ul: [
            "Be at least 18 years of age (or the legal gambling age in your jurisdiction, whichever is higher)",
            "Be a resident of a jurisdiction where online gambling is permitted",
            "Not be on any self-exclusion list or excluded by a regulatory body",
            "Not be an employee, director, or agent of KingGroup44 or any of its partners",
            "Have the legal capacity to enter into a binding agreement",
          ],
        },
        { p: "We reserve the right to request proof of eligibility at any time. Accounts found to be in violation will be suspended and any winnings may be forfeited." },
      ],
    },
    {
      n: 2,
      title: "Account Registration",
      blocks: [
        { p: "2.1 You may only hold one account on KingGroup44. Creating multiple accounts is strictly prohibited and may result in permanent suspension and forfeiture of funds." },
        { p: "2.2 You must provide accurate, truthful, and complete information during registration and keep it up to date." },
        { p: "2.3 You are solely responsible for maintaining the confidentiality of your login credentials. Do not share your account with any other person." },
        { p: "2.4 KingGroup44 reserves the right to verify your identity before allowing withdrawals or at any other time. You may be asked to provide:" },
        {
          ul: [
            "Government-issued photo ID (passport, national ID card, driver's license)",
            "Proof of address (utility bill, bank statement dated within 3 months)",
            "Proof of payment method",
          ],
        },
        { p: "2.5 Failure to complete verification may result in suspension of account activity." },
      ],
    },
    {
      n: 3,
      title: "Deposits and Withdrawals",
      blocks: [
        { h: "3.1 Deposits" },
        {
          ul: [
            "All deposits must be made using payment methods registered in your own name.",
            "Minimum deposit amount: [Amount]",
            "KingGroup44 does not charge deposit fees, though your payment provider may apply charges.",
            "Deposits are credited to your account as soon as funds are received.",
          ],
        },
        { h: "3.2 Withdrawals" },
        {
          ul: [
            "Withdrawal requests will be processed within [X] business days, subject to verification.",
            "Withdrawals are returned to the same payment method used for the original deposit, where possible.",
            "Minimum withdrawal amount: [Amount]",
            "Maximum withdrawal amount per transaction: [Amount]",
            "KingGroup44 reserves the right to request additional identity verification before processing withdrawals.",
          ],
        },
        { p: "3.3 We are not responsible for delays caused by your payment provider or banking institution." },
      ],
    },
    {
      n: 4,
      title: "Bonuses and Promotions",
      blocks: [
        { p: "4.1 All bonuses and promotions are subject to their own specific terms, including wagering requirements, game restrictions, and expiry dates. These are set out on the relevant promotion page." },
        { p: "4.2 Bonuses are offered at KingGroup44's sole discretion and may be amended or withdrawn at any time." },
        { p: "4.3 Only one bonus may be active at a time unless stated otherwise." },
        { p: "4.4 Abuse of bonuses — including the use of multiple accounts, collusion, or any strategy designed to exploit bonus offers — will result in the cancellation of bonuses and may lead to account suspension." },
        { p: "4.5 KingGroup44 reserves the right to cancel any bonus at any time if fraudulent or abusive behavior is suspected." },
      ],
    },
    {
      n: 5,
      title: "Game Rules",
      blocks: [
        { p: "5.1 All games on KingGroup44 are governed by the rules displayed within the game interface. You are responsible for familiarizing yourself with these rules before playing." },
        { p: "5.2 The outcome of all games is determined by a certified Random Number Generator (RNG) or a live dealer, as applicable. All games are tested for fairness by independent testing authorities." },
        { p: "5.3 In the event of a technical malfunction during a game, KingGroup44 reserves the right to declare the round void and refund wagers." },
        { p: "5.4 If a game result is displayed incorrectly due to a software error, the correct result as determined by our game servers will stand." },
      ],
    },
    {
      n: 6,
      title: "Prohibited Activities",
      blocks: [
        { p: "The following activities are strictly prohibited and may result in immediate account suspension, permanent ban, and forfeiture of funds:" },
        {
          ul: [
            "Providing false or misleading information during registration or verification",
            "Creating or operating multiple accounts",
            "Engaging in money laundering, fraud, or any other criminal activity",
            "Using unauthorized software, bots, scripts, or tools to gain an unfair advantage",
            "Exploiting software bugs or errors without reporting them to us",
            "Colluding with other players or engaging in match-fixing",
            "Making chargebacks or fraudulent payment disputes",
            "Engaging in any behavior that disrupts the experience of other users",
          ],
        },
      ],
    },
    {
      n: 7,
      title: "Responsible Gaming",
      blocks: [
        { p: "KingGroup44 is committed to promoting responsible gaming. We offer tools including deposit limits, session time limits, cooling-off periods, and self-exclusion. Full details are available on our Responsible Gaming page." },
        { p: "If you feel your gambling may be getting out of control, contact our support team or use one of the tools available in your account settings." },
      ],
    },
    {
      n: 8,
      title: "Intellectual Property",
      blocks: [
        { p: "All content on KingGroup44, including text, graphics, logos, game content, and software, is the property of KingGroup44 or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent." },
      ],
    },
    {
      n: 9,
      title: "Limitation of Liability",
      blocks: [
        { p: "To the fullest extent permitted by law, KingGroup44 shall not be liable for:" },
        {
          ul: [
            "Loss of profits, revenue, data, or opportunity",
            "Indirect, incidental, or consequential damages",
            "Losses arising from unauthorized access to your account",
            "Service interruptions due to technical issues or maintenance",
          ],
        },
        { p: "Our total liability to you shall not exceed the amount deposited by you in the 12 months preceding the event giving rise to the claim." },
      ],
    },
    {
      n: 10,
      title: "Governing Law and Dispute Resolution",
      blocks: [
        { p: "These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes shall first be directed to our customer support team on Telegram at @imlvyhere. If unresolved, disputes may be escalated to the relevant licensing authority or an independent alternative dispute resolution (ADR) body." },
      ],
    },
    {
      n: 11,
      title: "Account Termination",
      blocks: [
        { p: "11.1 You may close your account at any time by contacting support. Any remaining balance (excluding bonus funds subject to unmet wagering requirements) will be returned to you after verification." },
        { p: "11.2 KingGroup44 reserves the right to suspend or terminate your account at any time without prior notice if these Terms are breached." },
      ],
    },
    {
      n: 12,
      title: "Amendments",
      blocks: [
        { p: "KingGroup44 may update these Terms at any time. You will be notified of material changes by email or platform notification. Continued use of the platform following notification constitutes acceptance of the revised Terms." },
      ],
    },
    {
      n: 13,
      title: "Contact",
      blocks: [
        {
          callout: {
            lines: [
              { label: "Telegram", value: TELEGRAM_HANDLE, href: TELEGRAM_URL },
            ],
          },
        },
      ],
    },
  ],
};

/* ------------------------------------------------------- Responsible Gaming -- */

export const RESPONSIBLE = {
  slug: "responsible-gaming",
  title: "Responsible Gaming",
  tagline: "Gaming should be fun, entertaining, and within your control.",
  commitment: [
    "At KingGroup44, we believe that gaming should be fun, entertaining, and within your control. We are fully committed to promoting responsible gaming practices and providing a safe environment for all our players.",
    "We recognize that for some people, gambling can become a problem. That is why we have put in place a comprehensive set of tools, resources, and support options to help you stay in control at all times.",
  ],
  selfCheck: {
    title: "Recognizing Problem Gambling",
    intro: "Gambling becomes a problem when it negatively impacts your finances, relationships, mental health, or everyday life. Ask yourself the following questions:",
    questions: [
      "Do you gamble with money meant for essential expenses like rent, bills, or food?",
      "Do you chase losses by gambling more to try to recover what you have lost?",
      "Have you borrowed money or sold possessions to fund gambling?",
      "Do you feel anxious, irritable, or depressed when you are not gambling?",
      "Do you hide your gambling habits from family or friends?",
      "Has gambling affected your work, studies, or personal relationships?",
      "Do you find it difficult to stop gambling once you have started?",
    ],
    outro: "If you answered yes to any of these questions, we encourage you to make use of our responsible gaming tools or to seek support from a professional organization.",
  },
  tools: [
    { name: "Deposit Limits", desc: "Set a maximum amount you are allowed to deposit daily, weekly, or monthly. Once set, limits take effect immediately. Increases to limits are subject to a 24-hour cooling-off period." },
    { name: "Loss Limits", desc: "Set a cap on how much you can lose within a defined time period. This helps you maintain control over your spending." },
    { name: "Wager Limits", desc: "Restrict the maximum amount you can place on any single bet or within a time period." },
    { name: "Session Time Limits", desc: "Set a maximum duration for each gaming session. You will receive a notification when your session limit is approaching and will be logged out when it is reached." },
    { name: "Reality Check", desc: "Enable periodic reminders showing how long you have been playing and how much you have wagered. This feature helps maintain awareness of your gambling activity." },
    { name: "Cooling-Off Period", desc: "Take a short break from your account for a period of 24 hours, 7 days, or 30 days. During this time, you will not be able to access your account or place bets." },
  ],
  selfExclusion: {
    title: "Self-Exclusion",
    intro: "Exclude yourself from KingGroup44 for a minimum period of 6 months or permanently. During self-exclusion:",
    points: [
      "Your account will be suspended immediately",
      "You will not receive any marketing communications",
      "You will not be able to create a new account",
    ],
    outro: "To activate self-exclusion, contact us on Telegram at @imlvyhere or use the option in your account settings. We take self-exclusion requests very seriously and process them without delay.",
  },
  underage: {
    title: "Underage Gambling Prevention",
    intro: "KingGroup44 is strictly for players aged 18 and over. We take the prevention of underage gambling extremely seriously and require identity verification from all players. If you share your device with younger family members, we strongly recommend:",
    points: ["Keeping your login credentials private and confidential", "Using parental control software"],
    software: [
      { name: "Gamban", url: "https://gamban.com", display: "gamban.com" },
      { name: "Net Nanny", url: "https://netnanny.com", display: "netnanny.com" },
      { name: "Betfilter", url: "https://betfilter.com", display: "betfilter.com" },
    ],
    outro: "If you suspect that a minor has accessed your account, contact us immediately on Telegram at @imlvyhere.",
  },
  support: {
    title: "Support Organizations",
    intro: "If you are concerned about your gambling or that of someone you know, the following organizations offer free, confidential support:",
    orgs: [
      { name: "Gamblers Anonymous", url: "https://www.gamblersanonymous.org", display: "www.gamblersanonymous.org" },
      { name: "GamCare", url: "https://www.gamcare.org.uk", display: "www.gamcare.org.uk", phone: "0808 8020 133" },
      { name: "BeGambleAware", url: "https://www.begambleaware.org", display: "www.begambleaware.org", phone: "0808 8020 133" },
      { name: "Gambling Therapy", url: "https://www.gamblingtherapy.org", display: "www.gamblingtherapy.org" },
      { name: "Gordon Moody Association", url: "https://www.gordonmoody.org.uk", display: "www.gordonmoody.org.uk" },
    ],
  },
  help: {
    title: "Need Help Right Now?",
    intro: "If you need immediate assistance, please contact our Responsible Gaming team:",
    telegram: TELEGRAM_HANDLE,
    telegramUrl: TELEGRAM_URL,
    chat: "Available 24/7 within your account",
    closing: "We are here to help, without judgment.",
  },
};

/* ---------------------------------------------------------------- Affiliate -- */

export const AFFILIATE = {
  slug: "affiliate-program",
  title: "Affiliate Program",
  tagline: "Partner with KingGroup44.",
  intro: [
    "Welcome to the KingGroup44 Affiliate Program — a premium partnership built for serious affiliate marketers, content creators, influencers, and media publishers. We offer competitive commissions, real-time tracking, fast payments, and a dedicated affiliate management team that works alongside you to maximize your results.",
    "Whether you run a casino review site, a gambling community, a social media channel, or a traffic network — if your audience loves gaming, we have the right partnership for you.",
  ],
  why: [
    { b: "Competitive commission rates", t: "with industry-leading revenue share" },
    { b: "Multiple commission models", t: "Revenue Share, CPA, and Hybrid available" },
    { b: "Real-time tracking dashboard", t: "with transparent reporting" },
    { b: "Dedicated affiliate manager", t: "assigned to your account" },
    { b: "Fast, reliable monthly payments", t: "with multiple payout options" },
    { b: "High-converting landing pages", t: "and creative materials provided" },
    { b: "Long-term cookie tracking", t: "to ensure you are credited for your referrals" },
    { b: "No negative carryover", t: "on revenue share (terms apply)" },
  ],
  revShare: {
    title: "Revenue Share (RevShare)",
    intro: "Earn a percentage of the net revenue generated by players you refer — for life.",
    table: {
      head: ["Monthly Net Revenue", "Commission Rate"],
      rows: [
        ["$0 – $5,000", "25%"],
        ["$5,001 – $15,000", "30%"],
        ["$15,001 – $30,000", "35%"],
        ["$30,001 – $50,000", "40%"],
        ["$50,001+", "45%"],
      ],
    },
    note: "Net revenue is calculated as gross gaming revenue minus bonuses, chargebacks, payment processing fees, and applicable taxes.",
  },
  cpa: {
    title: "Cost Per Acquisition (CPA)",
    body: [
      "Earn a fixed one-time payment for every qualifying new depositing player (NDP) you refer. CPA rates are negotiated individually based on the quality, volume, and source of your traffic.",
      "Typical CPA rates range from $75 – $300 per NDP, depending on player geography and traffic type.",
    ],
  },
  hybrid: {
    title: "Hybrid",
    body: [
      "Can't choose between RevShare and CPA? Our Hybrid model combines both — a reduced RevShare percentage plus a fixed CPA per NDP. Contact your affiliate manager to discuss a custom Hybrid deal.",
    ],
  },
  steps: [
    { b: "Apply", t: "Message us on Telegram at @imlvyhere with your contact details, website, and traffic sources to start your application." },
    { b: "Review", t: "Our affiliate team reviews your application within 2–5 business days. We evaluate traffic quality, compliance, and fit." },
    { b: "Approval", t: "Once approved, you receive access to your affiliate dashboard, tracking links, and creative materials." },
    { b: "Promote", t: "Start driving traffic using your unique tracking links, banners, and landing pages." },
    { b: "Earn", t: "Watch your commissions grow in real time and receive monthly payments." },
  ],
  tracking: {
    title: "Tracking and Reporting",
    intro: "Your affiliate dashboard gives you full visibility into your performance:",
    items: [
      "Clicks, registrations, deposits, and active players",
      "Revenue generated and commissions earned",
      "Player lifetime value and retention metrics",
      "Sub-affiliate performance (if applicable)",
      "Historical reports by date range, campaign, and traffic source",
    ],
    note: "We use industry-standard affiliate tracking technology to ensure every referral is attributed accurately. Cookie duration: [X] days.",
  },
  payment: {
    title: "Payment Terms",
    items: [
      "Commission statements are generated on the 1st of each month for the previous month's activity",
      "Payments are processed by the 15th of each month, provided the minimum threshold of $100 is met",
      "Balances below the minimum threshold roll over to the following month",
      "Available payment methods: Bank Transfer, Skrill, Neteller, Bitcoin, and USDT (Tether)",
      "Payments are issued in USD. Currency conversion is at the prevailing exchange rate at time of payment",
    ],
  },
  marketing: {
    title: "Marketing Materials",
    intro: "Upon approval, affiliates gain access to a library of professionally designed creative assets:",
    items: [
      "Banners in standard IAB sizes (leaderboard, rectangle, skyscraper, mobile)",
      "Logo files and brand assets",
      "Email templates",
      "Pre-written review copy and promotional text",
      "Landing pages optimized for conversion",
    ],
    note: "Custom creative requests can be submitted to your affiliate manager.",
  },
  prohibited: {
    title: "Prohibited Traffic Sources",
    intro: "The following traffic types are strictly not permitted under the KingGroup44 Affiliate Program. Violation will result in immediate termination and forfeiture of commissions:",
    items: [
      "Self-referrals (signing up yourself or associates using affiliate links)",
      "Bonus abuse and chip dumping schemes",
      "Spam, unsolicited emails, or unauthorized SMS campaigns",
      "Traffic from jurisdictions where online gambling is prohibited",
      "Advertising on platforms that target minors",
      "False or misleading advertising claims",
      "Brand bidding via paid search without prior written approval",
      "Traffic from illegal, offensive, or harmful websites",
    ],
  },
  subAffiliate: {
    title: "Sub-Affiliate Program",
    body: "Refer other affiliates to the KingGroup44 program and earn a [X]% override commission on the net commissions earned by your sub-affiliates. Sub-affiliate tracking is fully transparent and visible within your dashboard.",
  },
  compliance: {
    title: "Program Terms and Compliance",
    intro: "By joining the KingGroup44 Affiliate Program, you agree to our full Affiliate Terms and Conditions, which govern:",
    items: [
      "Traffic quality standards and compliance requirements",
      "Brand usage and advertising guidelines",
      "Commission calculation methodology",
      "Dispute resolution procedures",
      "Termination and clawback policies",
    ],
    note: "The full Affiliate Terms and Conditions are available upon approval and within your affiliate dashboard.",
  },
  contact: {
    title: "Get in Touch",
    intro: "Ready to join or have a question before applying?",
    telegram: TELEGRAM_HANDLE,
    telegramUrl: TELEGRAM_URL,
    hours: "Our affiliate team is available Monday to Friday, 09:00 – 18:00 (UTC).",
  },
};

/* --------------------------------------------------------------------- FAQ -- */

export const FAQ = {
  slug: "faq",
  title: "FAQ",
  tagline: "Frequently asked questions.",
  groups: [
    {
      category: "Account & Registration",
      items: [
        { q: "How do I create an account?", a: 'Click the "Sign Up" button on the homepage, complete the registration form with your details, verify your phone number, and your account will be ready to use. The whole process takes less than two minutes.' },
        { q: "How do I verify my account?", a: "To complete your account verification, simply ensure that your profile is updated with your correct personal details and accurate bank account information. This information must match your official documents to ensure seamless deposits and fast withdrawals." },
        { q: "Why do I need to verify my identity?", a: "Account verification is required to maintain the highest security standards on our platform. This process protects your account against unauthorized access, prevents fraud, ensures that all financial transactions (including your withdrawals) are processed safely and smoothly, and complies with standard regulatory guidelines for fair and responsible gaming." },
      ],
    },
    {
      category: "Deposits",
      items: [
        { q: "What payment methods are accepted?", a: "We accept a variety of secure and convenient payment methods, including online banking transfers, ATM or physical cash deposits, and popular mobile e-wallets such as Touch 'n Go." },
        { q: "Is there a minimum deposit amount?", a: "Yes. The minimum deposit amount is RM 10." },
        { q: "How long do deposits take?", a: "Most deposits are credited to your account instantly." },
      ],
    },
    {
      category: "Withdrawals",
      items: [
        { q: "How long do withdrawals take?", a: "We offer the fastest withdrawal turnover in Malaysia, with most withdrawal requests successfully processed within 3 minutes." },
        { q: "Is there a minimum withdrawal amount?", a: "Yes. The minimum withdrawal amount is RM 50." },
        { q: "Why is my withdrawal pending?", a: "Withdrawals are reviewed by our team before being sent to your payment provider. This review usually takes up to 3 hours. If you have not completed identity verification, your withdrawal will remain on hold until this is done." },
      ],
    },
    {
      category: "Bonuses & Promotions",
      items: [
        { q: "What are the turnover requirements?", a: "For example, EP369 offers a 60% Welcome Bonus with a 4x turnover multiplier — e.g., a RM 100 deposit plus a RM 60 bonus requires a total turnover of RM 640 before you can proceed with withdrawals." },
        { q: "Can I play for free?", a: "Yes — we offer a Register Free RM 50 promotion and a 365 Days Free Credit promotion. Check out our promotions page to find out more!" },
      ],
    },
    {
      category: "Contact & Support",
      items: [
        { q: "In what languages is support available?", a: "Our support team is available in Bahasa Malaysia, English, and Chinese. Please specify your preferred language when you get in touch." },
      ],
    },
  ],
  closing: "For questions not covered here, please contact our support team — we're happy to help.",
};
