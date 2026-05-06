import React from 'react'
import { useTheme } from './Theme/Usetheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggle} />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>
// //                 X.com
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App


// import { useState, useEffect, useRef } from "react";

// const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

// const SKILLS = {
//   Languages: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3"],
//   "Frameworks & Libraries": ["ReactJS", "Node.js", "Express.js", "Django", "Mongoose"],
//   Databases: ["MongoDB", "MySQL"],
//   Tools: ["Git", "GitHub", "Figma", "VS Code", "Postman"],
//   Practices: ["Agile / SDLC", "RESTful APIs", "CRUD", "JWT Auth", "Version Control"],
// };

// const EXPERIENCE = [
//   {
//     role: "Full Stack Developer Intern",
//     company: "Why Global Services",
//     location: "Chennai",
//     period: "Oct 2025 – Present",
//     color: "#00f5c4",
//     bullets: [
//       "Designed intuitive UI/UX prototypes in Figma with responsive, user-friendly interfaces.",
//       "Built and deployed full-stack MERN apps with RESTful APIs and secure JWT authentication.",
//       "Collaborated in Agile environments to optimize performance and ensure cross-browser compatibility.",
//     ],
//   },
//   {
//     role: "Software Development Intern",
//     company: "Net Tel Solution India Pvt Ltd",
//     location: "Coimbatore",
//     period: "Apr 2024 – May 2024",
//     color: "#7b61ff",
//     bullets: [
//       "Built internal web apps with Python & Django — auth, form validation, CRUD operations.",
//       "Designed backend logic with database integration ensuring scalability and reliability.",
//       "Participated in Agile sprints, stand-ups, code reviews, unit testing and debugging.",
//     ],
//   },
// ];

// const PROJECTS = [
//   {
//     title: "Angelic Cakes",
//     subtitle: "AI-Powered E-Commerce Platform",
//     period: "Jan 2026",
//     stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
//     color: "#00f5c4",
//     desc: "Full-stack AI-powered cake ordering platform with product browsing, customization, AI-driven recommendations, and seamless order management.",
//     emoji: "🎂",
//   },
//   {
//     title: "Price Compass",
//     subtitle: "E-Commerce Price Comparison & Sentiment Analysis",
//     period: "Mar 2025",
//     stack: ["ReactJS", "Python", "Django", "MySQL"],
//     color: "#ff6b6b",
//     desc: "Responsive web app comparing product prices across platforms with sentiment analysis and a dynamic dashboard for price trends and customer feedback.",
//     emoji: "📊",
//   },
//   {
//     title: "SocialHub",
//     subtitle: "Social Media Network Management",
//     period: "Jan 2023",
//     stack: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
//     color: "#7b61ff",
//     desc: "Dashboard for managing social media profiles with user analytics, engagement monitoring, and content optimization strategy modules.",
//     emoji: "🌐",
//   },
// ];

// const CERTS = [
//   { name: "AI Powered Full Stack Development", org: "Why Tap, Chennai", year: "2026" },
//   { name: "NPTEL: Joy of Computing using Python", org: "NPTEL", year: "2024" },
//   { name: "Web Designing", org: "PSGCAS, Coimbatore", year: "2024" },
//   { name: "Python Programming", org: "Apollo Arcot", year: "2023" },
//   { name: "Publication: Techniques to Prevent Eavesdropping on Wireless Networks", org: "RTIICSM 2024 International Conference", year: "2024" },
// ];

// function useTypewriter(text, speed = 60, start = false) {
//   const [displayed, setDisplayed] = useState("");
//   useEffect(() => {
//     if (!start) return;
//     setDisplayed("");
//     let i = 0;
//     const timer = setInterval(() => {
//       setDisplayed(text.slice(0, i + 1));
//       i++;
//       if (i >= text.length) clearInterval(timer);
//     }, speed);
//     return () => clearInterval(timer);
//   }, [text, speed, start]);
//   return displayed;
// }

// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// function FadeIn({ children, delay = 0, className = "" }) {
//   const [ref, inView] = useInView();
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(32px)",
//         transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// function GlowDot({ color = "#00f5c4" }) {
//   return (
//     <span style={{
//       display: "inline-block", width: 10, height: 10, borderRadius: "50%",
//       background: color, boxShadow: `0 0 8px ${color}, 0 0 20px ${color}40`,
//       marginRight: 10, flexShrink: 0,
//     }} />
//   );
// }

// export default function Portfolio() {
//   const [active, setActive] = useState("About");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const heroTyped = useTypewriter("Full Stack Developer", 80, true);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollTo = (id) => {
//     document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
//     setActive(id);
//     setMenuOpen(false);
//   };

