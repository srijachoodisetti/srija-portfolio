import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import profile from "@/assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full gradient-bg opacity-30 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent opacity-20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]">
            Hi, I'm{" "}
            <span className="gradient-text">Srija</span>
            <br />
            <span className="text-foreground/90">Building the future</span>
            <br />
            <span className="gradient-text">with code.</span>
          </h1>

          <p className="mt-4 text-base lg:text-lg text-muted-foreground font-medium">
            Full Stack Developer · Data Analyst · Tech Enthusiast
          </p>

          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Passionate about building innovative digital solutions using modern technologies in cloud computing, AI, and software development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-gradient text-primary-foreground px-6 py-3 rounded-full font-medium inline-flex items-center gap-2">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="glass-strong px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-white/10 transition">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a href="#" className="glass px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-white/10 transition">
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "10+", l: "Projects" },
              { n: "3mo", l: "Internship" },
              { n: "8+", l: "Skills" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-60 animate-pulse-glow" />
            <div className="absolute -inset-4 rounded-full gradient-bg opacity-40 animate-gradient" style={{ background: "var(--gradient-primary)" }} />
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1.5 gradient-bg animate-gradient">
              <img
                src={profile}
                alt="Chodisetti Siva Chakra Satya Sai Srija"
                width={1024}
                height={1024}
                className="w-full h-full object-cover rounded-full border-4 border-background"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-elegant">
              <div className="text-xs text-muted-foreground">Currently</div>
              <div className="text-sm font-semibold gradient-text">B.Tech CSE @ Centurion</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
