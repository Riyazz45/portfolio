// import { motion } from 'framer-motion'
// import { TypeAnimation } from 'react-type-animation'
// import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react'
// import { STATS } from '../data/data'

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
// }
// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
// }

// export default function Hero() {
//   return (
//     <section
//       id="about"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
//     >
//       {/* Background layers */}
//       <div className="absolute inset-0 dark:bg-grid-dark bg-grid-light" />
//       <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-transparent dark:via-[#080b0f]/50 dark:to-[#080b0f] bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />

//       {/* Ambient glows */}
//       <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00d485]/5 blur-[120px] dark:opacity-100 opacity-40 pointer-events-none" />
//       <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px] dark:opacity-100 opacity-30 pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
//           {/* Left: Text */}
//           <motion.div variants={container} initial="hidden" animate="show">
//             <motion.div variants={item} className="flex items-center gap-2 mb-6">
//               <div className="flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-[#00d485]/10 bg-[#00d485]/10 border dark:border-[#00d485]/20 border-[#00d485]/30">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d485] opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d485]" />
//                 </span>
//                 <span className="text-[#00d485] text-xs font-mono font-medium tracking-wider">Available for work</span>
//               </div>
//             </motion.div>

//             <motion.div variants={item} className="mb-3 flex items-center gap-2 dark:text-white/40 text-black/40 text-sm font-body">
//               <MapPin size={14} />
//               <span>Ekkatuthangal, Chennai, India</span>
//             </motion.div>

//             <motion.h1 variants={item} className="font-display font-bold leading-[1.05] mb-4">
//               <span className="dark:text-white text-gray-900 text-5xl lg:text-[5.5rem] block">Riyaz</span>
//               <span className="dark:text-white text-gray-900 text-5xl lg:text-[5.5rem] block">Khan <span className="text-gradient">I</span></span>
//             </motion.h1>

//             <motion.div variants={item} className="mb-6">
//               <div className="flex items-center gap-3 text-xl lg:text-2xl font-body font-light dark:text-white/60 text-black/60">
//                 <span className="text-[#00d485] font-mono text-lg">→</span>
//                 <TypeAnimation
//                   sequence={[
//                     'Full Stack Developer', 2000,
//                     'MERN Specialist', 2000,
//                     'React Engineer', 2000,
//                     'API Architect', 2000,
//                     'Problem Solver', 2000,
//                   ]}
//                   wrapper="span"
//                   repeat={Infinity}
//                   cursor={true}
//                 />
//               </div>
//             </motion.div>

//             <motion.p variants={item} className="font-body text-base dark:text-white/50 text-black/60 leading-relaxed max-w-lg mb-10">
//               Crafting scalable web applications with clean code, performant APIs, and delightful 
//               user experiences. MCA Graduate · CGPA 8.4 · Passionate about AI-powered solutions.
//             </motion.p>

//             <motion.div variants={item} className="flex flex-wrap gap-3 mb-12">
//               <motion.a
//                 href="mailto:riyazzkhan2020@gmail.com"
//                 whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(0,212,133,0.35)' }}
//                 whileTap={{ scale: 0.97 }}
//                 className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#00d485] text-white font-body font-semibold text-sm transition-all shadow-glow-sm"
//               >
//                 <Mail size={16} />
//                 Let's Talk
//               </motion.a>
//               <motion.a
//                 href="#"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="flex items-center gap-2 px-6 py-3 rounded-2xl dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/8 dark:text-white text-black font-body font-medium text-sm transition-all border dark:border-white/10 border-black/10"
//               >
//                 <Download size={16} />
//                 Resume
//               </motion.a>
//             </motion.div>

//             {/* Social icons */}
//             <motion.div variants={item} className="flex items-center gap-4">
//               {[
//                 { icon: <Github size={18} />, href: 'https://github.com', label: 'GitHub' },
//                 { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
//                 { icon: <Mail size={18} />, href: 'mailto:riyazzkhan2020@gmail.com', label: 'Email' },
//               ].map(({ icon, href, label }) => (
//                 <motion.a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   aria-label={label}
//                   className="w-10 h-10 rounded-xl dark:bg-white/5 bg-black/5 dark:hover:bg-[#00d485]/15 hover:bg-[#00d485]/10 dark:text-white/50 text-black/50 dark:hover:text-[#00d485] hover:text-[#00d485] flex items-center justify-center transition-all border dark:border-white/5 border-black/5"
//                 >
//                   {icon}
//                 </motion.a>
//               ))}
//               <div className="h-px flex-1 dark:bg-white/5 bg-black/10 max-w-[80px]" />
//             </motion.div>
//           </motion.div>

