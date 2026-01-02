'use client';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
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
  BookOpen
} from "lucide-react";
import DarkVeil from "@/components/DarkVeil";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dark Veil Background */}
      <div className="absolute inset-0 -z-10">
        <DarkVeil />
      </div>

      <div className="container mx-auto px-4 py-14 max-w-5xl min-h-screen">

        {/* ================= HERO ================= */}
        <header className="text-center mb-16 animate-in fade-in duration-700">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-slate-200 dark:ring-slate-800 will-change-transform">
              <Image
                src="/profile.jpg"
                alt="Pie de Boer"
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="128px"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent drop-shadow-md">
            Pie de Boer
          </h1>

          {/* Role */}
          <p className="text-xl font-semibold text-slate-200 mb-1">
            Machine Learning Engineer
          </p>

          {/* Tagline */}
          <p className="text-sm text-slate-400 mb-6">
            Enabling financial education and advisory workflows through AI
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-6">
            <MapPin className="w-4 h-4" />
            <span>Berlin, Germany</span>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="hover:bg-slate-800 hover:text-white transition-colors duration-200"
            >
              <a href="mailto:xxx@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="hover:bg-slate-800 hover:text-white transition-colors duration-200"
            >
              <a href="tel:+49XX" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +49XX
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="hover:bg-slate-800 hover:text-white transition-colors duration-200"
            >
              <a 
                href="url-placeholder" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="hover:bg-slate-800 hover:text-white transition-colors duration-200"
            >
              <a 
                href="url-placeholder" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </header>

        {/* ================= ABOUT ================= */}
        <Card className="mb-16 bg-white/8 backdrop-blur-md border-slate-600/60 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 hover:bg-white/10 transition-all">
          <CardContent className="px-8 py-8">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-slate-400" />
              <h2 className="text-xl font-semibold text-white">About</h2>
            </div>
            <div className="space-y-4">
              <p className="text-slate-100 leading-relaxed text-base">
                Machine Learning Engineer at Quirin Privatbank, Berlin. I build customer-facing AI chatbots that help people 
                understand finance, and internal tools that improve advisor workflows.
              </p>
              <p className="text-slate-200 leading-relaxed text-base">
                I hold a degree in Artificial Intelligence from Maastricht University (GPA 8.3/10). Focused, curious, and team-oriented.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ================= EXPERIENCE ================= */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-6">
            {/* Current Position - Quirin Privatbank */}
            <Card className="bg-white/8 backdrop-blur-md border-slate-600/60 transition-all duration-300 hover:bg-white/12 hover:shadow-2xl hover:border-slate-500/70 hover:-translate-y-1">
              <CardContent className="p-7">
                <div className="flex items-start gap-5 mb-4">
                  {/* Company Logo - Round Glassy Button */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-white p-3 shadow-xl border border-slate-500/40">
                    <Image
                      src="/company-logo-1.jpg"
                      alt="Quirin Privatbank logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Machine Learning Engineer</h3>
                        <p className="text-slate-200">Quirin Privatbank</p>
                      </div>
                      <Badge variant="default" className="shrink-0 bg-green-600 hover:bg-green-700">Current</Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
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
                  <p className="text-sm font-semibold text-white mb-3">Projects: quirion.ai · Internal AI Platform</p>
                  <ul className="space-y-2.5 text-slate-200 text-sm">
                    <li className="flex gap-3 leading-relaxed">
                      <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                      <span>Feature Development for quirion.ai - optimizing financial tools for our chatbot, backend optimization and frontend updates.</span>
                    </li>
                    <li className="flex gap-3 leading-relaxed">
                      <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                      <span>Development of Internal AI Platform for Financial Advisors - improving workflows enabling better customer advice.</span>
                    </li>
                    <li className="flex gap-3 leading-relaxed">
                      <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                      <span>Setup of extensive monitoring through Langfuse and Grafana, gathering actionable insight into performance and behavior of our agent.</span>
                    </li>
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Button variant="outline" size="sm" asChild className="hover:bg-slate-700/50 border-slate-500/50">
                    <a href="https://www.quirion.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Zap className="w-3 h-3" />
                      Chatbot
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="hover:bg-slate-700/50 border-slate-500/50">
                    <a href="https://www.quirinprivatbank.de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Globe className="w-3 h-3" />
                      Website
                    </a>
                  </Button>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">TypeScript</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Next.js</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">React</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">AI-SDK</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Backend</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Python</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">FastAPI</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Langgraph</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Langfuse</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Postgres</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Infrastructure</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Azure</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Docker</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Kubernetes</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Terraform</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Internship - Rabobank */}
            <Card className="bg-white/8 backdrop-blur-md border-slate-600/60 transition-all duration-300 hover:bg-white/12 hover:shadow-2xl hover:border-slate-500/70 hover:-translate-y-1">
              <CardContent className="p-7">
                <div className="flex items-start gap-5 mb-4">
                  {/* Company Logo - Round Glassy Button */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-white p-3 shadow-xl border border-slate-500/40">
                    <Image
                      src="/company-logo-2.jpg"
                      alt="Rabobank logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-white">Data Science Intern</h3>
                      <p className="text-slate-200">Rabobank</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>Remote (Netherlands)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>2024 - 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                  Research and development on quantum-based portfolio optimization methods.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Python</Badge>
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Matlab</Badge>
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">D-Wave</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="space-y-6">
            {/* Maastricht University */}
            <Card className="bg-white/8 backdrop-blur-md border-slate-600/60 transition-all duration-300 hover:bg-white/12 hover:shadow-2xl hover:border-slate-500/70 hover:-translate-y-1">
              <CardContent className="p-7">
                <div className="flex items-start gap-5 mb-4">
                  {/* University Logo - Round Glassy Button */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-white p-3 shadow-xl border border-slate-500/40">
                    <Image
                      src="/university-logo-1.jpg"
                      alt="Maastricht University logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Data Science and Artificial Intelligence</h3>
                        <p className="text-slate-200">Maastricht University</p>
                      </div>
                      <Badge variant="secondary" className="shrink-0">GPA: 8.3/10</Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
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

                <p className="text-slate-200 text-sm mb-3 leading-relaxed">
                  Rewarded as best AI program in 2023. Strong focus on AI fundamentals with bi-yearly team 
                  projects building real-world applications.
                </p>
                
                <p className="text-sm text-slate-400 mb-3">
                  <span className="text-slate-200 font-semibold">Thesis:</span> Conditional Diffusion Models for ECG Signal Denoising (Grade: 8.5/10)
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Machine Learning</Badge>
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Deep Learning</Badge>
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Computer Vision</Badge>
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">NLP</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Utrecht University */}
            <Card className="bg-white/8 backdrop-blur-md border-slate-600/60 transition-all duration-300 hover:bg-white/12 hover:shadow-2xl hover:border-slate-500/70 hover:-translate-y-1">
              <CardContent className="p-7">
                <div className="flex items-start gap-5">
                  {/* University Logo - Round Glassy Button */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-white p-3 shadow-xl border border-slate-500/40">
                    <Image
                      src="/university-logo-2.jpg"
                      alt="Utrecht University logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">Chemistry</h3>
                    <p className="text-slate-200 mb-2">Utrecht University</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
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
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text text-transparent">
            Skills & Languages
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <Card className="bg-white/8 backdrop-blur-md border-slate-600/60 transition-all duration-300 hover:bg-white/12 hover:shadow-2xl hover:border-slate-500/70">
              <CardContent className="p-7">
                <h3 className="text-lg font-semibold text-white mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-400 mb-2">Languages & Frameworks</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Python</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">TypeScript</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Next.js</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">React</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">FastAPI</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Docker</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Kubernetes</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Postgres</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Terraform</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400 mb-2">Tools & Platforms</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Azure</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Git</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Jira</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Confluence</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">D-Wave</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Langgraph</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Langfuse</Badge>
                      <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">AI-SDK</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-white/8 backdrop-blur-md border-slate-600/60 transition-all duration-300 hover:bg-white/12 hover:shadow-2xl hover:border-slate-500/70">
              <CardContent className="p-7">
                <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">Dutch (Native)</Badge>
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">English (Fluent)</Badge>
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">German (B2)</Badge>
                  <Badge variant="outline" className="border-slate-500/50 text-slate-200 hover:bg-slate-700/50 transition-all">French (A2)</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="text-center pt-8 pb-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Pie de Boer. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}