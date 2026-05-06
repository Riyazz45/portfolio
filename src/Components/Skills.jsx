import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'
import { SKILLS, EDUCATION, CERTIFICATIONS } from '../data/data'

const CAT_COLORS = {
  emerald: 'dark:bg-[#00d485]/10 bg-[#00d485]/8 text-[#00d485] dark:border-[#00d485]/15 border-[#00d485]/20',
  blue: 'dark:bg-blue-500/10 bg-blue-50 text-blue-500 dark:border-blue-500/15 border-blue-200/50',
  amber: 'dark:bg-amber-500/10 bg-amber-50 text-amber-500 dark:border-amber-500/15 border-amber-200/50',
  violet: 'dark:bg-violet-500/10 bg-violet-50 text-violet-500 dark:border-violet-500/15 border-violet-200/50',
  rose: 'dark:bg-rose-500/10 bg-rose-50 text-rose-500 dark:border-rose-500/15 border-rose-200/50',
  teal: 'dark:bg-teal-500/10 bg-teal-50 text-teal-500 dark:border-teal-500/15 border-teal-200/50',
}

const CAT_HEADER = {
  emerald: 'text-[#00d485]',
  blue: 'text-blue-400',
  amber: 'text-amber-400',
  violet: 'text-violet-400',
  rose: 'text-rose-400',
  teal: 'text-teal-400',
}

function SkillCard({ skill, index }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="rounded-2xl p-6 border dark:bg-white/[0.025] bg-white dark:border-white/[0.07] border-black/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:border-white/10"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{skill.icon}</span>
        <h3 className={`font-display font-semibold text-sm tracking-wide uppercase ${CAT_HEADER[skill.color]}`}>
          {skill.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all duration-200 hover:scale-105 cursor-default ${CAT_COLORS[skill.color]}`}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function EduCard({ edu, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative rounded-2xl p-6 border dark:bg-white/[0.025] bg-white dark:border-white/[0.07] border-black/[0.06] overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-start gap-4">
        <span className="text-3xl">{edu.icon}</span>
        <div className="flex-1">
          <span className="text-xs font-mono text-violet-400 tracking-wider">{edu.period}</span>
          <h3 className="font-display font-bold text-lg dark:text-white text-gray-900 mt-1 mb-1 leading-snug">{edu.degree}</h3>
          <p className="font-body text-sm dark:text-white/55 text-black/60">{edu.school}</p>
          <p className="font-body text-xs dark:text-white/30 text-black/40 mb-3">{edu.location}</p>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono dark:bg-violet-500/10 bg-violet-50 text-violet-400 border dark:border-violet-500/20 border-violet-200/50">
              CGPA: {edu.cgpa}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CertItem({ cert, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5
        ${cert.isPub
          ? 'dark:bg-[#00d485]/5 bg-[#00d485]/4 dark:border-[#00d485]/15 border-[#00d485]/20'
          : 'dark:bg-white/[0.02] bg-white dark:border-white/[0.06] border-black/[0.06]'
        }
        shadow-sm hover:shadow-md`}
    >
      <span className="text-2xl flex-shrink-0">{cert.badge}</span>
      <div className="flex-1 min-w-0">
        <p className="font-body text-sm font-medium dark:text-white/80 text-black/80 leading-snug">{cert.name}</p>
        <p className="font-body text-xs dark:text-white/35 text-black/40 mt-0.5">{cert.org} · {cert.year}</p>
      </div>
      {cert.isPub && (
        <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-mono text-[#00d485] dark:bg-[#00d485]/10 bg-[#00d485]/10 border dark:border-[#00d485]/20 border-[#00d485]/25">
          Publication
        </span>
      )}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          label="// tools & tech"
          title="Skills & Stack"
          subtitle="Technologies I work with to build scalable, production-ready applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {SKILLS.map((skill, i) => <SkillCard key={skill.category} skill={skill} index={i} />)}
        </div>

        {/* Education */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="font-mono text-xs tracking-[0.25em] text-[#00d485] uppercase">// academia</span>
            <h3 className="font-display font-bold text-3xl dark:text-white text-gray-900 mt-3">Education</h3>
            <div className="mt-4 w-10 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-transparent" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {EDUCATION.map((edu, i) => <EduCard key={i} edu={edu} index={i} />)}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="font-mono text-xs tracking-[0.25em] text-[#00d485] uppercase">// achievements</span>
            <h3 className="font-display font-bold text-3xl dark:text-white text-gray-900 mt-3">Certifications & Publications</h3>
            <div className="mt-4 w-10 h-[2px] rounded-full bg-gradient-to-r from-[#00d485] to-transparent" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((cert, i) => <CertItem key={i} cert={cert} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