//   const styles = {
//     root: {
//       fontFamily: "'Space Mono', 'Courier New', monospace",
//       background: "#060912",
//       color: "#e2e8f0",
//       minHeight: "100vh",
//     },
//     nav: {
//       position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//       background: scrolled ? "rgba(6,9,18,0.92)" : "transparent",
//       backdropFilter: scrolled ? "blur(16px)" : "none",
//       borderBottom: scrolled ? "1px solid rgba(0,245,196,0.1)" : "none",
//       transition: "all 0.3s ease",
//       padding: "0 2rem",
//     },
//     navInner: {
//       maxWidth: 1100, margin: "0 auto", display: "flex",
//       alignItems: "center", justifyContent: "space-between", height: 64,
//     },
//     logo: {
//       fontFamily: "'Space Mono', monospace",
//       fontSize: "1.1rem", fontWeight: 700,
//       color: "#00f5c4", letterSpacing: 2,
//       cursor: "pointer", textDecoration: "none",
//     },
//     navLinks: { display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 },
//     navLink: (isActive) => ({
//       cursor: "pointer", fontSize: "0.8rem", letterSpacing: "0.1em",
//       color: isActive ? "#00f5c4" : "#94a3b8",
//       textTransform: "uppercase",
//       position: "relative", paddingBottom: 4,
//       transition: "color 0.2s",
//       borderBottom: isActive ? "2px solid #00f5c4" : "2px solid transparent",
//     }),
//     hero: {
//       minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
//       position: "relative", overflow: "hidden",
//       background: "radial-gradient(ellipse at 20% 60%, rgba(0,245,196,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(123,97,255,0.07) 0%, transparent 60%)",
//     },
//     heroContent: { textAlign: "center", zIndex: 2, padding: "2rem" },
//     heroTag: {
//       display: "inline-block", padding: "4px 14px",
//       border: "1px solid rgba(0,245,196,0.4)", borderRadius: 4,
//       color: "#00f5c4", fontSize: "0.75rem", letterSpacing: "0.2em",
//       textTransform: "uppercase", marginBottom: "1.5rem",
//     },
//     heroName: {
//       fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 700,
//       lineHeight: 1.05, margin: "0 0 0.5rem",
//       fontFamily: "'Space Mono', monospace",
//       background: "linear-gradient(135deg, #fff 40%, #00f5c4 100%)",
//       WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//     },
//     heroRole: {
//       fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#94a3b8",
//       marginBottom: "2rem", minHeight: "2rem",
//     },
//     heroCaret: { color: "#00f5c4", animation: "blink 1s step-end infinite" },
//     heroButtons: { display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" },
//     btnPrimary: {
//       padding: "0.7rem 1.8rem", border: "none", borderRadius: 6,
//       background: "#00f5c4", color: "#060912",
//       fontFamily: "'Space Mono', monospace", fontWeight: 700,
//       fontSize: "0.8rem", letterSpacing: "0.1em", cursor: "pointer",
//       transition: "transform 0.2s, box-shadow 0.2s",
//       boxShadow: "0 0 20px rgba(0,245,196,0.3)",
//     },
//     btnOutline: {
//       padding: "0.7rem 1.8rem", border: "1px solid rgba(0,245,196,0.5)",
//       borderRadius: 6, background: "transparent",
//       color: "#00f5c4", fontFamily: "'Space Mono', monospace",
//       fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em",
//       cursor: "pointer", transition: "all 0.2s",
//     },
//     section: { maxWidth: 1100, margin: "0 auto", padding: "6rem 2rem" },
//     sectionLabel: {
//       fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase",
//       color: "#00f5c4", marginBottom: "0.5rem",
//     },
//     sectionTitle: {
//       fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700,
//       margin: "0 0 3rem", color: "#fff",
//     },
//     divider: {
//       width: 60, height: 3, background: "linear-gradient(90deg, #00f5c4, transparent)",
//       marginBottom: "3rem", borderRadius: 2,
//     },
//     card: {
//       background: "rgba(255,255,255,0.03)",
//       border: "1px solid rgba(255,255,255,0.08)",
//       borderRadius: 12, padding: "2rem",
//       transition: "border-color 0.3s, transform 0.3s",
//       cursor: "default",
//     },
//     grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" },
//     grid3: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" },
//     tag: (color = "#00f5c4") => ({
//       display: "inline-block", padding: "2px 10px", borderRadius: 4,
//       border: `1px solid ${color}40`, color: color,
//       fontSize: "0.7rem", letterSpacing: "0.08em",
//       background: `${color}10`, margin: "3px",
//     }),
//     contactLink: {
//       display: "flex", alignItems: "center", gap: 12,
//       padding: "1rem 1.5rem", borderRadius: 10,
//       border: "1px solid rgba(0,245,196,0.15)",
//       background: "rgba(0,245,196,0.03)",
//       color: "#e2e8f0", textDecoration: "none",
//       fontSize: "0.85rem", transition: "all 0.2s",
//     },
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         ::-webkit-scrollbar { width: 6px; }
//         ::-webkit-scrollbar-track { background: #060912; }
//         ::-webkit-scrollbar-thumb { background: #00f5c430; border-radius: 3px; }
//         @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
//         @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
//         @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 0.8; } 100% { transform: scale(1.8); opacity: 0; } }
//         .exp-card:hover { border-color: rgba(0,245,196,0.3) !important; transform: translateX(6px); }
//         .proj-card:hover { border-color: rgba(0,245,196,0.3) !important; transform: translateY(-4px); }
//         .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 32px rgba(0,245,196,0.5) !important; }
//         .btn-outline:hover { background: rgba(0,245,196,0.08) !important; }
//         .contact-link:hover { border-color: rgba(0,245,196,0.5) !important; background: rgba(0,245,196,0.06) !important; transform: translateX(4px); }
//         .grid-bg {
//           position: absolute; inset: 0; z-index: 0;
//           background-image: linear-gradient(rgba(0,245,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,196,0.03) 1px, transparent 1px);
//           background-size: 60px 60px;
//         }
//         .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
//         .hamburger span { width: 22px; height: 2px; background: #00f5c4; display: block; transition: all 0.3s; }
//         @media (max-width: 640px) {
//           .nav-links { display: none !important; }
//           .hamburger { display: flex !important; }
//           .mobile-menu { display: flex !important; }
//         }
//         .mobile-menu {
//           display: none; position: fixed; top: 64px; left: 0; right: 0;
//           background: rgba(6,9,18,0.97); backdrop-filter: blur(20px);
//           flex-direction: column; padding: 1rem 2rem 2rem; gap: 1rem;
//           border-bottom: 1px solid rgba(0,245,196,0.1); z-index: 99;
//         }
//         .skill-pill {
//           display: inline-block; padding: 6px 14px; margin: 4px;
//           border: 1px solid rgba(0,245,196,0.2); border-radius: 20px;
//           font-size: 0.75rem; color: #94a3b8;
//           background: rgba(0,245,196,0.04);
//           transition: all 0.2s; cursor: default;
//         }
//         .skill-pill:hover { border-color: #00f5c4; color: #00f5c4; background: rgba(0,245,196,0.08); }
//       `}</style>

