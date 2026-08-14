"use client";

import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────
// Mobile-only landing page.
// This is a SEPARATE layout from the desktop canvas in page.tsx — it does
// not scale the 1440px design down, it re-flows the same content into a
// normal single-column, mobile-first layout (the way Wix's "Mobile View"
// editor works). Rendered only below the `md` breakpoint (768px); see the
// `md:hidden` wrapper this is mounted in from page.tsx.
// ─────────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "About", "Journal", "Program", "Work with us"];

const STEPS = [
  {
    num: 1,
    image: "/Rectangle25.png",
    description:
      "Become part of our global network of student researchers by joining our Discord server and connecting with peers.",
    label: "Join our Research Community",
  },
  {
    num: 2,
    image: "/Rectangle25(1).png",
    description:
      "Access our high-quality research curriculum and learn the foundations of academic research at your own pace.",
    label: "Learn from our Expert Curriculum",
  },
  {
    num: 3,
    image: "/Rectangle25(2).png",
    description:
      "Apply what you've learned to create your own original research project, with guidance from our community resources.",
    label: "Develop your Research Project",
  },
  {
    num: 4,
    image: "/Rectangle25(3).png",
    description:
      "Showcase your findings at our international research competitions and earn recognition for your work.",
    label: "Participate in Competitions",
  },
];

const FEATURES = [
  "Zero money spent",
  "Open to all high school students",
  "Research Leadership Opportunity",
];

const FAQS = [
  "What is Synthica?",
  "How much does it cost to join Synthica?",
  "How can I join the community?",
  "What is the Global Research Challenge?",
  "Do I need prior research experience?",
  "More faq",
  "more faq",
];

const GRADIENT_TEXT: React.CSSProperties = {
  background: "linear-gradient(90deg, #B0DBFD 0%, #0070C8 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M2 5.5H20M2 11H20M2 16.5H20" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 3L19 19M19 3L3 19" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path d="M9 2.5V15.5M2.5 9H15.5" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path d="M1 5.23529L4.84 9L13 1" stroke="#244A73" strokeWidth="1.5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
      <path
        d="M7.5 12.2C7.5 12.2 1 8.4 1 4.3C1 2.4 2.5 1 4.3 1C5.6 1 6.7 1.7 7.5 2.7C8.3 1.7 9.4 1 10.7 1C12.5 1 14 2.4 14 4.3C14 8.4 7.5 12.2 7.5 12.2Z"
        stroke="#244A73"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
      <circle cx="5" cy="3.6" r="2" stroke="#244A73" strokeWidth="1.1" />
      <circle cx="10.5" cy="3.6" r="2" stroke="#244A73" strokeWidth="1.1" />
      <path d="M1 12C1 9.5 2.8 8 5 8C7.2 8 9 9.5 9 12" stroke="#244A73" strokeWidth="1.1" />
      <path d="M8.5 8.2C9.6 8.5 13.5 9.6 13.5 12" stroke="#244A73" strokeWidth="1.1" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 1V12" stroke="#244A73" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M2 1.5C3 0.7 4.5 0.7 5.5 1.5C6.5 2.3 8 2.3 9 1.5V6.5C8 7.3 6.5 7.3 5.5 6.5C4.5 5.7 3 5.7 2 6.5V1.5Z" stroke="#244A73" strokeWidth="1.1" />
    </svg>
  );
}

