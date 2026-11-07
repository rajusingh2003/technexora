"use client";

import React from "react";
import { Users, Linkedin, Mail, ShieldCheck } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  badge: string;
  image: string;
  description: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Arun Kumar Pandey",
    role: "Managing Director",
    badge: "Executive Leadership",
    image: "/assets/Arun.jpeg",
    description:
      "Spearheads executive client handling, enterprise project management, strategic partner meetings, and corporate delivery operations.",
    linkedin: "https://linkedin.com",
    email: "pandeynagendra804@gmail.com",
  },
  {
    name: "Mr. Nagendra Kumar Pandey",
    role: "Co-Founder & Director (Technical Head)",
    badge: "Co-Founder",
    image: "/assets/Nagendra.png",
    description:
      "Architects core technology infrastructure, enterprise software development, system design, and leads end-to-end technical execution.",
    linkedin: "https://linkedin.com",
    email: "pandeynagendra804@gmail.com",
  },
  {
    name: "Mr. Raju Singh",
    role: "Co-Director (Operations & Delivery)",
    badge: "Operations Head",
    image: "/assets/raju.png",
    description:
      "Manages technical engineering teams, sprint cadences, code quality assurance, and resolves complex infrastructure & technical bottlenecks.",
    linkedin: "https://linkedin.com",
    email: "pandeynagendra804@gmail.com",
  },
  {
    name: "Neha Mishra",
    role: "Head of Human Resources",
    badge: "People & Culture",
    image: "/assets/Neha.png",
    description:
      "Oversees strategic talent acquisition, organizational culture, employee relations, and human resources governance across the company.",
    linkedin: "https://linkedin.com",
    email: "pandeynagendra804@gmail.com",
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 bg-white/45 backdrop-blur-2xl text-slate-950 border-b border-black/10 relative overflow-hidden"
      id="team"
    >
      {/* Subtle Luminous Ambient Sheen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-black/10 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5 text-slate-950" />
            <span>Executive Leadership &amp; Core Team</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-[900] text-slate-950 tracking-tight mb-4 leading-tight">
            Meet the Leaders Driving{" "}
            <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Enterprise Excellence
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Seasoned technologists and visionary executives committed to architectural integrity, dependable client delivery, and long-term innovation.
          </p>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white/80 hover:bg-white backdrop-blur-xl border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden p-4 sm:p-5"
            >
              {/* Member Image & Details Container */}
              <div className="flex flex-col w-full">
                {/* Member Portrait Image Container */}
                <div className="relative w-full rounded-lg overflow-hidden bg-slate-100 border border-black/10 shadow-xs mb-3.5">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-auto aspect-[4/4.5] object-cover object-top transition duration-500 ease-out group-hover:scale-105 rounded-lg"
                  />
                  {/* Neatly Layered Badge on Top Right of Image with proper spacing */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md text-white text-[10px] font-mono font-semibold uppercase tracking-wider shadow-sm border border-white/20">
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Name & Designation Sitting Cleanly Below Image */}
                <div className="space-y-1 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight leading-snug group-hover:text-black transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700 font-mono">
                    {member.role}
                  </p>
                </div>

                {/* Bio / Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  {member.description}
                </p>
              </div>

              {/* Bottom Social / Contact Bar */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between mt-auto w-full">
                <span className="text-[11px] text-slate-500 font-mono font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-900" />
                  Verified Leader
                </span>

                <div className="flex items-center gap-2">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 rounded-lg bg-black/5 hover:bg-black text-slate-700 hover:text-white border border-black/10 transition-colors flex items-center justify-center shadow-xs"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-black/5 hover:bg-black text-slate-700 hover:text-white border border-black/10 transition-colors flex items-center justify-center shadow-xs"
                      aria-label={`LinkedIn ${member.name}`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
