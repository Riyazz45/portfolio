import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/data'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('About')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const label = id.charAt(0).toUpperCase() + id.slice(1)
            setActive(label)
          }
        })
      },
      { threshold: 0.4 }
    )
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'dark:bg-[#080b0f]/80 bg-white/80 backdrop-blur-xl border-b dark:border-white/5 border-black/5 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('about')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-display font-bold text-xl tracking-tight"
          >
            <span className="text-gradient">RK</span>
            <span className="dark:text-white/30 text-black/25 font-mono text-base">.dev</span>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`relative px-4 py-2 text-sm font-body font-medium rounded-lg transition-colors duration-200 ${
                  active === link
                    ? 'text-[#00d485]'
                    : 'dark:text-white/50 text-black/50 dark:hover:text-white hover:text-black'
                }`}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 dark:bg-white/5 bg-black/5 rounded-lg"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 rounded-xl dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 flex items-center justify-center transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === 'dark' ? (
                    <Sun size={17} className="text-amber-400" />
                  ) : (
                    <Moon size={17} className="dark:text-white/70 text-black/70" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.a
              href="mailto:riyazzkhan2020@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-body font-medium bg-[#00d485] text-white hover:bg-[#00b870] transition-colors shadow-glow-sm"
            >
              Hire Me
            </motion.a>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden w-10 h-10 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-40 dark:bg-[#080b0f]/95 bg-white/95 backdrop-blur-xl border-b dark:border-white/5 border-black/5 p-6 flex flex-col gap-2"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-body font-medium transition-colors ${
                  active === link
                    ? 'text-[#00d485] dark:bg-white/5 bg-black/5'
                    : 'dark:text-white/60 text-black/60'
                }`}
              >
                {link}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="mailto:riyazzkhan2020@gmail.com"
              className="mt-2 px-4 py-3 rounded-xl text-sm font-body font-medium bg-[#00d485] text-white text-center"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}