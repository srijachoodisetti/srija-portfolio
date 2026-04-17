import { motion } from "framer-motion";
import { Code, Palette, BarChart3 } from "lucide-react";
import Section from "./Section";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Responsive websites with robust frontend and backend solutions tailored to your goals.",
    points: ["Responsive design", "Frontend & backend", "Modern frameworks"],
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "User-friendly interfaces and modern digital experiences that delight users.",
    points: ["Clean interfaces", "Modern aesthetics", "Smooth interactions"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    desc: "Turn raw data into actionable insights with visualizations and dashboards.",
    points: ["Data visualization", "Business insights", "Dashboard creation"],
  },
];

export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title={<>What I <span className="gradient-text">offer</span></>}>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-strong rounded-3xl p-8 relative overflow-hidden group hover:shadow-elegant transition-all duration-500"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 gradient-bg opacity-0 group-hover:opacity-30 blur-3xl rounded-full transition-opacity duration-500" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
