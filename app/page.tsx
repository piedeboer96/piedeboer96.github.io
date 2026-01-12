'use client';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  User,
  Globe,
  Zap,
  BookOpen,
  Sparkles
} from "lucide-react";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a1b26]">
      {/* Subtle Organic Gradient Background */}
      <div className="fixed inset-0 mesh-gradient opacity-100" />

      {/* Optional: Remove particle background for cleaner Japandi aesthetic */}
      {/* <ParticleBackground /> */}

      <div ref={containerRef} className="relative container mx-auto px-6 py-16 max-w-5xl min-h-screen z-10">

        {/* ================= HERO ================= */}
        <header className="mb-20 reveal">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Profile Image */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-natural zen-circle will-change-transform group">
                {/* Subtle sage glow on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b7ec8] to-[#9e91d4] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700" />
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-[#3a3d4a]">
                  <Image
                    src="/profile.jpg"
                    alt="Pie de Boer"
                    fill
                    priority
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="flex-1 text-center md:text-left md:pt-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Name with greeting */}
              <h1 className="text-5xl md:text-7xl font-light mb-6 gradient-text leading-tight tracking-tight">
                Hi, I'm Pie de Boer
              </h1>

              {/* Catchy Tagline */}
              <p className="text-2xl md:text-3xl font-light text-[#a89bb5] mb-12 leading-relaxed">
                I help people plan their financial future—powered by <span className="text-[#a78bfa] font-medium">AI</span>
              </p>

              {/* CTA Button */}
              <div className="mb-10">
                <Button
                  size="lg"
                  asChild
                  className="relative overflow-hidden btn-japandi font-medium shadow-natural hover:shadow-[0_6px_20px_rgba(185,185,157,0.3)] transition-all duration-300 border-0 group text-base"
                >
                  <a href="mailto:piedeboer96@gmail.com" className="flex items-center gap-3 px-8 py-6">
                    <Mail className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    <span className="relative z-10">Let's Connect</span>
                  </a>
                </Button>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#b8b0a0] mb-6">
                <MapPin className="w-4 h-4" />
                <span className="font-light">Berlin, Germany</span>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="natural-border text-[#e8dcc4] hover:border-[#8b7ec8]/50 hover:bg-[#8b7ec8]/10 transition-all duration-300 font-light px-3 py-2"
                >
                  <a href="tel:+491622342077" className="flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    Mobile
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="natural-border text-[#e8dcc4] hover:border-[#8b7ec8]/50 hover:bg-[#8b7ec8]/10 transition-all duration-300 font-light px-3 py-2"
                >
                  <a
                    href="https://www.linkedin.com/in/pie-de-boer-6b6663265/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-3 h-3" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="natural-border text-[#e8dcc4] hover:border-[#8b7ec8]/50 hover:bg-[#8b7ec8]/10 transition-all duration-300 font-light px-3 py-2"
                >
                  <a
                    href="https://github.com/piedeboer96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="natural-border text-[#e8dcc4] hover:border-[#8b7ec8]/50 hover:bg-[#8b7ec8]/10 transition-all duration-300 font-light px-3 py-2"
                >
                  <a
                    href="https://www.xing.com/profile/Pie_deBoer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Globe className="w-3 h-3" />
                    XING
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* ================= ABOUT ================= */}
        {/* <section id="about" className="mb-24 reveal">
        <Card className="natural-border card-lift">
          <CardContent className="px-10 py-10">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-[#8b7ec8]" />
              <h2 className="text-2xl font-light text-[#e8dcc4] tracking-wide">About Me</h2>
            </div>
            <div className="space-y-5">
              <p className="text-[#b8b0a0] leading-relaxed text-lg font-light">
                <span className="font-medium">Machine Learning Engineer at Quirin Privatbank in Berlin.</span> I build AI agents that help customers understand their finances and internal tools that enhance advisors' workflows.
              </p>
              <p className="text-[#b8b0a0] leading-relaxed text-base font-light">
                <span className="font-medium">Maastricht University grad</span> (Data Science & AI, 8.3/10 GPA). Curious, passionate, eager to learn something new each day.
              </p>
            </div>
          </CardContent>
        </Card>
        </section> */}

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="mb-24 reveal">
          <h2 className="text-4xl font-normal mb-14 text-white flex items-center gap-3 tracking-wide">
            <Zap className="w-7 h-7 text-[#8b7ec8]" />
            Experience
          </h2>

          <div className="space-y-8 relative">
            {/* Timeline line - natural sage gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#8b7ec8] via-[#9e91d4] to-transparent opacity-40 hidden md:block" />

            {/* Current Position - Quirin Privatbank */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
            >
            <Card className="natural-border card-lift relative overflow-hidden">
              <CardContent className="px-10 py-10">
                <div className="flex items-start gap-5 mb-4">
                  {/* Company Logo - Round Glassy Button */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-white shadow-natural border border-[#8f837a]/20 flex items-center justify-center p-3">
                    <div className="relative w-full h-full">
                      <Image
                        src="/quirinprivatbank-logo.svg"
                        alt="Quirin Privatbank logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-medium text-white">Machine Learning Engineer</h3>
                        <p className="text-[#b8b0a0] font-light">Quirin Privatbank · Full Time</p>
                      </div>
                      <Badge variant="default" className="shrink-0 bg-[#8b7ec8] hover:bg-[#9e91d4] text-white font-normal">Current</Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#8f837a] font-light">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>Berlin</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Feb 2025 - Present</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-[#e8dcc4] mb-3">Projects: quirion.ai · Internal AI Platform</p>
                  <ul className="space-y-2.5 text-[#5e5e5e] text-sm font-light">
                    <li className="flex gap-3 leading-relaxed">
                      <span className="text-[#b9b99d] font-normal flex-shrink-0">•</span>
                      <span>Feature development for quirion.ai, focusing on optimizing tools, prompts, and agent behavior.</span>
                    </li>
                    <li className="flex gap-3 leading-relaxed">
                      <span className="text-[#b9b99d] font-normal flex-shrink-0">•</span>
                      <span>Observability platform for quirion.ai using Langfuse and Grafana to analyze chatbot behavior and better understand customer needs.</span>
                    </li>
                    <li className="flex gap-3 leading-relaxed">
                      <span className="text-[#b9b99d] font-normal flex-shrink-0">•</span>
                      <span>Development of an internal platform leveraging AI to enhance financial advisor workflows.</span>
                    </li>
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Button variant="outline" size="sm" asChild className="glass-card natural-border text-[#5e5e5e] hover:bg-[#b9b99d]/20 hover:text-[#606c5a] transition-all font-light">
                    <a href="https://quirion.ai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Zap className="w-3 h-3" />
                      quirion.Ai
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="glass-card natural-border text-[#5e5e5e] hover:bg-[#b9b99d]/20 hover:text-[#606c5a] transition-all font-light">
                    <a href="https://www.quirinprivatbank.de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Globe className="w-3 h-3" />
                      Quirin Privatbank
                    </a>
                  </Button>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-[#b8b0a0] uppercase tracking-wide mb-2">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">TypeScript</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Next.js</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">React</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">AI-SDK</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#b8b0a0] uppercase tracking-wide mb-2">Backend</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Python</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">FastAPI</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Langgraph</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Langfuse</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Postgres</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#b8b0a0] uppercase tracking-wide mb-2">Infrastructure</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Azure</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Docker</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Kubernetes</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Terraform</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>

            {/* Internship - Rabobank */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
            >
            <Card className="natural-border card-lift relative overflow-hidden">
              <CardContent className="px-10 py-10">
                <div className="flex items-start gap-5 mb-4">
                  {/* Company Logo - Round Glassy Button */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-white shadow-natural border border-[#8f837a]/20 flex items-center justify-center p-3">
                    <div className="relative w-full h-full">
                      <Image
                        src="/rabobank-logo.svg"
                        alt="Rabobank logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-medium text-white">Data Scientist</h3>
                        <p className="text-[#b8b0a0] font-light">Rabobank • Internship</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#b8b0a0] font-light\">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>Remote (Netherlands)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>2023 - 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <ul className="space-y-2.5 text-[#b8b0a0] text-sm font-light">
                    <li className="flex gap-3 leading-relaxed">
                      <span className="text-[#8b7ec8] font-normal flex-shrink-0">•</span>
                      <span>Implemented newest solver of D-Wave allowing to solve large problems in shorter runtimes.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="tech-badge text-[#5e5e5e]">Python</Badge>
                  <Badge variant="outline" className="tech-badge text-[#5e5e5e]">Matlab</Badge>
                  <Badge variant="outline" className="tech-badge text-[#5e5e5e]">D-Wave</Badge>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section id="education" className="mb-24 reveal">
          <h2 className="text-4xl font-normal mb-14 text-white flex items-center gap-3 tracking-wide">
            <BookOpen className="w-7 h-7 text-[#8b7ec8]" />
            Education
          </h2>

          <div className="space-y-8">
            {/* Maastricht University */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
            >
            <Card className="natural-border card-lift">
              <CardContent className="px-10 py-10">
                <div className="flex items-start gap-5 mb-4">
                  {/* University Logo - Round Glassy Button */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-white shadow-natural border border-[#8f837a]/20 flex items-center justify-center p-3">
                    <div className="relative w-full h-full">
                      <Image
                        src="/university-logo-1.jpg"
                        alt="Maastricht University logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-medium text-[#5e5e5e]">Data Science and Artificial Intelligence</h3>
                        <p className="text-[#8f837a] font-light">Maastricht University</p>
                      </div>
                      <Badge variant="secondary" className="shrink-0 bg-[#dcb482] text-[#5e5e5e] hover:bg-[#d4a571] font-normal">GPA: 8.3/10</Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#8f837a] font-light">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>Maastricht</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>2021 - 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[#5e5e5e] text-sm mb-3 leading-relaxed font-light">
                  Recognized as the top AI program in the Netherlands in 2023. Through collaborative, hands-on projects, I've developed a solid foundation in AI and machine learning.
                </p>

                <p className="text-sm text-[#8f837a] mb-4 font-light">
                  <span className="text-[#5e5e5e] font-medium">Thesis:</span> <a href="https://github.com/piedeboer96/ECG-Signal-Denoising" target="_blank" rel="noopener noreferrer" className="text-[#606c5a] hover:text-[#b9b99d] underline">Conditional Diffusion Models for ECG Signal Denoising</a> (Grade: 8.5/10)
                </p>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild className="glass-card natural-border text-[#5e5e5e] hover:bg-[#b9b99d]/20 hover:text-[#606c5a] transition-all font-light">
                    <a href="https://github.com/piedeboer96/ECG-Signal-Denoising" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-3 h-3" />
                      Thesis Repository
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="glass-card natural-border text-[#5e5e5e] hover:bg-[#b9b99d]/20 hover:text-[#606c5a] transition-all font-light">
                    <a href="https://www.maastrichtuniversity.nl/education/bachelor/programmes/data-science-and-artificial-intelligence" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Globe className="w-3 h-3" />
                      Program Website
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            </motion.div>

            {/* Utrecht University */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
            >
            <Card className="natural-border card-lift">
              <CardContent className="px-10 py-10">
                <div className="flex items-start gap-5 mb-4">
                  {/* University Logo - Round Glassy Button */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-white shadow-natural border border-[#8f837a]/20 flex items-center justify-center p-3">
                    <div className="relative w-full h-full">
                      <Image
                        src="/utrechtuniversity-logo.svg"
                        alt="Utrecht University logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="text-xl font-medium text-[#5e5e5e]">Chemistry</h3>
                      <p className="text-[#8f837a] font-light">Utrecht University</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#8f837a] font-light">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>Utrecht</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>2016</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[#5e5e5e] text-sm mb-3 leading-relaxed font-light">
                  Completed first year 60 ECTS.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="tech-badge text-[#5e5e5e]">Calculus</Badge>
                  <Badge variant="outline" className="tech-badge text-[#5e5e5e]">Linear Algebra</Badge>
                  <Badge variant="outline" className="tech-badge text-[#5e5e5e]">Physics</Badge>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="mb-24 reveal">
          <h2 className="text-4xl font-normal mb-14 text-white flex items-center gap-3 tracking-wide">
            <Sparkles className="w-7 h-7 text-[#8b7ec8]" />
            Skills & Languages
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
            >
            <Card className="natural-border card-lift h-full">
              <CardContent className="px-10 py-10">
                <h3 className="text-xl font-medium text-white mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-[#b8b0a0] mb-2">Languages & Frameworks</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Python</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">TypeScript</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Java</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Matlab</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Next.js</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">React</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">FastAPI</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Postgres</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#b8b0a0] mb-2">AI & Machine Learning</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Langgraph</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Langfuse</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">AI-SDK</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">RAG</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Prompt Engineering</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">NLP</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Optimization</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#b8b0a0] mb-2">Data & Analytics</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Data Analysis</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Statistics</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#b8b0a0] mb-2">Infrastructure & Deployment</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Docker</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Kubernetes</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Terraform</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Azure</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Git</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#b8b0a0] mb-2">Design</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Figma</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Webflow</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#b8b0a0] mb-2">Project Management</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Jira</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Confluence</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">Teams</Badge>
                      <Badge variant="outline" className="tech-badge text-[#e8dcc4]">PowerPoint</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
            >
            <Card className="natural-border card-lift h-full">
              <CardContent className="px-10 py-10">
                <h3 className="text-xl font-medium text-white mb-6">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="tech-badge text-[#e8dcc4]\">Dutch (Native)</Badge>
                  <Badge variant="outline" className="tech-badge text-[#e8dcc4]">English (Fluent)</Badge>
                  <Badge variant="outline" className="tech-badge text-[#e8dcc4]">German (Fluent)</Badge>
                  <Badge variant="outline" className="tech-badge text-[#e8dcc4]">French (Beginner)</Badge>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="text-center pt-12 pb-6">
          <p className="text-[#b8b0a0] text-sm font-light">
            © {new Date().getFullYear()} Pie de Boer. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}