//       <div style={styles.root}>
//         {/* NAV */}
//         <nav style={styles.nav}>
//           <div style={styles.navInner}>
//             <span style={styles.logo} onClick={() => scrollTo("About")}>RK_</span>
//             <ul style={styles.navLinks} className="nav-links">
//               {NAV_LINKS.map(l => (
//                 <li key={l} style={styles.navLink(active === l)} onClick={() => scrollTo(l)}>{l}</li>
//               ))}
//             </ul>
//             <div className="hamburger" onClick={() => setMenuOpen(o => !o)}>
//               <span /><span /><span />
//             </div>
//           </div>
//         </nav>

//         {/* Mobile menu */}
//         {menuOpen && (
//           <div className="mobile-menu">
//             {NAV_LINKS.map(l => (
//               <div key={l} style={{ ...styles.navLink(active === l), fontSize: "0.9rem" }} onClick={() => scrollTo(l)}>{l}</div>
//             ))}
//           </div>
//         )}

//         {/* HERO */}
//         <section style={styles.hero} id="about">
//           <div className="grid-bg" />
//           <div style={styles.heroContent}>
//             <FadeIn delay={0.1}>
//               <div style={styles.heroTag}>📍 Chennai, India</div>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <h1 style={styles.heroName}>Riyaz Khan I</h1>
//             </FadeIn>
//             <FadeIn delay={0.3}>
//               <p style={styles.heroRole}>
//                 {heroTyped}<span style={styles.heroCaret}>|</span>
//               </p>
//             </FadeIn>
//             <FadeIn delay={0.5}>
//               <p style={{ color: "#64748b", maxWidth: 560, margin: "0 auto 2.5rem", fontSize: "0.9rem", lineHeight: 1.8 }}>
//                 MERN Full Stack Developer crafting scalable web applications with clean APIs, 
//                 responsive UIs, and a passion for AI-powered solutions.
//               </p>
//             </FadeIn>
//             <FadeIn delay={0.6}>
//               <div style={styles.heroButtons}>
//                 <button className="btn-primary" style={styles.btnPrimary} onClick={() => scrollTo("Projects")}>
//                   View Projects
//                 </button>
//                 <button className="btn-outline" style={styles.btnOutline} onClick={() => scrollTo("Contact")}>
//                   Get In Touch
//                 </button>
//               </div>
//             </FadeIn>
//           </div>
//         </section>

