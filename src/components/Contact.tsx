import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import Section from "./Section";

const EMAILJS_SERVICE_ID = "service_ffdcu58";
const EMAILJS_TEMPLATE_ID = "template_xzshs0j";
const EMAILJS_PUBLIC_KEY = "9np6viaKPugL_NNAC";

const contacts = [
  { icon: Mail, label: "Email", value: "srijachoodisetti@gmail.com", href: "mailto:srijachoodisetti@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9347843500", href: "tel:+919347843500" },
  { icon: Linkedin, label: "LinkedIn", value: "srija-choodisetti", href: "https://www.linkedin.com/in/srija-choodisetti" },
  { icon: Github, label: "GitHub", value: "srijachoodisetti", href: "https://github.com/srijachoodisetti" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      const formData = new FormData(formRef.current);
      const templateParams = {
        name: formData.get("name"),
        from_email: formData.get("from_email"),
        message: formData.get("message"),
        title: "New message from portfolio",
        time: new Date().toLocaleString(),
      };
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's <span className="gradient-text">connect</span></>} subtitle="Have a project in mind or just want to say hi? Drop a message.">
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 glass-strong rounded-2xl p-5 hover:bg-white/10 transition-all hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition">
                <c.icon className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                <div className="font-medium truncate">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-strong rounded-3xl p-7 space-y-4"
        >
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
            <input name="from_name" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition" placeholder="Your name" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
            <input name="from_email" required type="email" className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea name="message" required rows={4} className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition resize-none" placeholder="Tell me about your project..." />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-gradient text-primary-foreground w-full py-3 rounded-xl font-medium inline-flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message sent ✓"}
            {status === "error" && "Failed — try again"}
            {status === "idle" && (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
