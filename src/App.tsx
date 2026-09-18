import { useState } from "react";

const skills = [
  ["React JS","bi-braces","blue"],["TypeScript","bi-filetype-tsx","purple"],["SPFx","bi-microsoft","orange"],
  ["SharePoint","bi-diagram-3","green"],["Bootstrap","bi-bootstrap","pink"],["SCSS","bi-palette","red"],
  ["WordPress","bi-wordpress","blue"],["JavaScript","bi-filetype-js","yellow"],["React Native","bi-phone","purple"]
];

const projects = [
  { title:"BPCL Event Management", desc:"Enterprise event management experience with responsive React and SPFx interfaces.", stack:"React · TypeScript · SPFx", icon:"bi-calendar2-event" },
  { title:"Corporate Web Interfaces", desc:"Clean, responsive business interfaces designed for desktop, tablet and mobile.", stack:"React · Bootstrap · SCSS", icon:"bi-window-stack" },
  { title:"WordPress Websites", desc:"Performance-focused WordPress websites with reusable layouts and custom styling.", stack:"WordPress · Elementor · PHP", icon:"bi-wordpress" }
];

export default function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [dark,setDark]=useState(false);
  return <div className={`portfolio ${dark?"dark":""}`}>
    <nav className="portfolio-nav">
      <div className="container nav-inner">
        <a className="brand" href="#home"><span className="brand-mark">J</span><span>Jeyaprakash<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)}><i className="bi bi-list"/></button>
        <div className={`nav-links ${menuOpen?"open":""}`}>
          {["About","Skills","Projects","Contact"].map(x=><a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{x}</a>)}
          <button className="theme-btn" onClick={()=>setDark(!dark)} aria-label="Toggle theme"><i className={`bi ${dark?"bi-sun":"bi-moon-stars"}`}/></button>
        </div>
      </div>
    </nav>

    <header id="home" className="hero">
      <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability"><span/> AVAILABLE FOR FRONT-END PROJECTS</div>
          <h1>Building <span>modern web experiences</span> with React & SharePoint.</h1>
          <p>I’m Jeyaprakash, a React JS and SharePoint developer focused on responsive enterprise interfaces, reusable components and polished user experiences.</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-btn">Explore my work <i className="bi bi-arrow-up-right"/></a>
            <a href="#contact" className="secondary-btn">Let's connect <i className="bi bi-arrow-down"/></a>
          </div>
          <div className="hero-meta"><span><i className="bi bi-code-slash"/> React · TypeScript</span><span><i className="bi bi-building"/> SharePoint · SPFx</span><span><i className="bi bi-phone"/> Responsive UI</span></div>
        </div>
        <div className="hero-visual">
          <div className="code-card">
            <div className="window-bar"><span/><span/><span/><b>portfolio.tsx</b></div>
            <div className="code-body">
              <div><em>const</em> developer = {"{"}</div>
              <div className="indent"><label>name:</label> <strong>"Jeyaprakash"</strong>,</div>
              <div className="indent"><label>role:</label> <strong>"React Developer"</strong>,</div>
              <div className="indent"><label>stack:</label> [</div>
              <div className="indent2">"React", "TypeScript",</div>
              <div className="indent2">"SPFx", "SharePoint"</div>
              <div className="indent">]</div>
              <div>{"}"}</div>
              <div className="cursor">_</div>
            </div>
            <div className="floating-badge"><i className="bi bi-check-circle-fill"/> Responsive by design</div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section id="about" className="section about-section"><div className="container two-col">
        <div className="section-label">01 — ABOUT</div>
        <div><h2>Turning requirements into <span>clean, usable interfaces.</span></h2><p className="large-copy">I develop web interfaces for enterprise and business applications, combining React JS, TypeScript, Bootstrap and SharePoint to create maintainable and responsive experiences.</p><div className="about-cards"><div><strong>03+</strong><span>Years building web experiences</span></div><div><strong>09+</strong><span>Core technologies in my stack</span></div><div><strong>100%</strong><span>Responsive-first approach</span></div></div></div>
      </div></section>

      <section id="skills" className="section skills-section"><div className="container"><div className="section-label">02 — SKILLS</div><div className="section-head"><div><h2>Tools I work with.</h2><p>Focused on modern front-end development and enterprise web platforms.</p></div></div><div className="skills-grid">{skills.map(([name,icon,tone])=><div className="skill-card" key={name}><span className={`skill-icon ${tone}`}><i className={`bi ${icon}`}/></span><strong>{name}</strong><i className="bi bi-arrow-up-right"/></div>)}</div></div></section>

      <section id="projects" className="section projects-section"><div className="container"><div className="section-label">03 — SELECTED WORK</div><div className="section-head"><div><h2>Projects that showcase my craft.</h2><p>A few examples of the interfaces and applications I work on.</p></div></div><div className="projects-grid">{projects.map((p,i)=><article className={`project-card project-${i+1}`} key={p.title}><div className="project-top"><span className="project-number">0{i+1}</span><span className="project-icon"><i className={`bi ${p.icon}`}/></span></div><div className="project-content"><div className="project-stack">{p.stack}</div><h3>{p.title}</h3><p>{p.desc}</p><button>View case study <i className="bi bi-arrow-up-right"/></button></div></article>)}</div></div></section>

      <section id="contact" className="contact-section"><div className="container contact-inner"><div className="section-label">04 — CONTACT</div><h2>Have a project in mind?</h2><p>Let’s build something useful, responsive and polished.</p><a href="mailto:hello@example.com" className="contact-btn"><i className="bi bi-envelope"/> Start a conversation</a><div className="contact-links"><span><i className="bi bi-geo-alt"/> India</span><span><i className="bi bi-code-square"/> React · SPFx · WordPress</span></div></div></section>
    </main>
    <footer><div className="container footer-inner"><span>© 2026 Jeyaprakash</span><span>Designed & built with React + TypeScript</span></div></footer>
  </div>;
}