export default function MobileLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50">
        <div className="relative">
          <img
            src="/ChatgptImageJun12202609_19_24Pmphotoroom1.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="relative flex items-center justify-between px-5 h-[64px] backdrop-blur-md bg-white/55 border-b border-white/60">
            <a href="#top" className="flex items-center gap-2">
              <img src="/Image2.png" alt="Synthica" className="w-8 h-8 rounded-full" />
              <span className="font-googleSansFlex text-lg text-[#1E1E1E]">Synthica</span>
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center justify-center w-11 h-11 -mr-1 rounded-full active:bg-black/5"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Dropdown menu */}
        <div
          className={`overflow-hidden bg-white border-b border-[#E7E7E7] transition-[max-height] duration-300 ease-in-out ${
            menuOpen ? "max-h-[420px]" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col px-5 py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="py-3.5 text-[#4B4B4B] font-googleSansFlex text-base border-b border-[#F4F5F7] last:border-0"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center my-4 h-12 rounded-full bg-[#B1DBFE] text-[#244A73] font-googleSansFlex font-medium text-base"
            >
              Join us now
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section id="top" className="px-5 pt-10 pb-0 text-center">
        <h1 className="font-instrumentSerif text-[44px] leading-[1.08] text-[#000]">
          Research made approachable for <i>you</i>
        </h1>
        <p className="mt-5 font-googleSansFlex text-[16px] leading-relaxed text-[#535353] max-w-[360px] mx-auto">
          Synthica creates a playground for high school students to conduct
          research and participate in competitions regardless of their
          levels.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center mt-7 h-[52px] px-10 rounded-full bg-[#B1DBFE] text-[#244A73] font-googleSansFlex font-medium text-base"
        >
          Join us now
        </a>
      </section>
      <img
        src="/ChatgptImageJun12202608_40_28Pm1.png"
        alt=""
        className="w-full h-[190px] object-cover object-bottom mt-9"
      />

      {/* ── Kickstart heading ───────────────────────────────────────── */}
      <section className="px-5 pt-12 text-center">
        <h2 className="font-googleSansFlex text-[26px] leading-[1.3] text-[#000]">
          At{" "}
          <span style={GRADIENT_TEXT}>
            <u>Synthica</u>
          </span>
          , we kickstart your{" "}
          <span style={GRADIENT_TEXT}>Research Career</span>.
        </h2>
      </section>

      {/* ── Stats card ──────────────────────────────────────────────── */}
      <section className="px-5 mt-7">
        <div
          className="rounded-3xl p-7 text-center"
          style={{
            background:
              "radial-gradient(circle at center, #BFE0FE 0%, #CFE8FE 55%, #DFF0FF 100%)",
          }}
        >
          <p className="font-googleSansFlex text-[40px] font-medium text-[#000] leading-none">
            16000+
          </p>
          <p className="font-googleSansFlex text-[15px] text-[#000] mt-2">
            Researchers as members of Synthica worldwide
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mt-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCEBFA] px-4 py-2 text-[#244A73] font-googleSansFlex text-sm font-medium">
            <HeartIcon /> Community
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCEBFA] px-4 py-2 text-[#244A73] font-googleSansFlex text-sm font-medium">
            <PeopleIcon /> Opportunities
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCEBFA] px-4 py-2 text-[#244A73] font-googleSansFlex text-sm font-medium">
            <FlagIcon /> Competitions
          </span>
        </div>
      </section>

      {/* ── How we work / steps ─────────────────────────────────────── */}
      <section className="px-5 pt-16">
        <h2 className="font-googleSansFlex text-[30px] font-medium leading-[1.2] text-[#000]">
          Learn how we work in{" "}
          <span style={GRADIENT_TEXT}>4</span> simple steps.
        </h2>
        <p className="font-googleSansFlex text-[#4B4B4B] text-base mt-3">
          Learn how Synthica works and become a part of us.
        </p>

        <div className="relative mt-9">
          {/* connecting line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#D1D1D1]" />

          <div className="flex flex-col gap-10">
            {STEPS.map((step) => (
              <div key={step.num} className="relative flex gap-4">
                <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-[#244A73] flex items-center justify-center">
                  <span className="font-googleSansFlex text-white text-lg">{step.num}</span>
                </div>
                <div className="flex-1 rounded-2xl border border-[#E7E7E7] bg-[#F4F5F7] p-5 pt-6">
                  <p className="font-googleSansFlex text-[15px] text-[#000] text-center leading-relaxed">
                    {step.description}
                  </p>
                  <img
                    src={step.image}
                    alt={step.label}
                    className="w-full rounded-xl mt-5 object-cover"
                  />
                  <div className="flex items-center gap-2.5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] mt-5 px-4 py-3">
                    <div className="w-5 h-5 rounded bg-[#244A73] shrink-0" />
                    <span className="font-googleSansFlex text-[15px] text-[#000]">
                      {step.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────── */}
      <section className="px-5 pt-16">
        <div className="flex flex-col gap-3">
          {FEATURES.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-[#E7E7E7] bg-white p-5"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded bg-[#D2E4F8] shrink-0">
                <CheckIcon />
              </div>
              <p className="font-googleSansFlex text-[16px] text-[#131313]">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Zero cost banner ────────────────────────────────────────── */}
      <section className="px-5 pt-16 text-center">
        <h2 className="font-googleSansFlex text-[30px] leading-[1.25] text-[#4B4B4B]">
          <span style={GRADIENT_TEXT}>Zero cost.</span>{" "}
          <span style={GRADIENT_TEXT}>Non-selective</span> Program.
        </h2>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="px-5 pt-12 pb-16">
        <h2 className="font-googleSansFlex text-[28px] font-medium text-[#000] text-center mb-7">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {FAQS.map((q) => (
            <div
              key={q}
              className="flex items-center justify-between gap-4 rounded-2xl border border-[#D1D1D1] bg-white px-5 py-4"
            >
              <p className="font-googleSansFlex text-[16px] text-[#1E1E1E]">{q}</p>
              <PlusIcon />
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="px-5 py-10 border-t border-[#F4F5F7] text-center">
        <p className="font-googleSansFlex text-[13px] text-[#000] leading-relaxed">
          © 2026 Synthica. All rights reserved. Platform developed with{" "}
          <span className="inline-flex align-middle -mt-0.5">
            <HeartIcon />
          </span>
        </p>
      </footer>
    </div>
  );
}
