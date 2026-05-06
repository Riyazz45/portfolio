import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionHeader({ label, title, subtitle }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <span className="inline-block font-mono text-xs tracking-[0.25em] text-[#00d485] uppercase mb-4">
        {label}
      </span>
      <h2 className="font-display font-bold text-4xl lg:text-5xl dark:text-white text-gray-900 mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-base dark:text-white/50 text-black/55 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-14 h-[3px] rounded-full bg-gradient-to-r from-[#00d485] to-transparent" />
    </motion.div>
  )
}