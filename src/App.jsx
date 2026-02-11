import {
  Github,
  Linkedin,
  Code,
  Mail,
  Briefcase,
  ExternalLink,
  Instagram,
  MessageCircle,
  BookOpen,
  Cloud,
  Cpu,
  Database,
  Wrench,
  FileText,
  Award,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

import profile from "./assets/profile.jpg";
import resume from "./assets/Aman_Kumar_Singh_Resume.pdf";
import ibmCert from "./assets/pbl_certificate.pdf";
import ibmDsCert from "./assets/IBM_Data_Science.pdf";
import nptelCert from "./assets/NPTEL_IOT_Certificate.pdf";
import nitCert from "./assets/version_certificate.pdf";
import conclaveCert from "./assets/Aman_cusat_conclave.pdf";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-white scroll-smooth font-sans">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-indigo-400 font-bold text-xl tracking-wide">
            Aman Kumar Singh
          </span>

          <div className="flex gap-8 text-lg font-semibold tracking-wide text-gray-300">
            {["Home", "About", "Skills", "Projects", "Resume", "Coding", "Connect"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group uppercase transition"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-32">
        <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto items-center">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Aman Kumar Singh
              </span>
            </h1>

            <p className="text-gray-400 text-xl">
              MCA Student • Full Stack Developer • AI Enthusiast
            </p>

            <div className="flex items-center gap-3 text-gray-300 text-lg">
              <Briefcase className="text-indigo-400" />
              Software Developer Intern at
              <span className="text-indigo-400 font-semibold ml-1">
                iDatalytics
              </span>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500 blur-3xl opacity-30"></div>
              <img
                src={profile}
                alt="Aman"
                className="relative w-80 h-80 rounded-full border-[6px] border-white/80 outline outline-4 outline-indigo-400 object-cover shadow-[0_0_80px_rgba(99,102,241,0.35)]"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <Section id="about" title="About Me">
        <p className="text-gray-300 text-xl leading-relaxed">
          I am an MCA student and Software Developer Intern at iDatalytics with a
          strong passion for full stack development, backend engineering , full project delievery, and
          AI-powered applications. I enjoy designing and building scalable,
          maintainable, and efficient systems that solve real-world problems.
        </p>

        <p className="text-gray-300 text-xl leading-relaxed mt-6">
          I have qualified UGC NET and Assistant Professor and consistently balance academics with
          leadership, volunteering, and technical participation. These
          experiences have strengthened my communication, teamwork, adaptability,
          and problem-solving skills.
        </p>
      </Section>

      {/* ================= SKILLS ================= */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard icon={Code} title="Programming" desc="Java, Python, JavaScript, SQL" />
          <SkillCard icon={Cpu} title="AI & Agentic Systems" desc="Agentic AI, LangGraph, LLM-based workflows" />
          <SkillCard icon={Cloud} title="Cloud" desc="Microsoft Azure, cloud fundamentals & deployment" />
          <SkillCard icon={Database} title="Backend" desc="Node.js, Express, MySQL, MongoDB" />
          <SkillCard icon={Wrench} title="Tools" desc="Git, GitHub, VS Code, Postman ,Docker , Kubernetes" />
          <SkillCard icon={BookOpen} title="CS Core" desc="DSA, OOPs, Computer Network DBMS, Operating Systems" />
        </div>
      </Section>

      {/* ================= PROJECTS ================= */}
      <Section id="projects" title="Projects">
        <ProjectCard
          title="AutoInbox – AI Powered Gmail Automation"
          desc="An AI-driven Gmail automation system developed using Python, LangGraph, and Gmail APIs. The system classifies emails, generates intelligent responses, manages inbox workflows, and ensures API safety using caching, rate limiting, and robust error handling to improve productivity."
          link="https://drive.google.com/file/d/1bQy_M81dmmCT6L-RImHrR8-F9x4KsXZZ/view"
          label="View Demo"
        />

        <ProjectCard
          title="Stayio – Hotel Listing & Review Platform"
          desc="A full-stack hotel listing and review platform that allows users to explore properties, create and manage listings, submit reviews, and rate hotels using an interactive star-based system. The platform focuses on user experience, scalability, and clean UI design."
          link="https://stayio-hotel-booking-website.vercel.app"
          label="Live Demo"
        />

        <ProjectCard
          title="Online Proctored Examination Portal"
          desc="A secure online examination system with separate student and admin dashboards. Admins can create exams where questions are dynamically generated using Large Language Models (LLMs). Students can attempt exams in a controlled environment, and results are automatically evaluated and published, ensuring efficiency, fairness, and scalability."
          label="Project Overview"
        />
      </Section>

      {/* ================= RESUME ================= */}
      <Section id="resume" title="Resume & Achievements">
        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard title="Resume" icon={FileText}>
            <a href={resume} target="_blank" className="text-indigo-400 hover:underline">
              View Resume
            </a>
          </GlassCard>

          <GlassCard title="Certifications" icon={Award}>
            <ul className="space-y-2">
              <li><a href={ibmCert} target="_blank" className="hover:underline">IBM SkillBuild – Agentic AI</a></li>
              <li><a href={ibmDsCert} target="_blank" className="hover:underline">IBM Data Science</a></li>
              <li><a href={nptelCert} target="_blank" className="hover:underline">NPTEL IoT (SWAYAM)</a></li>
              <li><a href={nitCert} target="_blank" className="hover:underline">NIT Trichy – Technical Event</a></li>
            </ul>
          </GlassCard>

          <GlassCard title="Participation & Volunteership" icon={Users}>
            <ul className="space-y-2">
              <li>Placement Coordinator – College</li>
              <li>National Service Scheme (NSS)</li>
              <li>Bharat Scouts & Guides</li>
              <li>District Level Volleyball Player</li>
              <li>
                <a href={conclaveCert} target="_blank" className="hover:underline">
                  International Conclave Participation
                </a>
              </li>
            </ul>
          </GlassCard>
        </div>
      </Section>

      {/* ================= CODING ================= */}
      <Section id="coding" title="Coding Profiles">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <ProfileLink name="GitHub" icon={Github} link="https://github.com/AmanSingh754" />
          <ProfileLink name="LeetCode" icon={Code} link="https://leetcode.com/u/AmanSingh012/" />
          <ProfileLink name="GFG" icon={BookOpen} link="https://www.geeksforgeeks.org/profile/singhrajpugpcg?tab=activity" />
          <ProfileLink name="CodeChef" icon={Code} link="https://www.codechef.com/users/bloat_cats_81" />
        </div>
      </Section>

      {/* ================= CONNECT ================= */}
      <Section id="connect" title="Connect With Me">
        <div className="flex justify-center gap-10">
          <IconLink icon={Mail} link="mailto:singhrajputanaaman@gmail.com" />
          <IconLink icon={MessageCircle} link="https://wa.me/917544029668" />
          <IconLink icon={Instagram} link="https://www.instagram.com/" />
          <IconLink icon={Linkedin} link="https://www.linkedin.com/in/aman-kumar-singh-b51b72213/" />
        </div>
      </Section>

      <footer className="text-center py-6 text-gray-500 border-t border-white/10">
        © 2026 Aman Kumar Singh
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="max-w-6xl mx-auto px-6 py-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
      {title}
    </h2>
    {children}
  </motion.section>
);

const SkillCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-indigo-400 transition">
    <Icon className="text-indigo-400 mb-4" />
    <h3 className="font-semibold text-lg mb-1">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </div>
);

const ProjectCard = ({ title, desc, link, label }) => (
  <div className="bg-white/5 backdrop-blur border border-white/10 p-8 rounded-3xl mb-8 hover:border-indigo-400 transition">
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{desc}</p>
    {link && (
      <a href={link} target="_blank" className="text-indigo-400 inline-flex gap-2 hover:underline">
        <ExternalLink size={18} /> {label}
      </a>
    )}
  </div>
);

const GlassCard = ({ title, icon: Icon, children }) => (
  <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-indigo-400 transition">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="text-indigo-400" />
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <div className="text-gray-300">{children}</div>
  </div>
);

const ProfileLink = ({ name, icon: Icon, link }) => (
  <a
    href={link}
    target="_blank"
    className="flex flex-col items-center gap-2 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-indigo-400 transition"
  >
    <Icon size={32} className="text-indigo-400" />
    <span className="font-semibold">{name}</span>
  </a>
);

const IconLink = ({ icon: Icon, link }) => (
  <a
    href={link}
    target="_blank"
    className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-indigo-400 transition"
  >
    <Icon size={26} className="text-indigo-400" />
  </a>
);
