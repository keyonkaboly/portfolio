"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ContactRound, Download, ExternalLink, Mail, Menu, Moon, MoveUpRight, Sun, X } from "lucide-react";
import { useState } from "react";
import { experience, metrics, profile, projects, skillGroups, type Project } from "@/data/portfolioData";

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

function ThemeToggle({ onToggle, isLight }: { onToggle: () => void; isLight: boolean }) {
  return <button className="icon-button" aria-label="Toggle theme" onClick={onToggle}>{isLight ? <Moon size={17} /> : <Sun size={17} />}</button>;
}

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  return <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
    <motion.aside className="case-study" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28 }} onClick={(event) => event.stopPropagation()}>
      <div className="drawer-top"><span className="eyebrow">Case study / {project.id}</span><button className="icon-button" aria-label="Close case study" onClick={onClose}><X size={18} /></button></div>
      <p className={`project-number accent-${project.accent}`}>{project.id}</p>
      <h2>{project.title}</h2><p className="drawer-category">{project.category} · {project.year}</p>
      <div className="drawer-rule" /><p className="drawer-overview">{project.overview}</p>
      <div className="drawer-metrics">{project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
      <h3>Contribution</h3><p className="drawer-overview">Architecture, prototyping, testing, and the small decisions that help a complex system feel simple in use.</p>
      <div className="tag-list">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
      <div className="drawer-links">{project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a>}{project.links.live && <a href={project.links.live} target="_blank" rel="noreferrer">Open project <ArrowUpRight size={16} /></a>}</div>
    </motion.aside>
  </motion.div>;
}

export default function Portfolio() {
  const [isLight, setIsLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return <div className={isLight ? "site light" : "site"}>
    <header className="site-header"><a href="#top" className="wordmark"><span className="wordmark-mark">{profile.initials}</span><span>{profile.name}</span></a><nav className={menuOpen ? "nav-links open" : "nav-links"}>{["Work", "Experience", "About", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<a className="resume-link" href={profile.social.resume}>Resume <MoveUpRight size={14} /></a></nav><div className="header-actions"><ThemeToggle isLight={isLight} onToggle={() => setIsLight(!isLight)} /><button className="mobile-menu icon-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button></div></header>
    <main id="top">
      <section className="hero section-wrap"><div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="status-dot" /> {profile.availability}</p><h1>Building the <em>physical</em><br />future, thoughtfully.</h1><p className="hero-subtitle">I&apos;m {profile.name}, a {profile.title.toLowerCase()} focused on making complex systems clear, useful, and a little more human.</p><div className="hero-actions"><a className="button button-primary" href="#work">See selected work <ArrowUpRight size={17} /></a><a className="button button-secondary" href={profile.social.resume}>Download resume <Download size={16} /></a></div></div><div className="hero-aside"><div className="orbit-graphic"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-core">{profile.initials}</div><span className="orbit-label label-one">01 / design</span><span className="orbit-label label-two">02 / build</span><span className="orbit-label label-three">03 / learn</span></div><p className="side-note">Currently exploring<br /><strong>the space between</strong><br />hardware & software.</p></div></section>
      <section className="metrics-bar section-wrap">{metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}<div className="metrics-note">Scroll to explore <span>↓</span></div></section>
      <section id="work" className="content-section section-wrap"><div className="section-heading"><span className="section-index">01</span><div><p className="eyebrow">Selected work</p><h2>Things I&apos;ve made<br /><em>worth talking about.</em></h2></div><p className="heading-note">A selection of projects across hardware, software, and the spaces in between.</p></div><div className="project-grid">{projects.map((project, index) => <motion.article className={`project-card project-${project.accent}`} key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}><div className="project-top"><span className="project-number">{project.id}</span><span className="project-year">{project.year}</span></div><div className="project-visual"><div className="visual-grid" /><div className={`visual-shape shape-${index + 1}`} /><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="project-metrics">{project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div><div className="project-bottom"><div className="tag-list">{project.tags.slice(0, 3).map((tag) => <Tag key={tag}>{tag}</Tag>)}</div><button className="text-link" onClick={() => setSelectedProject(project)}>View case study <ArrowUpRight size={15} /></button></div></motion.article>)}</div></section>
      <section id="experience" className="content-section experience-section section-wrap"><div className="section-heading compact"><span className="section-index">02</span><div><p className="eyebrow">Experience</p><h2>Where I&apos;ve <em>worked.</em></h2></div></div><div className="experience-list">{experience.map((job) => <article className="experience-item" key={`${job.company}-${job.role}`}><div className="experience-date">{job.startDate}<br />— {job.endDate}</div><div className="experience-main"><div className="experience-title"><h3>{job.role}</h3><span>{job.company}</span></div><p className="location">{job.location}</p><ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="tag-list">{job.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div></div></article>)}</div></section>
      <section id="about" className="content-section about-section section-wrap"><div className="section-heading compact"><span className="section-index">03</span><div><p className="eyebrow">A little about me</p><h2>Curious by nature.<br /><em>Practical by choice.</em></h2></div></div><div className="about-layout"><div className="about-copy"><p className="large-copy">{profile.bio}</p><p>I&apos;m currently finishing my {profile.degree.toLowerCase()} and looking for a team where I can contribute across the full arc of a product: asking better questions, building the thing, and learning from what happens next.</p><div className="highlight-list">{profile.bioHighlights.map((highlight, index) => <div key={highlight}><span>0{index + 1}</span>{highlight}</div>)}</div></div><div className="skills-grid">{skillGroups.map((group) => <div className="skill-group" key={group.category}><h3>{group.category}</h3><div className="tag-list">{group.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}</div></div>)}</div></div></section>
      <section id="contact" className="contact-section section-wrap"><div className="contact-inner"><p className="eyebrow">04 / Contact</p><h2>Have a good problem?<br /><em>Let&apos;s build.</em></h2><p>Tell me what you&apos;re working on, what&apos;s stuck, or what you&apos;re curious about. I&apos;d love to hear it.</p><a className="button button-primary" href={profile.social.email}>Say hello <Mail size={17} /></a></div><div className="contact-mark">✳</div></section>
    </main>
    <footer className="site-footer section-wrap"><span>© {new Date().getFullYear()} {profile.name}</span><div className="footer-links"><a href={profile.social.github} aria-label="GitHub"><ExternalLink size={17} /></a><a href={profile.social.linkedin} aria-label="LinkedIn"><ContactRound size={17} /></a><a href={profile.social.email} aria-label="Email"><Mail size={17} /></a><a href="#top" className="back-top">Back to top ↑</a></div></footer>
    <AnimatePresence>{selectedProject && <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
  </div>;
}