//           {/* Right: Image + decorative */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, x: 40 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
//             className="hidden lg:flex items-center justify-center"
//           >
//             <div className="relative">
//               {/* Rotating ring */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//                 className="absolute inset-[-24px] rounded-full border border-dashed dark:border-[#00d485]/20 border-[#00d485]/30"
//               />
//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
//                 className="absolute inset-[-48px] rounded-full border border-dashed dark:border-white/5 border-black/5"
//               />

//               {/* Glow behind image */}
//               <div className="absolute inset-0 rounded-[2rem] bg-[#00d485]/15 blur-3xl scale-110" />

//               {/* Profile image container */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
//                 className="relative w-72 h-72 lg:w-[360px] lg:h-[360px] rounded-[2rem] overflow-hidden dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 shadow-2xl"
//               >
//                 {/* Image placeholder — replace src with your actual photo */}
//                 <img
//                   src="/profile.jpg"
//                   alt="Riyaz Khan I"
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.target.style.display = 'none'
//                     e.target.nextSibling.style.display = 'flex'
//                   }}
//                 />
//                 {/* Fallback placeholder shown when no image */}
//                 <div
//                   className="absolute inset-0 flex-col items-center justify-center gap-4"
//                   style={{ display: 'flex' }}
//                 >
//                   <div className="w-24 h-24 rounded-full bg-[#00d485]/15 border-2 border-[#00d485]/30 flex items-center justify-center">
//                     <span className="text-5xl select-none">👤</span>
//                   </div>
//                   <div className="text-center px-4">
//                     <p className="font-display font-bold text-xl dark:text-white text-black">Riyaz Khan I</p>
//                     <p className="text-sm font-body dark:text-white/40 text-black/40 mt-1">Add your photo as</p>
//                     <p className="text-xs font-mono text-[#00d485] mt-0.5">/public/profile.jpg</p>
//                   </div>
//                 </div>

//                 {/* Overlay gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
//               </motion.div>

//               {/* Floating badge: MCA */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 1, type: 'spring', bounce: 0.5 }}
//                 className="absolute -bottom-4 -left-6 dark:bg-[#0e1117] bg-white border dark:border-white/10 border-black/10 rounded-2xl px-4 py-3 shadow-xl"
//               >
//                 <p className="text-xs font-mono dark:text-white/40 text-black/40">CGPA</p>
//                 <p className="text-2xl font-display font-bold text-[#00d485]">8.4</p>
//                 <p className="text-xs font-body dark:text-white/50 text-black/50">MCA Grad</p>
//               </motion.div>

//               {/* Floating badge: Stack */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 1.2, type: 'spring', bounce: 0.5 }}
//                 className="absolute -top-4 -right-6 dark:bg-[#0e1117] bg-white border dark:border-white/10 border-black/10 rounded-2xl px-4 py-3 shadow-xl"
//               >
//                 <p className="text-xs font-mono dark:text-white/40 text-black/40">Stack</p>
//                 <p className="text-sm font-display font-bold dark:text-white text-black">MERN</p>
//                 <p className="text-xs font-body dark:text-white/50 text-black/50">+ Python</p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Stats Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
//           className="mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
//         >
//           {STATS.map(({ value, label }, i) => (
//             <motion.div
//               key={label}
//               whileHover={{ scale: 1.02 }}
//               className="relative rounded-2xl dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/5 border-black/5 p-5 text-center overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-[#00d485]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
//               <p className="font-display font-bold text-3xl text-gradient mb-1">{value}</p>
//               <p className="text-xs font-body dark:text-white/40 text-black/50 tracking-wide uppercase">{label}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//           className="flex justify-center mt-16"
//         >
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
//             className="flex flex-col items-center gap-2 dark:text-white/20 text-black/30 cursor-pointer"
//             onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
//           >
//             <span className="text-xs font-mono tracking-widest">SCROLL</span>
//             <ArrowDown size={16} />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }





