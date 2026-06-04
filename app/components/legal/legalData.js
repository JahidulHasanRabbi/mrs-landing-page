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
          p: "KingGroup44 is operated by [Company Legal Name], a company registered under the laws of [Jurisdiction], with company registration number [XXXXXXXX] and registered address at [Full Address]. We hold a gaming license issued by [Licensing Authority], License No. [XXXXXXXX].",
        },
        { p: "For any privacy-related inquiries, contact our Data Protection Officer at:" },
        {
          callout: {
            lines: [
              { label: "Data Protection Officer", value: "privacy@kinggroup44.com", href: "mailto:privacy@kinggroup44.com" },
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
          p: "To exercise any of these rights, contact us at privacy@kinggroup44.com. We will respond within 30 days.",
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
        { p: "For any questions or concerns regarding this Privacy Policy, contact:" },
        {
          callout: {
            lines: [
              { label: "Email", value: "privacy@kinggroup44.com", href: "mailto:privacy@kinggroup44.com" },
              { label: "Address", value: "[Full Registered Address]" },
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
    "KingGroup44 is operated by [Company Legal Name], licensed by [Licensing Authority], License No. [XXXXXXXX].",
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
        { p: "These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes shall first be directed to our customer support team at support@kinggroup44.com. If unresolved, disputes may be escalated to the relevant licensing authority or an independent alternative dispute resolution (ADR) body." },
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
              { label: "Email", value: "support@kinggroup44.com", href: "mailto:support@kinggroup44.com" },
              { label: "Address", value: "[Full Registered Address]" },
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
    outro: "To activate self-exclusion, contact us at responsible@kinggroup44.com or use the option in your account settings. We take self-exclusion requests very seriously and process them without delay.",
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
    outro: "If you suspect that a minor has accessed your account, contact us immediately at support@kinggroup44.com.",
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
    email: "responsible@kinggroup44.com",
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
    { b: "Apply", t: "Complete the affiliate application form at affiliates.kinggroup44.com with your contact details, website, and traffic sources." },
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
    email: "affiliates@kinggroup44.com",
    telegram: "@KingGroup44Affiliates",
    apply: "affiliates.kinggroup44.com",
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
        { q: "How do I create an account?", a: 'Click the "Sign Up" button on the homepage, complete the registration form with your details, verify your email address, and your account will be ready to use. The whole process takes less than two minutes.' },
        { q: "Is there an age restriction?", a: "Yes. You must be at least 18 years old (or the legal gambling age in your country) to create an account and use our services. We verify age as part of our identity verification process." },
        { q: "Can I have more than one account?", a: "No. Each player is permitted one account only. Creating duplicate accounts violates our Terms of Service and may result in all accounts being permanently closed and any winnings forfeited." },
        { q: "How do I verify my account?", a: 'Go to your account settings and navigate to the "Verification" section. Upload a valid government-issued photo ID and a proof of address document dated within the last 3 months. Verification is usually completed within 24 hours.' },
        { q: "Why do I need to verify my identity?", a: "Identity verification is a legal requirement under anti-money laundering (AML) regulations and is in place to protect both you and the integrity of our platform. It is required before your first withdrawal." },
        { q: "How do I update my personal details?", a: "Some details (such as name and date of birth) cannot be changed once verified. For other details, visit your account settings or contact our support team." },
        { q: "How do I close my account?", a: "Contact our support team at support@kinggroup44.com to request account closure. Your remaining balance will be refunded after verification is complete." },
      ],
    },
    {
      category: "Deposits",
      items: [
        { q: "What payment methods are accepted?", a: "We accept a wide range of payment methods including Visa, Mastercard, bank transfers, and popular e-wallets such as Skrill and Neteller, as well as select cryptocurrencies. Available methods may vary by country." },
        { q: "Is there a minimum deposit amount?", a: "Yes. The minimum deposit amount is [Amount]. This may vary depending on the payment method selected." },
        { q: "How long do deposits take?", a: "Most deposits are credited to your account instantly. Bank transfers may take 1–3 business days." },
        { q: "Are there any deposit fees?", a: "KingGroup44 does not charge deposit fees. However, your bank or payment provider may apply their own charges." },
        { q: "Why has my deposit been declined?", a: "Common reasons for declined deposits include: incorrect payment details, insufficient funds, your bank blocking gambling transactions, or exceeding your deposit limit. Contact your payment provider or our support team for assistance." },
        { q: "Can I deposit using someone else's payment method?", a: "No. For security and compliance reasons, all deposits must be made using a payment method registered in your own name." },
      ],
    },
    {
      category: "Withdrawals",
      items: [
        { q: "How do I withdraw my winnings?", a: "Go to the Cashier section of your account, select Withdrawal, choose your preferred payment method, enter the amount, and confirm. Your account must be fully verified before withdrawals can be processed." },
        { q: "How long do withdrawals take?", a: "Withdrawal processing times are: E-wallets — within 24 hours; Cards — 3–5 business days; Bank transfers — 3–7 business days; Cryptocurrencies — within 24 hours." },
        { q: "Is there a minimum withdrawal amount?", a: "Yes. The minimum withdrawal amount is [Amount]." },
        { q: "Why is my withdrawal pending?", a: "Withdrawals are reviewed by our team before being sent to your payment provider. This review usually takes up to [X] hours. If you have not completed identity verification, your withdrawal will remain on hold until this is done." },
        { q: "Can I cancel a withdrawal request?", a: 'Withdrawals can be cancelled while they are still in "Pending" status in your account. Once processed, cancellation is not possible.' },
        { q: "Will I be charged a withdrawal fee?", a: "KingGroup44 does not charge withdrawal fees. Your payment provider may apply charges independently." },
      ],
    },
    {
      category: "Bonuses & Promotions",
      items: [
        { q: "How do I claim a welcome bonus?", a: "After registering, visit the Promotions page or check your email for your welcome bonus offer. Follow the instructions provided to activate it — usually this involves making a qualifying deposit." },
        { q: "What are wagering requirements?", a: "Wagering requirements specify how many times you must bet a bonus amount before it can be withdrawn. For example, a $100 bonus with a 30x wagering requirement means you must wager $3,000 before withdrawing bonus-derived winnings. Full details are listed on each promotion's terms page." },
        { q: "Can I withdraw my bonus funds directly?", a: "No. Bonus funds must meet wagering requirements before they can be converted to withdrawable cash." },
        { q: "How long do I have to use a bonus?", a: "All bonuses have an expiry date, after which unused bonus funds and any associated winnings are forfeited. Expiry details are listed in each promotion's terms." },
        { q: "Why was my bonus cancelled?", a: "Bonuses may be cancelled if we detect misuse, abuse, or violation of our bonus terms — including use of multiple accounts or wagering strategies designed to circumvent requirements. If you believe there has been an error, contact our support team." },
        { q: "Do all games count toward wagering requirements?", a: "Different games contribute at different rates toward wagering requirements. Slots typically contribute 100%, while table games and live casino may contribute less or not at all. This is detailed in the specific promotion's terms." },
      ],
    },
    {
      category: "Games & Technical",
      items: [
        { q: "What types of games are available?", a: "KingGroup44 offers a wide selection including online slots, live casino games (blackjack, roulette, baccarat, poker), table games, and specialty games. The full library is available in the Games section of the platform." },
        { q: "Are the games fair?", a: "Yes. All games are powered by certified providers whose Random Number Generators (RNGs) are tested and certified by independent testing laboratories. Live casino games are streamed from professional studios with real dealers." },
        { q: "Can I play for free?", a: "Many of our slots and table games are available in demo mode, allowing you to play without wagering real money. Live casino games require a real-money account." },
        { q: "What should I do if a game freezes or crashes?", a: "Close the game and reopen it. Your session and balance will be restored to where it was. If you were in the middle of a spin or hand, the game will resume from the last valid state. Contact support if the issue persists." },
        { q: "Is the platform available on mobile?", a: "Yes. KingGroup44 is fully optimized for mobile play on both iOS and Android devices through your mobile browser. No download is required." },
        { q: "What do I do if I experience a technical issue?", a: "Contact our support team via live chat or email at support@kinggroup44.com and provide as much detail as possible, including the game name, time of the issue, and your account username." },
      ],
    },
    {
      category: "Responsible Gaming",
      items: [
        { q: "How do I set deposit or loss limits?", a: "Go to Account Settings > Responsible Gaming. From there, you can set daily, weekly, or monthly limits on deposits, losses, and wagers." },
        { q: "How do I self-exclude?", a: "Contact our support team at responsible@kinggroup44.com or use the Self-Exclusion option in your account settings. Self-exclusion takes effect immediately." },
        { q: "What happens during self-exclusion?", a: "Your account will be immediately suspended, you will be removed from all marketing lists, and you will not be able to create a new account during the exclusion period." },
        { q: "Where can I get help for a gambling problem?", a: "Please visit our Responsible Gaming page for a list of free, confidential support organizations available in your region. You can also contact our team at responsible@kinggroup44.com at any time." },
      ],
    },
    {
      category: "Contact & Support",
      items: [
        { q: "How can I contact KingGroup44?", a: "Live Chat — available 24/7 from within your account. Email — support@kinggroup44.com. Response time: live chat is instant; email responses within 24 hours." },
        { q: "In what languages is support available?", a: "Our support team is available in [list languages]. Please specify your preferred language when you get in touch." },
        { q: "Where can I find more information about your licensing?", a: "Our licensing information is displayed in the footer of our website. You can verify our license at any time via the licensing authority's official website." },
      ],
    },
  ],
  closing: "For questions not covered here, please contact our support team — we're happy to help.",
};