//         {/* EXPERIENCE */}
//         <section id="experience" style={{ background: "rgba(0,245,196,0.015)" }}>
//           <div style={styles.section}>
//             <FadeIn>
//               <p style={styles.sectionLabel}>// work history</p>
//               <h2 style={styles.sectionTitle}>Experience</h2>
//               <div style={styles.divider} />
//             </FadeIn>
//             <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
//               {EXPERIENCE.map((exp, i) => (
//                 <FadeIn key={i} delay={i * 0.15}>
//                   <div className="exp-card" style={{ ...styles.card, borderLeft: `3px solid ${exp.color}`, transition: "all 0.3s" }}>
//                     <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
//                       <div>
//                         <h3 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: 4 }}>{exp.role}</h3>
//                         <p style={{ color: exp.color, fontSize: "0.85rem", letterSpacing: "0.05em" }}>
//                           {exp.company} <span style={{ color: "#64748b" }}>· {exp.location}</span>
//                         </p>
//                       </div>
//                       <span style={{ ...styles.tag(exp.color), alignSelf: "flex-start", padding: "4px 12px" }}>{exp.period}</span>
//                     </div>
//                     <ul style={{ paddingLeft: 0, listStyle: "none" }}>
//                       {exp.bullets.map((b, j) => (
//                         <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8, color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.7 }}>
//                           <GlowDot color={exp.color} />
//                           {b}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </FadeIn>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* PROJECTS */}
//         <section id="projects">
//           <div style={styles.section}>
//             <FadeIn>
//               <p style={styles.sectionLabel}>// what i've built</p>
//               <h2 style={styles.sectionTitle}>Projects</h2>
//               <div style={styles.divider} />
//             </FadeIn>
//             <div style={styles.grid3}>
//               {PROJECTS.map((p, i) => (
//                 <FadeIn key={i} delay={i * 0.12}>
//                   <div className="proj-card" style={{ ...styles.card, transition: "all 0.3s", position: "relative", overflow: "hidden" }}>
//                     <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, borderRadius: "50%", background: `${p.color}08`, transform: "translate(30%, -30%)" }} />
//                     <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{p.emoji}</div>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
//                       <h3 style={{ color: "#fff", fontSize: "1.1rem" }}>{p.title}</h3>
//                       <span style={{ ...styles.tag(p.color), fontSize: "0.65rem" }}>{p.period}</span>
//                     </div>
//                     <p style={{ color: p.color, fontSize: "0.75rem", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>{p.subtitle}</p>
//                     <p style={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{p.desc}</p>
//                     <div>
//                       {p.stack.map(s => <span key={s} style={styles.tag(p.color)}>{s}</span>)}
//                     </div>
//                   </div>
//                 </FadeIn>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* SKILLS */}
//         <section id="skills" style={{ background: "rgba(123,97,255,0.015)" }}>
//           <div style={styles.section}>
//             <FadeIn>
//               <p style={styles.sectionLabel}>// tools & technologies</p>
//               <h2 style={styles.sectionTitle}>Skills</h2>
//               <div style={styles.divider} />
//             </FadeIn>
//             <div style={styles.grid2}>
//               {Object.entries(SKILLS).map(([cat, items], i) => (
//                 <FadeIn key={cat} delay={i * 0.1}>
//                   <div style={styles.card}>
//                     <h4 style={{ color: "#00f5c4", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>{cat}</h4>
//                     <div>
//                       {items.map(s => <span key={s} className="skill-pill">{s}</span>)}
//                     </div>
//                   </div>
//                 </FadeIn>
//               ))}
//             </div>

