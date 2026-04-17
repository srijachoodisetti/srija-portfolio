import { motion } from "framer-motion";
import { Code2, Database, BarChart3, Cloud, Brain, Globe, Layers, FileCode2 } from "lucide-react";
import Section from "./Section";

const skills = [
  { icon: Layers, name: "Full Stack Development", level: 85 },
  { icon: BarChart3, name: "Data Analytics", level: 80 },
  { icon: Code2, name: "Python", level: 88 },
  { icon: Database, name: "SQL", level: 82 },
  { icon: FileCode2, name: "Tableau", level: 78 },
  { icon: Globe, name: "Web Development", level: 86 },
  { icon: Cloud, name: "Cloud Computing", level: 72 },
  { icon: Brain, name: "AI Basics", level: 70 },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>My <span className="gradient-text">Tech Stack</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-strong rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <s.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">{s.name}</h3>
            <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.05 + 0.2, ease: "easeOut" }}
                className="h-full gradient-bg rounded-full"
              />
            </div>
            <div className="text-xs text-muted-foreground mt-2">{s.level}%</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
