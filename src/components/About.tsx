import { motion } from "framer-motion";
import { Lightbulb, Target, Brain, TrendingUp } from "lucide-react";
import Section from "./Section";

const traits = [
  { icon: Lightbulb, title: "Passion for Tech", desc: "Driven by curiosity to explore emerging technologies and build with them." },
  { icon: Target, title: "Career Focused", desc: "Aiming to build a successful path in the IT industry through impact." },
  { icon: Brain, title: "Problem Solver", desc: "Approaching real-world challenges with logic, creativity, and code." },
  { icon: TrendingUp, title: "Always Learning", desc: "Continuously sharpening technical and problem-solving skills." },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>The mind behind <span className="gradient-text">the code</span></>}
    >
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass-strong rounded-3xl p-8 shadow-elegant"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            I am <span className="gradient-text font-semibold">Chodisetti Siva Chakra Satya Sai Srija</span>, a passionate technology enthusiast with a strong interest in cloud computing, artificial intelligence, and software development.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I enjoy learning new technologies and applying them to solve real-world problems through innovative projects. My goal is to build a successful path in the IT industry while continuously improving my technical and problem-solving skills.
          </p>
        </motion.div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <t.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
