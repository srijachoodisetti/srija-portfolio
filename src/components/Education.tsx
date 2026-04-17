import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";
import Section from "./Section";

const items = [
  { icon: GraduationCap, period: "2023 — 2027", title: "B.Tech, Computer Science Engineering", place: "Centurion University" },
  { icon: BookOpen, period: "Intermediate", title: "MPC", place: "Sri Chaitanya Junior College" },
  { icon: School, period: "SSC", title: "Secondary Education", place: "ZPH School, Tuni" },
];

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title={<>Academic <span className="gradient-text">Journey</span></>}>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px gradient-bg opacity-50" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex lg:items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg ring-4 ring-background z-10" />
              <div className="lg:w-1/2 pl-16 lg:pl-0 lg:px-8">
                <div className="glass-strong rounded-2xl p-6 hover:shadow-elegant transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                      <it.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">{it.period}</span>
                  </div>
                  <h3 className="font-semibold text-lg">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{it.place}</p>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
