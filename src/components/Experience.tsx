import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";
import Section from "./Section";

const tasks = [
  "Worked on full-stack development tasks",
  "Built web-based applications",
  "Collaborated in software development projects",
  "Improved coding and development practices",
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>Where I've <span className="gradient-text">worked</span></>}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glass-strong rounded-3xl p-8 lg:p-10 shadow-elegant relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 gradient-bg opacity-20 blur-3xl rounded-full" />
        <div className="relative">
          <div className="flex items-start gap-5 flex-wrap">
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shrink-0">
              <Briefcase className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h3 className="text-2xl font-bold">Developer Intern</h3>
                <span className="glass rounded-full px-3 py-1 text-xs font-medium text-accent">3 Months</span>
              </div>
              <p className="text-muted-foreground mt-1">Cognifyz Technologies</p>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {tasks.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 glass rounded-xl p-4"
              >
                <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-sm">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
