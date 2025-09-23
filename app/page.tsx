import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-gradient">
                Fadli Kurniawan
              </h1>
              <p className="mt-6 text-base/7 text-foreground-secondary animate-fade-in-up animate-delay-200">
                Seorang Freshgraduate sistem informasi yang tertarik pada web development dan backend development.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-in-up animate-delay-300">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground/90 glow-effect animate-pulse-slow"
                >
                  Lihat Proyek
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:border-accent"
                >
                  Hubungi Saya
                </Link>
              </div>
            </div>
            <div className="md:justify-self-end animate-fade-in-right">
              <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full border-2 border-border glow-effect sm:w-56 md:w-64 lg:w-72 animate-smooth-float">
        <Image
                  src="/profile.jpg"
                  alt="Foto profil"
                  fill
          priority
                  sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, 18rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border bg-background-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-1 animate-fade-in-left">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-gradient">About Me</h2>
              <p className="mt-2 text-sm text-foreground-secondary animate-fade-in-up animate-delay-200">Results-driven fresh graduate in Information Systems from Telkom University. Demonstrated expertise in software 
              engineering with a focus on backend and full-stack development. Experienced in designing and implementing efficient 
              APIs by leveraging a variety of modern backend technologies. Passionate about building scalable software solutions 
              and solving meaningful problems.</p>
            </div>
            <div className="md:col-span-2 animate-fade-in-right">
              <p className="text-sm text-foreground-secondary animate-fade-in-up animate-delay-300">
                Saya adalah mahasiswa Sistem Informasi tingkat akhir yang tertarik pada teknologi dan pengembangannya.
                Berpengalaman membuat aplikasi web modern dan kolaborasi tim, fokus pada solusi yang berdampak.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <li className="rounded-md border border-border bg-accent/20 p-3 text-sm card-hover animate-fade-in-up animate-delay-400">Proficient in modern web technologies</li>
                <li className="rounded-md border border-border bg-accent/20 p-3 text-sm card-hover animate-fade-in-up animate-delay-500">Passionate about software development</li>
                <li className="rounded-md border border-border bg-accent/20 p-3 text-sm card-hover animate-fade-in-up animate-delay-400">Strong teamwork and communication</li>
                <li className="rounded-md border border-border bg-accent/20 p-3 text-sm card-hover animate-fade-in-up animate-delay-500">Continuous learning & improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-gradient">Skills</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Flask", level: 90 },
              { name: "FastAPI", level: 90 },
              { name: "JavaScript", level: 60 },
              { name: "Next.js", level: 60 },
              { name: "Python", level: 90 },
              { name: "SQL", level: 95 },
              { name: "PHP", level: 85 },
              { name: "Laravel", level: 90 },
              { name: "Docker", level: 75 },
            ].map((s, index) => (
              <div key={s.name} className={`rounded-lg border border-border bg-accent/10 p-4 card-hover animate-fade-in-up animate-delay-${(index * 100) + 200}`}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{s.name}</span>
                  <span className="text-foreground-secondary">{s.level}%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded bg-accent/30">
                  <div
                    className="h-2 rounded bg-gradient-to-r from-white to-gray-300 transition-all duration-1000 ease-out"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-border bg-background-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {/* Jabar Digital Service */}
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-white to-transparent"></div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white shadow-lg"></div>
                <div className="rounded-lg border border-border bg-accent/10 p-6 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">Backend Programmer Intern</h3>
                    <span className="text-sm text-foreground-secondary bg-accent/20 px-3 py-1 rounded-full">June 2024 - Aug 2024</span>
                  </div>
                  <h4 className="text-md font-medium text-foreground-secondary mb-3">Jabar Digital Service</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Developed and implemented robust RESTful API endpoints using Python and Flask
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Engineered backend architecture to efficiently serve large-scale datasets for public consumption
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Managed supporting database and collaborated with front-end team for API integration
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Python</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Flask</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">PostgreSQL</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">REST APIs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Telkom University - OOP Assistant */}
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-white to-transparent"></div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white shadow-lg"></div>
                <div className="rounded-lg border border-border bg-accent/10 p-6 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">Practicum Assistant - Object Oriented Programming</h3>
                    <span className="text-sm text-foreground-secondary bg-accent/20 px-3 py-1 rounded-full">Sep 2023 - Jan 2024</span>
                  </div>
                  <h4 className="text-md font-medium text-foreground-secondary mb-3">Telkom University</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Assisted in building comprehensive practicum modules for OOP course
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Led assistance sessions and provided guidance to students
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Monitored student development and provided constructive feedback
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Java</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">OOP</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Problem-Solving</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Telkom University - Database Assistant */}
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-white to-transparent"></div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white shadow-lg"></div>
                <div className="rounded-lg border border-border bg-accent/10 p-6 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">Practicum Assistant - Database System</h3>
                    <span className="text-sm text-foreground-secondary bg-accent/20 px-3 py-1 rounded-full">Feb 2024 - June 2024</span>
                  </div>
                  <h4 className="text-md font-medium text-foreground-secondary mb-3">Telkom University</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Contributed to practicum module development for database systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Instructed students on database management concepts and practices
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Provided detailed feedback and support for student projects
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">SQL</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Database Management</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured Projects</h2>
            <Link href="#" className="text-sm text-foreground-secondary hover:text-foreground transition-colors">View all</Link>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* DIPAYBO Project */}
            <article className="group rounded-lg border border-border bg-accent/10 p-6 card-hover">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Digital Payment of Gembok (DIPAYBO)</h3>
                  <span className="text-sm text-foreground-secondary bg-accent/20 px-3 py-1 rounded-full">2023-2024</span>
                </div>
                <div className="text-4xl opacity-20">🚗</div>
              </div>
              <p className="text-sm text-foreground-secondary mb-4">
                A comprehensive digital parking solution designed to modernize parking management systems with integrated payment processing.
              </p>
              <ul className="space-y-2 text-sm text-foreground-secondary mb-4">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Analyzed user requirements for digital parking solution
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Designed system architecture and process flow using UML
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Created detailed system specifications and use case diagrams
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Integrated mobile app, smart lock (IoT), and payment gateway
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">UML</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Visual Paradigm</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Firebase</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">IoT</span>
              </div>
            </article>

            {/* Jabar Dashboard Project */}
            <article className="group rounded-lg border border-border bg-accent/10 p-6 card-hover">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Jabar Dashboard - Village Potential</h3>
                  <span className="text-sm text-foreground-secondary bg-accent/20 px-3 py-1 rounded-full">2024</span>
                </div>
                <div className="text-4xl opacity-20">📊</div>
              </div>
              <p className="text-sm text-foreground-secondary mb-4">
                A robust data visualization platform providing insights into village potential across West Java with scalable API architecture.
              </p>
              <ul className="space-y-2 text-sm text-foreground-secondary mb-4">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Engineered robust RESTful API endpoints using Python and Flask
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Designed efficient backend architecture for large-scale datasets
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Managed PostgreSQL database for optimal performance
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Collaborated with front-end team for seamless API integration
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Python</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Flask</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">PostgreSQL</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">REST APIs</span>
              </div>
            </article>

            {/* DP3A Project */}
            <article className="group rounded-lg border border-border bg-accent/10 p-6 card-hover lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">DP3A Public Complaint Website</h3>
                  <span className="text-sm text-foreground-secondary bg-accent/20 px-3 py-1 rounded-full">2025</span>
                </div>
                <div className="text-4xl opacity-20">🛡️</div>
              </div>
              <p className="text-sm text-foreground-secondary mb-4">
                A comprehensive backend system designed to digitize public complaint services for cases of violence against women, ensuring secure and efficient case management.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Digital case tracking and management system
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Automated service scheduling and notifications
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      User acceptance testing and validation
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Secure data handling and privacy protection
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">PHP</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Laravel</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">MySQL</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">UML</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Apache JMeter</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Laragon</span>
                  </div>
                </div>
              </div>
              
              {/* GitHub Link */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <span className="text-white text-sm">📁</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">View Source Code</p>
                      <p className="text-xs text-foreground-secondary">Available on GitHub</p>
                    </div>
                  </div>
                  <a 
                    href="https://github.com/zackbang/website_layanan-Pengaduan.git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span>View on GitHub</span>
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
              </article>
          </div>
        </div>
      </section>

      <section id="education" className="border-t border-border bg-background-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8 animate-gradient">Education & Certifications</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Education */}
            <div className="space-y-6 animate-fade-in-left">
              <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
              <div className="rounded-lg border border-border bg-accent/10 p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Telkom University</h4>
                    <p className="text-sm text-foreground-secondary">Bachelor of Computer, Majoring in Information System</p>
                  </div>
                  <span className="text-sm text-foreground-secondary bg-accent/20 px-3 py-1 rounded-full">2021 - 2025</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">GPA:</span>
                    <span className="text-sm text-foreground-secondary">3.79</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Notable Achievement:</p>
                    <p className="text-sm text-foreground-secondary">
                      Secured funding from Program Kreativitas Mahasiswa - Karya Cipta (PKM-KC) LLDIKTI 2023
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Programming & Logic</span>
                      <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Database Systems</span>
                      <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Web Development</span>
                      <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Software Engineering</span>
                      <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">System Analysis</span>
                      <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Information Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6 animate-fade-in-right">
              <h3 className="text-lg font-semibold text-foreground mb-4">Certifications</h3>
              <div className="rounded-lg border border-border bg-accent/10 p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Certified Web Developer - CWDEV</h4>
                    <p className="text-sm text-foreground-secondary">Badan Nasional Sertifikasi Profesi (BNSP)</p>
                  </div>
                  <span className="text-sm text-foreground-secondary bg-accent/20 px-3 py-1 rounded-full">2025</span>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-foreground-secondary">
                    Professional certification validating expertise in web development technologies and best practices.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">Status:</span>
                    <span className="text-sm text-green-400">✓ Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="organizational" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8 animate-gradient">Organizational Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg border border-border bg-accent/10 p-6 card-hover animate-fade-in-up">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Volleyball Competition Organizer</h3>
                  <p className="text-sm text-foreground-secondary">Telkom University Inter-Departmental Competition</p>
                </div>
                <span className="text-sm text-foreground-secondary bg-accent/20 px-3 py-1 rounded-full">Sep 2022 - Dec 2022</span>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-foreground-secondary">
                  Led the organization and management of a large-scale inter-departmental volleyball competition, 
                  demonstrating strong leadership and project management skills.
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Key Responsibilities:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Managed internal communication channels for effective coordination
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Designed and executed promotional strategies across multiple platforms
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Established and maintained relationships with media partners
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Coordinated event logistics and participant management
                    </li>
                    <li className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      Ensured smooth execution of competition schedule and activities
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Public Relations</span>
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Event Management</span>
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Communication</span>
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Leadership</span>
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Project Management</span>
                    <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Team Coordination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse-slow animate-delay-500"></div>
        
        <div className="mx-auto max-w-6xl px-6 py-20 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6 animate-gradient">
              Let's Connect!
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto mb-6 animate-fade-in-up"></div>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Ready to bring your ideas to life? Let's discuss amazing opportunities together! 🚀
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up animate-delay-300">
              {/* Email Contact */}
              <a 
                href="mailto:aku.fadli.kurniawan@gmail.com"
                className="group relative overflow-hidden rounded-2xl border-2 border-border bg-gradient-to-br from-accent/20 to-accent/5 p-8 text-center transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <span className="text-white text-3xl">✉️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-white transition-colors duration-300">Email Me</h3>
                  <p className="text-foreground-secondary mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    Drop me a line and let's start a conversation
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <span className="text-sm font-mono text-foreground group-hover:text-white">aku.fadli.kurniawan@gmail.com</span>
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </a>

              {/* LinkedIn Contact */}
              <a 
                href="https://linkedin.com/in/fadli-kurniawan-ezz/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border-2 border-border bg-gradient-to-br from-accent/20 to-accent/5 p-8 text-center transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <span className="text-white text-3xl">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-white transition-colors duration-300">Connect on LinkedIn</h3>
                  <p className="text-foreground-secondary mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    Let's build professional connections together
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <span className="text-sm font-mono text-foreground group-hover:text-white">linkedin.com/in/fadli-kurniawan-ezz/</span>
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Enhanced Additional Info */}
            <div className="mt-12 text-center animate-fade-in-up animate-delay-500">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">📍</span>
                </div>
                <span className="text-foreground-secondary group-hover:text-white transition-colors duration-300 font-medium">
                  Based in Bandung, Indonesia
                </span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center animate-fade-in-up animate-delay-700">
              <p className="text-foreground-secondary text-sm">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-foreground-secondary">
          © {new Date().getFullYear()} Portofolio. Dibuat dengan Next.js.
        </div>
      </footer>
    </main>
  );
}