//             {/* Education */}
//             <FadeIn delay={0.3}>
//               <div style={{ marginTop: "4rem" }}>
//                 <p style={styles.sectionLabel}>// academia</p>
//                 <h3 style={{ fontSize: "1.6rem", color: "#fff", margin: "0.5rem 0 2rem" }}>Education</h3>
//                 <div style={styles.grid2}>
//                   {[
//                     { degree: "Master of Computer Applications", school: "PSG College of Arts & Science", location: "Coimbatore", period: "2023 – 2025", cgpa: "8.4" },
//                     { degree: "Bachelor of Computer Applications", school: "C. Abdul Hakeem College", location: "Vellore", period: "2020 – 2023", cgpa: "7.4" },
//                   ].map((edu, i) => (
//                     <div key={i} style={{ ...styles.card, borderTop: "3px solid #7b61ff" }}>
//                       <p style={{ color: "#7b61ff", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{edu.period}</p>
//                       <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "0.3rem" }}>{edu.degree}</h4>
//                       <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>{edu.school}</p>
//                       <p style={{ color: "#64748b", fontSize: "0.75rem", marginBottom: "0.75rem" }}>{edu.location}</p>
//                       <span style={styles.tag("#7b61ff")}>CGPA: {edu.cgpa}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>

//             {/* Certifications */}
//             <FadeIn delay={0.4}>
//               <div style={{ marginTop: "4rem" }}>
//                 <p style={styles.sectionLabel}>// achievements</p>
//                 <h3 style={{ fontSize: "1.6rem", color: "#fff", margin: "0.5rem 0 2rem" }}>Certifications & Publications</h3>
//                 <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
//                   {CERTS.map((c, i) => (
//                     <div key={i} style={{ ...styles.card, display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.5rem" }}>
//                       <span style={{ color: "#00f5c4", fontSize: "1rem", flexShrink: 0 }}>✦</span>
//                       <div>
//                         <p style={{ color: "#e2e8f0", fontSize: "0.85rem" }}>{c.name}</p>
//                         <p style={{ color: "#64748b", fontSize: "0.75rem" }}>{c.org} · {c.year}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//           </div>
//         </section>

//         {/* CONTACT */}
//         <section id="contact">
//           <div style={{ ...styles.section, textAlign: "center" }}>
//             <FadeIn>
//               <p style={styles.sectionLabel}>// let's connect</p>
//               <h2 style={styles.sectionTitle}>Get In Touch</h2>
//               <div style={{ ...styles.divider, margin: "0 auto 3rem" }} />
//               <p style={{ color: "#94a3b8", maxWidth: 480, margin: "0 auto 3rem", fontSize: "0.9rem", lineHeight: 1.8 }}>
//                 Open to full-time roles, freelance projects, or just a good tech conversation. 
//                 Drop a message — I respond fast!
//               </p>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 440, margin: "0 auto" }}>
//                 <a className="contact-link" style={styles.contactLink} href="mailto:riyazzkhan2020@gmail.com">
//                   <span style={{ fontSize: "1.2rem" }}>✉️</span>
//                   <div style={{ textAlign: "left" }}>
//                     <p style={{ fontSize: "0.7rem", color: "#64748b", letterSpacing: "0.1em" }}>EMAIL</p>
//                     <p>riyazzkhan2020@gmail.com</p>
//                   </div>
//                 </a>
//                 <a className="contact-link" style={styles.contactLink} href="tel:+919361737613">
//                   <span style={{ fontSize: "1.2rem" }}>📱</span>
//                   <div style={{ textAlign: "left" }}>
//                     <p style={{ fontSize: "0.7rem", color: "#64748b", letterSpacing: "0.1em" }}>PHONE</p>
//                     <p>+91 9361737613</p>
//                   </div>
//                 </a>
//                 <a className="contact-link" style={styles.contactLink} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                   <span style={{ fontSize: "1.2rem" }}>💼</span>
//                   <div style={{ textAlign: "left" }}>
//                     <p style={{ fontSize: "0.7rem", color: "#64748b", letterSpacing: "0.1em" }}>LINKEDIN</p>
//                     <p>linkedin.com/in/riyazkhan</p>
//                   </div>
//                 </a>
//                 <a className="contact-link" style={styles.contactLink} href="https://github.com" target="_blank" rel="noopener noreferrer">
//                   <span style={{ fontSize: "1.2rem" }}>🐙</span>
//                   <div style={{ textAlign: "left" }}>
//                     <p style={{ fontSize: "0.7rem", color: "#64748b", letterSpacing: "0.1em" }}>GITHUB</p>
//                     <p>github.com/riyazkhan</p>
//                   </div>
//                 </a>
//               </div>
//             </FadeIn>
//           </div>
//         </section>

//         {/* FOOTER */}
//         <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "2rem", textAlign: "center" }}>
//           <p style={{ color: "#334155", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
//             DESIGNED & BUILT BY <span style={{ color: "#00f5c4" }}>RIYAZ KHAN I</span> · 2026
//           </p>
//         </footer>
//       </div>
//     </>
//   );
// }