import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react'
import { STATS } from '../data/data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  // Add state to track if the profile image fails to load
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 dark:bg-grid-dark bg-grid-light" />
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-transparent dark:via-[#080b0f]/50 dark:to-[#080b0f] bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00d485]/5 blur-[120px] dark:opacity-100 opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px] dark:opacity-100 opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-[#00d485]/10 bg-[#00d485]/10 border dark:border-[#00d485]/20 border-[#00d485]/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d485] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d485]" />
                </span>
                <span className="text-[#00d485] text-xs font-mono font-medium tracking-wider">Available for work</span>
              </div>
            </motion.div>

            <motion.div variants={item} className="mb-3 flex items-center gap-2 dark:text-white/40 text-black/40 text-sm font-body">
              <MapPin size={14} />
              <span>Ekkatuthangal, Chennai, India</span>
            </motion.div>

            <motion.h1 variants={item} className="font-display font-bold leading-[1.05] mb-4">
              <span className="dark:text-white text-gray-900 text-5xl lg:text-[5.5rem] block">Riyaz</span>
              <span className="dark:text-white text-gray-900 text-5xl lg:text-[5.5rem] block">Khan <span className="text-gradient">I</span></span>
            </motion.h1>

            <motion.div variants={item} className="mb-6">
              <div className="flex items-center gap-3 text-xl lg:text-2xl font-body font-light dark:text-white/60 text-black/60">
                <span className="text-[#00d485] font-mono text-lg">→</span>
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer', 2000,
                    'MERN Specialist', 2000,
                    'React Engineer', 2000,
                    'API Architect', 2000,
                    'Problem Solver', 2000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  cursor={true}
                />
              </div>
            </motion.div>

            <motion.p variants={item} className="font-body text-base dark:text-white/50 text-black/60 leading-relaxed max-w-lg mb-10">
              Crafting scalable web applications with clean code, performant APIs, and delightful 
              user experiences. MCA Graduate · CGPA 8.4 · Passionate about AI-powered solutions.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-12">
              <motion.a
                href="mailto:riyazzkhan2020@gmail.com"
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(0,212,133,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#00d485] text-white font-body font-semibold text-sm transition-all shadow-glow-sm"
              >
                <Mail size={16} />
                Let's Talk
              </motion.a>
              <motion.a
                href="./RiyazfullstackCv.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/8 dark:text-white text-black font-body font-medium text-sm transition-all border dark:border-white/10 border-black/10"
              >
                <Download size={16} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={item} className="flex items-center gap-4">
              {[
                { icon: <Github size={18} />, href: 'https://github.com/Riyazz45', label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/riyaz-khan-i-0a908b293', label: 'LinkedIn' },
                { icon: <Mail size={18} />, href: 'mailto:riyazzkhan2020@gmail.com', label: 'Email' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl dark:bg-white/5 bg-black/5 dark:hover:bg-[#00d485]/15 hover:bg-[#00d485]/10 dark:text-white/50 text-black/50 dark:hover:text-[#00d485] hover:text-[#00d485] flex items-center justify-center transition-all border dark:border-white/5 border-black/5"
                >
                  {icon}
                </motion.a>
              ))}
              <div className="h-px flex-1 dark:bg-white/5 bg-black/10 max-w-[80px]" />
            </motion.div>
          </motion.div>

          {/* Right: Image + decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-24px] rounded-full border border-dashed dark:border-[#00d485]/20 border-[#00d485]/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-48px] rounded-full border border-dashed dark:border-white/5 border-black/5"
              />

              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-[2rem] bg-[#00d485]/15 blur-3xl scale-110" />

              {/* Profile image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-72 lg:w-[360px] lg:h-[360px] rounded-[2rem] overflow-hidden dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 shadow-2xl"
              >
                
                {/* Real Image */}
                {!imageError && (
                  <img
                    src="/profile.jpg"
                    alt="Riyaz Khan I"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                )}

                {/* Fallback placeholder shown when no image or error */}
                {imageError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/5">
                    <div className="w-24 h-24 rounded-full bg-[#00d485]/15 border-2 border-[#00d485]/30 flex items-center justify-center">
                      <span className="text-5xl select-none">👤</span>
                    </div>
                    <div className="text-center px-4">
                      <p className="font-display font-bold text-xl dark:text-white text-black">Riyaz Khan I</p>
                      <p className="text-sm font-body dark:text-white/40 text-black/40 mt-1">Add your photo as</p>
                      <p className="text-xs font-mono text-[#00d485] mt-0.5">/public/profile.jpg</p>
                    </div>
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating badge: MCA */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring', bounce: 0.5 }}
                className="absolute -bottom-4 -left-6 dark:bg-[#0e1117] bg-white border dark:border-white/10 border-black/10 rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs font-mono dark:text-white/40 text-black/40">CGPA</p>
                <p className="text-2xl font-display font-bold text-[#00d485]">8.4</p>
                <p className="text-xs font-body dark:text-white/50 text-black/50">MCA Grad</p>
              </motion.div>

              {/* Floating badge: Stack */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: 'spring', bounce: 0.5 }}
                className="absolute -top-4 -right-6 dark:bg-[#0e1117] bg-white border dark:border-white/10 border-black/10 rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs font-mono dark:text-white/40 text-black/40">Stack</p>
                <p className="text-sm font-display font-bold dark:text-white text-black">MERN</p>
                <p className="text-xs font-body dark:text-white/50 text-black/50">+ Python</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/5 border-black/5 p-5 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d485]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <p className="font-display font-bold text-3xl text-gradient mb-1">{value}</p>
              <p className="text-xs font-body dark:text-white/40 text-black/50 tracking-wide uppercase">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 dark:text-white/20 text-black/30 cursor-pointer"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}