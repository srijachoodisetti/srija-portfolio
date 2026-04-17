import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, subtitle, children }: Props) {
  return (
    <section id={id} className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-block glass rounded-full px-4 py-1 text-xs font-medium text-accent mb-4 uppercase tracking-wider">
            {eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
