import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import SectionHeader from './temp'
import { PROJECTS } from '../data/data'

const COLOR_MAP = {
  emerald: {
    glow: 'bg-[#00d485]/8',
    border: 'dark:border-[#00d485]/20 border-[#00d485]/20',
    tag: 'dark:bg-[#00d485]/10 bg-[#00d485]/8 text-[#00d485] dark:border-[#00d485]/15 border-[#00d485]/20',
    badge: 'dark:bg-[#00d485]/10 bg-[#00d485]/10 text-[#00d485] border-[#00d485]/25',
    dot: 'bg-[#00d485]',
    title: 'text-[#00d485]',
  },
  rose: {
    glow: 'bg-rose-500/8',
    border: 'dark:border-rose-500/20 border-rose-300/30',
    tag: 'dark:bg-rose-500/10 bg-rose-50 text-rose-500 dark:border-rose-500/15 border-rose-200/50',
    badge: 'dark:bg-rose-500/10 bg-rose-50 text-rose-500 border-rose-300/30',
    dot: 'bg-rose-400',
    title: 'text-rose-400',
  },
  violet: {
    glow: 'bg-violet-500/8',
    border: 'dark:border-violet-500/20 border-violet-300/30',
    tag: 'dark:bg-violet-500/10 bg-violet-50 text-violet-500 dark:border-violet-500/15 border-violet-200/50',
    badge: 'dark:bg-violet-500/10 bg-violet-50 text-violet-500 border-violet-300/30',
    dot: 'bg-violet-400',
    title: 'text-violet-400',
  },
}

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const c = COLOR_MAP[project.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative rounded-3xl overflow-hidden border dark:bg-white/[0.02] bg-white dark:border-white/[0.07] border-black/[0.06] hover:-translate-y-2 transition-all duration-400 cursor-default shadow-sm hover:shadow-2xl dark:hover:shadow-black/30"
    >
      {/* Glow overlay */}
      <div className={`absolute inset-0 ${c.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${c.dot} opacity-60 group-hover:opacity-100 transition-opacity`} 
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{project.emoji}</div>
            {project.featured && (
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border ${c.badge}`}>
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.links.github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center dark:text-white/50 text-black/50 dark:hover:text-white hover:text-black transition-colors"
            >
              <Github size={15} />
            </motion.a>
            <motion.a
              href={project.links.live}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center dark:text-white/50 text-black/50 dark:hover:text-white hover:text-black transition-colors"
            >
              <ExternalLink size={15} />
            </motion.a>
          </div>
        </div>

        <div className="mb-2">
          <span className={`text-xs font-mono ${c.title} tracking-wide`}>{project.subtitle}</span>
        </div>
        <h3 className="font-display font-bold text-2xl dark:text-white text-gray-900 mb-4">{project.title}</h3>
        <p className="font-body text-sm dark:text-white/50 text-black/55 leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className={`px-3 py-1 rounded-lg text-xs font-mono border ${c.tag}`}>{t}</span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs font-mono dark:text-white/25 text-black/30">{project.period}</span>
          <motion.a
            href={project.links.live}
            whileHover={{ x: 4 }}
            className={`text-xs font-body font-medium ${c.title} flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity`}
          >
            View Project <ExternalLink size={11} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative dark:bg-white/[0.01] bg-black/[0.01]">
      <div className="absolute inset-0 dark:bg-grid-dark bg-grid-light opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          label="// what i've built"
          title="Projects"
          subtitle="A selection of full-stack applications I've designed and engineered from scratch."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}