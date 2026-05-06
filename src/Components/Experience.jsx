import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './temp'
import { EXPERIENCE } from '../data/data'

function ExperienceCard({ exp, index }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`relative rounded-3xl p-8 border transition-all duration-500 cursor-default
        dark:bg-white/[0.025] bg-white dark:border-white/[0.07] border-black/[0.06]
        dark:hover:border-[#00d485]/25 hover:border-[#00d485]/30
        dark:hover:bg-white/[0.04] hover:bg-[#00d485]/[0.02]
        shadow-sm hover:shadow-xl dark:hover:shadow-[#00d485]/5
        -translate-y-0 hover:-translate-y-1 duration-300`}
      >
        {/* Top bar accent */}
        <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-full transition-all duration-500
          ${exp.type === 'current'
            ? 'bg-gradient-to-r from-[#00d485] to-transparent group-hover:from-[#00d485] group-hover:via-[#00d485]/50'
            : 'bg-gradient-to-r from-violet-500/60 to-transparent group-hover:from-violet-500'
          }`}
        />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0
              ${exp.type === 'current'
                ? 'dark:bg-[#00d485]/10 bg-[#00d485]/10 border dark:border-[#00d485]/20 border-[#00d485]/25'
                : 'dark:bg-violet-500/10 bg-violet-50 border dark:border-violet-500/20 border-violet-200/50'
              }`}
            >
              {exp.icon}
            </div>
            <div>
              <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-1">{exp.role}</h3>
              <p className={`font-body font-medium text-sm ${exp.type === 'current' ? 'text-[#00d485]' : 'text-violet-500'}`}>
                {exp.company}
                <span className="dark:text-white/30 text-black/35 font-normal"> · {exp.location}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border
              ${exp.type === 'current'
                ? 'dark:bg-[#00d485]/10 bg-[#00d485]/10 text-[#00d485] dark:border-[#00d485]/20 border-[#00d485]/25'
                : 'dark:bg-violet-500/10 bg-violet-50 text-violet-500 dark:border-violet-500/20 border-violet-200/50'
              }`}
            >
              {exp.period}
            </span>
            {exp.type === 'current' && (
              <span className="flex items-center gap-1.5 text-xs font-body dark:text-white/40 text-black/40">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d485] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00d485]" />
                </span>
                Currently here
              </span>
            )}
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.type === 'current' ? 'bg-[#00d485]' : 'bg-violet-400'}`} />
              <p className="font-body text-sm dark:text-white/55 text-black/60 leading-relaxed">{bullet}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg text-xs font-mono dark:bg-white/[0.04] bg-black/[0.04] dark:text-white/50 text-black/55 border dark:border-white/[0.06] border-black/[0.06]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          label="// work history"
          title="Experience"
          subtitle="Hands-on experience building full-stack applications in professional Agile environments."
        />
        <div className="grid lg:grid-cols-2 gap-6">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}