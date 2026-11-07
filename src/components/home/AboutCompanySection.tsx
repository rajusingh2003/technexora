"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock3,
  Cpu,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const principles = [
  {
    icon: Cpu,
    title: "Made for your business",
    description:
      "Purpose-built systems shaped around your workflows, goals, and data.",
  },
  {
    icon: RefreshCw,
    title: "Clear, agile delivery",
    description:
      "Focused sprints, visible progress, and regular working demonstrations.",
  },
  {
    icon: ShieldCheck,
    title: "Security by design",
    description:
      "Security practices considered throughout architecture and delivery.",
  },
  {
    icon: Clock3,
    title: "A partner beyond launch",
    description:
      "Ongoing engineering support as your product and business evolve.",
  },
];

const commitments = [
  "You retain ownership of your IP and codebase",
  "Confidentiality built into every engagement",
  "Senior architecture and QA in every sprint",
];

export const AboutCompanySection: React.FC = () => {
  const openConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  return (
    <section
      className="relative isolate overflow-hidden border-y border-slate-200 bg-[#f7f8fa] py-20 text-slate-900 sm:py-24 lg:py-28"
      id="about"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 -top-56 -z-10 size-[34rem] rounded-full bg-blue-100/60 blur-[120px]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              <span className="h-px w-8 bg-blue-600" />
              <Award className="size-4 text-blue-700" />
              Company overview &amp; principles
            </div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[3.6rem]">
              Engineering with clarity.
              <br />
              <span className="text-slate-500">Built for what comes next.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="text-base leading-7 text-slate-600 sm:text-[17px] sm:leading-8">
              NexoraTech partners with ambitious businesses to design resilient
              software, simplify complex operations, and bring important ideas
              into production.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={openConsultation}
                type="button"
              >
                Talk to our team
                <ArrowUpRight className="size-4" />
              </button>
              <Link
                className="inline-flex min-h-11 items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition hover:text-blue-700"
                href="/about"
              >
                About NexoraTech
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <article
                className="group relative min-h-[15.5rem] overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.025)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_42px_-24px_rgba(15,23,42,0.22)] sm:p-7"
                key={principle.title}
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-slate-100 text-slate-800 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-xs tracking-[0.16em] text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold tracking-[-0.025em] text-slate-950">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {principle.description}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100 sm:left-7 sm:right-7"
                />
              </article>
            );
          })}
        </div>

        <div className="mt-5 grid overflow-hidden rounded-xl bg-slate-950 text-white sm:grid-cols-2 lg:grid-cols-[1.1fr_repeat(3,1fr)]">
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5 sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:border-r">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-200">
              <ShieldCheck className="size-[18px]" />
            </span>
            <div>
              <p className="text-sm font-semibold">A foundation of trust</p>
              <p className="mt-0.5 text-xs text-slate-400">
                Built into every engagement
              </p>
            </div>
          </div>
          {commitments.map((commitment) => (
            <div
              className="flex items-center gap-3 border-b border-white/10 px-5 py-4 text-sm leading-5 text-slate-200 last:border-b-0 last:sm:col-span-2 lg:border-b-0 lg:border-r lg:py-5 lg:last:border-r-0"
              key={commitment}
            >
              <CheckCircle2 className="size-4 shrink-0 text-blue-300" />
              <span>{commitment}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
