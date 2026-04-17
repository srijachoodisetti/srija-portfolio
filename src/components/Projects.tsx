import { motion } from "framer-motion";
import { Github, ExternalLink, BarChart3, Users } from "lucide-react";
import Section from "./Section";

const projects = [
  {
    icon: BarChart3,
    title: "Retail Analytics Dashboard",
    desc: "Built a dashboard to analyze customer purchase trends and sales performance, helping uncover key business insights.",
    tags: ["Python", "Tableau", "SQL"],
    github: "https://github.com/srijachoodisetti",
  },
  {
    icon: Users,
    title: "ContactVibe",
    desc: "Developed during a full-stack internship to manage and streamline contact-based interactions through a web application.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/srijachoodisetti",
  },
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Portfolio" title={<>Featured <span className="gradient-text">Projects</span></>}>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-strong rounded-3xl overflow-hidden group hover:shadow-elegant transition-all duration-500"
          >
            <div className="aspect-[16/9] gradient-bg relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20" />
              <p.icon className="relative h-20 w-20 text-white/80 group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute top-4 right-4 glass-strong rounded-full px-3 py-1 text-xs font-medium">
                Project {i + 1}
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className="glass text-xs px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gradient text-primary-foreground px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="#"
                  className="glass px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-white/10 transition"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
