import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'
import SectionHeader from './temp'
import { CONTACT_LINKS } from '../data/data'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background ambience */}
      <div className="absolute inset-0 dark:bg-grid-dark bg-grid-light opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00d485]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          label="// let's connect"
          title="Get In Touch"
          subtitle="Open to full-time roles, freelance projects, or just a great tech conversation."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA block */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden border dark:bg-white/[0.025] bg-white dark:border-white/[0.07] border-black/[0.06] p-8 lg:p-10 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d485]/5 via-transparent to-violet-500/5 pointer-events-none" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-[#00d485]/10 border border-[#00d485]/20 flex items-center justify-center text-3xl mb-6">
                  🚀
                </div>
                <h3 className="font-display font-bold text-2xl dark:text-white text-gray-900 mb-4 leading-tight">
                  Let's build something<br />
                  <span className="text-gradient">remarkable together</span>
                </h3>
                <p className="font-body text-sm dark:text-white/50 text-black/55 leading-relaxed mb-8">
                  Whether it's a full-stack web app, an AI-powered product, or just want to discuss 
                  tech — I'm always up for a conversation. I respond fast!
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="mailto:riyazzkhan2020@gmail.com"
                    whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(0,212,133,0.3)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#00d485] text-white font-body font-semibold text-sm transition-all shadow-glow-sm"
                  >
                    Send Email
                    <ArrowUpRight size={15} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/riyaz-khan-i-0a908b293"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl dark:bg-white/5 bg-black/5 dark:text-white text-black font-body font-medium text-sm border dark:border-white/10 border-black/10 transition-all"
                  >
                    LinkedIn
                    <ArrowUpRight size={15} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: contact links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border dark:bg-white/[0.02] bg-white dark:border-white/[0.06] border-black/[0.06] dark:hover:border-[#00d485]/25 hover:border-[#00d485]/30 dark:hover:bg-[#00d485]/[0.03] hover:bg-[#00d485]/[0.02] transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-xs dark:text-white/30 text-black/35 uppercase tracking-widest mb-0.5">{link.label}</p>
                  <p className="font-body text-sm font-medium dark:text-white/80 text-black/80 truncate">{link.value}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="dark:text-white/20 text-black/25 dark:group-hover:text-[#00d485] group-hover:text-[#00d485] transition-colors flex-shrink-0"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}