import { useEffect, useState } from "react";

import primeBankLogo from "../assets/banks/prime-bank.webp";
import dhakaBankLogo from "../assets/banks/dhaka-bank.webp";
import dutchBanglaLogo from "../assets/banks/dutch-bangla-bank.webp";
import eximBankLogo from "../assets/banks/exim-bank.webp";
import islamiBankLogo from "../assets/banks/islami-bank.webp";
import ificBankLogo from "../assets/banks/ific-bank.webp";
import mutualTrustLogo from "../assets/banks/mutual-bank.webp";
import mercantileBankLogo from "../assets/banks/mercantile-bank.webp";
import ucblLogo from "../assets/banks/ucb-bank.webp";
import bracBankLogo from "../assets/banks/brac-bank.webp";
import pubaliBankLogo from "../assets/banks/pubali-bank.webp";
import premierBankLogo from "../assets/banks/premier-bank.webp";
import oneBankLogo from "../assets/banks/one-bank.webp";
import southeastBankLogo from "../assets/banks/southeast-bank.webp";
import basicBankLogo from "../assets/banks/basic-bank.webp";

import shahjalalBankLogo from "../assets/banks/shahjalal-bank.webp";
import communityBankLogo from "../assets/banks/community-bank.webp";
import nrbBankLogo from "../assets/banks/nrb-bank.webp";

const completedBanks = [
  { name: "Prime Bank", logo: primeBankLogo },
  { name: "Dhaka Bank", logo: dhakaBankLogo },
  { name: "United Commercial Bank", logo: ucblLogo },
  { name: "Mutual Trust Bank", logo: mutualTrustLogo },
  { name: "BRAC Bank", logo: bracBankLogo },
  { name: "Islami Bank", logo: islamiBankLogo },
  { name: "Premier Bank", logo: premierBankLogo },
  { name: "IFIC Bank", logo: ificBankLogo },
  { name: "One Bank", logo: oneBankLogo },
  { name: "Southeast Bank", logo: southeastBankLogo },
  { name: "Dutch Bangla Bank", logo: dutchBanglaLogo },
  { name: "Basic Bank", logo: basicBankLogo },
  { name: "Mercantile Bank", logo: mercantileBankLogo },
];

const queuedBanks = [
  { name: "EXIM Bank", logo: eximBankLogo },
  { name: "Shahjalal Bank", logo: shahjalalBankLogo },
  { name: "Community Bank", logo: communityBankLogo },
  { name: "NRB Bank", logo: nrbBankLogo },
  { name: "Pubali Bank", logo: pubaliBankLogo },
];

const benefits = [
  {
    title: "Faster settlement",
    body: "Fully digital inland LC transactions move in hours, not the days a paper trail demands.",
  },
  {
    title: "Currency preserved",
    body: "Less reliance on international messaging networks keeps foreign currency reserves at home.",
  },
  {
    title: "Lower cost",
    body: "Banks and their customers carry a lighter operational load on every domestic transaction.",
  },
  {
    title: "National sovereignty",
    body: "A locally governed network keeps trade finance infrastructure under Bangladesh's own control.",
  },
  {
    title: "Standardized exchange",
    body: "One message format and one document protocol, shared across every participating bank.",
  },
  {
    title: "Lower paper use",
    body: "Digitized documentation cuts paper dependency and supports environmental sustainability.",
  },
  {
    title: "Built-in traceability",
    body: "Every step is auditable, with accountability designed into the network from the start.",
  },
];

const features = [
  {
    title: "Standardized messaging",
    body: "One shared format and protocol for LC processing across every participating bank.",
  },
  {
    title: "Blockchain-backed",
    body: "Architecture built for data integrity and non-repudiation at every step.",
  },
  {
    title: "Consortium governance",
    body: "Bank-led oversight, operating under Bangladesh Bank's regulatory umbrella.",
  },
  {
    title: "Tamper-proof trails",
    body: "Instant cross-bank verification with a fully auditable transaction history.",
  },
];

const asks = [
  "Endorsing Bangladesh Bank as the regulatory authority within the GreenLC consortium",
  "Issuing policy guidelines for the formation and operation of the consortium",
  "Supporting adoption by encouraging participation from all scheduled banks",
  "Aligning GreenLC with the broader digital finance and financial infrastructure goals of the country",
];

function BankChip({ name, logo, status }) {
  const isDone = status === "done";
  const [imgError, setImgError] = useState(false);

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`group relative flex items-center justify-center rounded-2xl border p-4 transition-all duration-200 ${
        isDone
          ? "border-emerald-200 bg-white shadow-sm hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/10"
          : "border-emerald-900/10 bg-emerald-950/[0.03] opacity-40"
      }`}
    >
      {isDone && (
        <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-[9px] font-bold text-white shadow-sm">
          ✓
        </span>
      )}

      {!imgError ? (
        <img
          src={logo}
          alt={`${name} logo`}
          title={name}
          className="h-14 w-full object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-sm font-extrabold text-emerald-700">
          {initials}
        </span>
      )}
    </div>
  );
}

export default function GreenLCPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stats = [
    [completedBanks.length, "Banks completed PoC"],
    [queuedBanks.length, "Banks in queue"],
    ["2025", "FE Circular No. 06"],
  ];

  return (
    <div className="min-h-screen w-full bg-white font-sans text-emerald-950 antialiased flex flex-col gap-y-6">
      {/* HERO */}
      <header className="relative w-full overflow-hidden bg-[#06281c]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 0%, rgba(52,211,153,0.35) 0%, transparent 60%), radial-gradient(50% 40% at 90% 20%, rgba(163,230,53,0.18) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#34d399 1px, transparent 1px), linear-gradient(90deg, #34d399 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* NAVBAR */}
        <nav
          className={`fixed left-0 right-0 top-0 z-50 flex w-full flex-col px-6 py-4 sm:px-12 lg:px-20 transition-all duration-300 ${
            scrolled || mobileMenuOpen
              ? "border-b border-emerald-900/10 bg-[#06281c]/95 backdrop-blur-md shadow-md shadow-emerald-900/10"
              : "bg-transparent"
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logoglc.png"
                alt="GreenLC System Logo"
                className="h-10 w-10 object-contain drop-shadow-lg"
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                Green<span className="text-emerald-400">LC</span>
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden items-center gap-8 text-sm font-medium text-emerald-100/70 sm:flex">
              <a href="#need" className="transition-colors hover:text-white">
                About
              </a>
              <a href="#how" className="transition-colors hover:text-white">
                How it works
              </a>
              <a href="#banks" className="transition-colors hover:text-white">
                Banks
              </a>
              <a href="#forward" className="transition-colors hover:text-white">
                Way Forward
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white sm:hidden focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Panel Layout */}
          {mobileMenuOpen && (
            <div className="mt-4 flex flex-col gap-y-4 pb-4 text-base font-semibold text-emerald-100/90 sm:hidden border-t border-white/10 pt-4">
              <a
                href="#need"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1 transition-colors hover:text-white hover:bg-white/5 rounded-md"
              >
                About
              </a>
              <a
                href="#how"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1 transition-colors hover:text-white hover:bg-white/5 rounded-md"
              >
                How it works
              </a>
              <a
                href="#banks"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1 transition-colors hover:text-white hover:bg-white/5 rounded-md"
              >
                Banks
              </a>
              <a
                href="#forward"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1 transition-colors hover:text-white hover:bg-white/5 rounded-md"
              >
                Way Forward
              </a>
            </div>
          )}
        </nav>

        {/* HERO CONTENT */}
        <div className="relative w-full px-6 pb-24 pt-28 sm:px-12 sm:pt-32 lg:px-20 flex flex-col gap-y-6">
          <div className="w-fit inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            National Financial Messaging Initiative
          </div>

          <div>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl">
              Green<span className="text-emerald-400">LC</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-emerald-100/80 sm:text-xl">
              A blockchain-enabled national network for fully digitized inland
              Letter of Credit transactions between banks in Bangladesh.
            </p>
          </div>

          <div className="grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            {stats.map(([num, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-emerald-400">{num}</div>
                <div className="mt-1 text-xs text-emerald-100/60">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          className="block w-full text-white"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,32 C240,60 480,0 720,16 C960,32 1200,60 1440,28 L1440,60 L0,60 Z"
          />
        </svg>
      </header>

      <main className="w-full px-6 sm:px-12 lg:px-20 flex flex-col gap-y-16">
        {/* WHY IT MATTERS */}
        <section
          id="need"
          className="border-b border-emerald-900/10 pb-16 flex flex-col gap-y-6"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
              A national need
            </h2>
            <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Why it matters
            </span>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-emerald-950/80">
            The inland LC process in Bangladesh remains fragmented and manual,
            heavily dependent on physical documentation, SWIFT, emails, and
            courier services. In the absence of a standardized national
            platform, banks are often compelled to rely on international
            messaging networks even for purely domestic transactions, resulting
            in unnecessary foreign currency outflows.
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-emerald-900/10 bg-gradient-to-b from-emerald-50/60 to-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <span className="h-2 w-2 rounded-full bg-current" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-emerald-950">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-950/65">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how"
          className="border-b border-emerald-900/10 pb-16 flex flex-col gap-y-6"
        >
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
              How GreenLC works
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-emerald-950/80">
              GreenLC is a secure financial messaging network purpose-built for
              LC communications within Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-emerald-900/10 bg-emerald-900/10 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-white p-7 transition-colors hover:bg-emerald-50/50"
              >
                <span className="text-xs font-bold text-emerald-500">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-base font-bold text-emerald-950">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-950/65">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* POC BANKS */}
        <section
          id="banks"
          className="border-b border-emerald-900/10 pb-16 flex flex-col gap-y-8"
        >
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
                Proof of concept, bank by bank
              </h2>
              <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {completedBanks.length + queuedBanks.length} banks engaged
              </span>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-emerald-950/80">
              Following FE Circular No. 06 (dated January 14, 2025), a
              successful PoC was executed in collaboration with technology
              partner Spectrum Software and Consulting (Pvt.) Ltd. These results
              confirmed the platform's technical robustness, security, and
              operational benefits, drastically reducing processing time and
              cost while building trust among participating institutions.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-green-600" />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-950">
                PoC completed — {completedBanks.length} banks
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {completedBanks.map((bank) => (
                <BankChip
                  key={bank.name}
                  name={bank.name}
                  logo={bank.logo}
                  status="done"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full border border-dashed border-emerald-900/30" />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-950/40">
                In queue for PoC — {queuedBanks.length} banks
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {queuedBanks.map((bank) => (
                <BankChip
                  key={bank.name}
                  name={bank.name}
                  logo={bank.logo}
                  status="queued"
                />
              ))}
            </div>
          </div>
        </section>

        {/* WAY FORWARD */}
        <section id="forward" className="pb-16 flex flex-col gap-y-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
              The way forward
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-emerald-950/80">
              To institutionalize GreenLC, we propose the formation of a formal
              consortium of participating banks, governed in consultation with
              Bangladesh Bank and aligned with national policy objectives. We
              respectfully seek support in the following areas:
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {asks.map((a, i) => (
              <li
                key={a}
                className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-emerald-50/40 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-xs font-bold text-white shadow-sm shadow-emerald-600/30">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-emerald-950/85">
                  {a}
                </span>
              </li>
            ))}
          </ol>

          <div className="relative overflow-hidden rounded-3xl bg-[#06281c] p-10 sm:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 60% at 100% 0%, rgba(52,211,153,0.3) 0%, transparent 60%)",
              }}
            />
            <p className="relative max-w-2xl text-lg leading-relaxed text-emerald-50">
              GreenLC represents a significant step toward a more secure,
              cost-effective, and sovereign digital financial ecosystem in
              Bangladesh. We would be honored to discuss this further and
              explore how your guidance can help realize this national vision.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-emerald-900/10 py-10 mt-auto">
        <div className="flex w-full flex-wrap items-center justify-between gap-6 px-6 sm:px-12 lg:px-20">
          <div className="flex items-center gap-3">
            <img
              src="/logoglc.png"
              alt="GreenLC Footer Logo"
              className="h-8 w-8 object-contain opacity-60"
            />
            <span className="text-sm font-semibold text-emerald-950/50">
              Green<span className="text-emerald-600">LC</span>
            </span>
          </div>
          <p className="text-sm text-emerald-950/40">
            Developed with technology partner Spectrum Software and Consulting
            (Pvt.) Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
}
