import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const PROJECTS = [
  {
    id: 'coda',
    title: 'Coda',
    year: 2026,
    featured: true,
    brief: 'audit-prep docs from static code analysis',
    description: 'A suite of Claude Code skills that statically inspect a repository and auto-generate auditor-ready draft documentation for SOC 2, HIPAA, and PCI-DSS. Reads application code to locate auth enforcement, data flows, and cryptography — mapping specific lines to control criteria to produce traceable, evidence-backed control narratives.',
    tools: ['Claude Code', 'Static Analysis', 'SOC 2', 'HIPAA', 'PCI-DSS'],
    category: 'ai',
  },
  {
    id: 'satellite',
    title: 'Satellite',
    year: 2026,
    featured: true,
    brief: 'multi-agent investment analysis Claude Skill',
    description: 'Self-contained Claude Skill orchestrating a multi-agent investment workflow. Two opposing strategy engines — asymmetric-swing and quality-compounder — coordinate 11 specialized subagents with matched evaluation rubrics, screening 20–30 candidates to 8–12 finalists per run. Built with a 3-tier degradation-tolerant data layer and a strict pass/fail validation harness.',
    tools: ['Claude Code', 'Multi-agent', 'MCP', 'Financial Analysis'],
    category: 'ai',
  },
  {
    id: 'roadcv',
    title: 'RoadCV',
    year: 2022,
    featured: false,
    brief: 'YOLO car detection for self-driving vehicles',
    description: 'Car detection system identifying and drawing bounding boxes around 80+ object classes for self-driving vehicle applications.',
    tools: ['YOLO', 'TensorFlow', 'Python'],
    category: 'ai',
  },
  {
    id: 'kabo',
    title: 'Kabo',
    year: 2021,
    featured: false,
    brief: 'karaoke Discord bot with real-time pitch scoring',
    description: 'Discord bot simulating karaoke with real-time speech recognition and pitch and lyrical accuracy scoring. 5 ms processing latency, 50,000+ songs supported.',
    tools: ['Python', 'Azure', 'JavaScript', 'Node.js', 'Discord.js'],
    github: 'https://github.com/SherRao/HackTheNorth2020-',
    devpost: 'https://devpost.com/software/karaokebot',
    category: 'software',
  },
  {
    id: 'ical',
    title: 'iCal',
    year: 2021,
    featured: false,
    brief: 'image-to-Google Calendar event parser',
    description: 'Web app that deciphers images into Google Calendar events using Cloud Vision API and OCR. Takes photos of event posters to create calendar entries with the correct title, date, and description.',
    tools: ['Google Cloud Vision', 'Google Calendar API', 'JavaScript', 'Node.js'],
    github: 'https://github.com/AustinLuu/yuHacks',
    devpost: 'https://devpost.com/software/image-to-google-calendar-event',
    category: 'software',
  },
  {
    id: 'machine-shop',
    title: 'Portable Machine Shop',
    year: 2021,
    featured: false,
    brief: 'milling, turning, and drilling in a pickup truck bed',
    description: 'Undergraduate capstone project. Custom cabinet carrying a CNC mill and lathe fits in the bed of a medium-to-large pickup truck, with stowable tool shelving and a built-in winch and ramp for field machining of small steel and aluminum parts.',
    tools: ['SolidWorks', 'FEA', 'FMEA'],
    category: 'hardware',
  },
  {
    id: 'personal-website',
    title: 'Personal Website',
    year: 2021,
    featured: false,
    brief: "the thing you're on right now",
    description: 'Portfolio built with React, Next.js, Chakra UI, SASS, and Framer Motion.',
    tools: ['React.js', 'Next.js', 'Chakra UI', 'SASS', 'Framer Motion'],
    github: 'https://github.com/AustinLuu/austinluu.me',
    website: 'https://austinluu.me/',
    category: 'software',
  },
  {
    id: 'itest',
    title: 'iTest',
    year: 2020,
    featured: false,
    brief: 'helmet factor-of-safety testing machine',
    description: 'Impacts helmets at 28 m/s with 60 N force across six locations using three pneumatic piston end-effector mechanisms. Designed custom cam followers and pawl-and-ratchet mechanisms, simulated in SolidWorks motion analysis.',
    tools: ['SolidWorks', 'Ladder Logic', 'PLC'],
    category: 'hardware',
  },
  {
    id: 'mi-melons',
    title: 'Mi Melons',
    year: 2019,
    featured: false,
    brief: 'iOS guided breast examination app',
    description: 'Guides women through a monthly breast exam to check for lumps and irregularities. Tracks symptoms across exams with a conversational Voiceflow interface and ResNet50-backed image analysis.',
    tools: ['iOS', 'Swift', 'Figma', 'Voiceflow', 'ResNet50'],
    github: 'https://github.com/AustinLuu/mi-melons',
    devpost: 'https://devpost.com/software/mi-melons',
    category: 'software',
  },
  {
    id: 'rukpop',
    title: 'RUKPOP',
    year: 2019,
    featured: false,
    brief: "Ryerson's K-pop club website",
    description: "Designed and built the static website for Ryerson University's K-pop student organization, covering sponsorship info, events, and communication. Vanilla JavaScript, CSS, and HTML hosted on Bluehost.",
    tools: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/AustinLuu/rukpop',
    category: 'software',
  },
  {
    id: 'drone-swarm',
    title: 'Parallel Drone Swarm',
    year: 2018,
    featured: false,
    brief: 'IoT disaster rescue drone network',
    description: 'Two autonomous IoT ground drones communicating via MQTT, collecting thermal, moisture, and relative-location data to produce 2D environment maps for search-and-rescue planning.',
    tools: ['Python', 'C++', 'MQTT', 'Arduino', 'SolidWorks', '3D Printing'],
    devpost: 'https://devpost.com/software/drone-swarm',
    category: 'hardware',
  },
  {
    id: 'bionic-arm',
    title: 'BioArm',
    year: 2018,
    featured: false,
    brief: '15 degree-of-freedom prosthetic arm under $150',
    description: 'Servo-driven bionic arm with 15 DOF (3 per finger). Built under $150 as a proof of concept for accessible prosthetics with 5 lb lifting capacity.',
    tools: ['C++', 'Arduino', 'SolidWorks', 'ANSYS', 'FEA', '3D Printing'],
    category: 'hardware',
  },
  {
    id: 'greeco',
    title: 'Greeco',
    year: 2018,
    featured: false,
    brief: 'crowd-sourced community cleanliness map',
    description: 'Web app where users rate locations to build a cleanliness overlay of the Greater Toronto Area, surfacing problem zones for community cleanup events.',
    tools: ['Python', 'Django', 'JavaScript', 'Google Maps API'],
    github: 'https://github.com/AustinLuu/waste_detect',
    category: 'software',
  },
  {
    id: 'vision-motion',
    title: 'Vision Motion',
    year: 2017,
    featured: false,
    brief: 'kinematic motion tracker, 2,190+ Play Store installs',
    description: 'Android app tracking and graphing projectile motion of objects at 60 fps with 98.4% tracking accuracy. Renders downloadable CSV graphs of position, velocity, and acceleration.',
    tools: ['Android', 'OpenCV', 'Java'],
    devpost: 'https://devpost.com/software/visionmotion',
    website: 'https://visionmotion.williamqin.com/',
    category: 'software',
  },
  {
    id: 'ufboat',
    title: 'UFbOat',
    year: 2017,
    featured: false,
    brief: 'enclosed lifeboat for 8 adults',
    description: 'Enclosed lifeboat for emergency life support in the Caribbean, designed for medium-sized boats. Capacity: 8 adults. FEA-validated hull and structural analysis.',
    tools: ['SolidWorks', 'FMEA'],
    category: 'hardware',
  },
]

const FILTER_LABELS = { all: 'All', software: 'Software', hardware: 'Hardware', ai: 'AI' }

const ProjectLinks = ({ github, devpost, website }) => {
  if (!github && !devpost && !website) return null
  return (
    <ul className="sub-nav" style={{ marginTop: '0.75em', display: 'flex', flexDirection: 'column', fontSize: 'initial', padding: '0.25em 0 0 0.75em' }}>
      {github && <li><a href={github} target="_blank" rel="noopener noreferrer">/github</a></li>}
      {devpost && <li><a href={devpost} target="_blank" rel="noopener noreferrer">/devpost</a></li>}
      {website && <li><a href={website} target="_blank" rel="noopener noreferrer">/website</a></li>}
    </ul>
  )
}

const ProjectRow = ({ project, prefersReduced }) => {
  const [open, setOpen] = useState(false)
  const transition = prefersReduced ? { duration: 0 } : { duration: 0.22, ease: [0.25, 0, 0.35, 1] }

  return (
    <div className="project-row">
      <button
        className="project-row-toggle"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className="project-row-title">{project.title}</span>
        <span className="project-row-brief">{project.brief}</span>
        <span className="project-row-meta">
          <span className="project-row-year">{project.year}</span>
          <span className={`project-row-arrow${open ? ' open' : ''}`} aria-hidden="true">↓</span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={prefersReduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition}
            style={{ overflow: 'hidden' }}
          >
            <div className="project-row-body">
              <p>{project.description}</p>
              <ul className="tools" style={{ marginTop: '0.75em' }}>
                {project.tools.map(t => <li key={t}>{t}</li>)}
              </ul>
              <ProjectLinks {...project} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const prefersReduced = useReducedMotion()

  const filtered = PROJECTS.filter(p => filter === 'all' || p.category === filter)
  const featured = filtered.filter(p => p.featured)
  const archive = filtered.filter(p => !p.featured)

  return (
    <div className="lt-content-column" id="projects" data-aos="fade-up" data-aos-duration="750" data-aos-easing="custom" data-aos-offset="100">
      <h2><span className="side-header">Projects</span></h2>

      <div className="filter-bar" role="group" aria-label="Filter projects by category">
        {Object.entries(FILTER_LABELS).map(([key, label]) => (
          <button
            key={key}
            className={`filter-btn${filter === key ? ' filter-btn--active' : ''}`}
            onClick={() => setFilter(key)}
            aria-pressed={filter === key}
          >
            {label}
          </button>
        ))}
      </div>

      <motion.div
        key={filter + '-featured'}
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.18 }}
      >
        {featured.map(project => (
          <div key={project.id} className="project lt-shadow" style={{ marginBottom: '1.25rem' }}>
            <div className="project-featured-meta">
              <span className="project-featured-year">{project.year}</span>
              <span className="project-cat-tag">{FILTER_LABELS[project.category]}</span>
            </div>
            <p className="project-featured-title">{project.title}</p>
            <p className="project-featured-brief">{project.brief}</p>
            <p className="project-featured-desc">{project.description}</p>
            <ul className="tools" style={{ marginTop: '0.9em' }}>
              {project.tools.map(t => <li key={t}>{t}</li>)}
            </ul>
            <ProjectLinks {...project} />
          </div>
        ))}
      </motion.div>

      {archive.length > 0 && (
        <motion.div
          key={filter + '-archive'}
          className="project-ledger"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18 }}
        >
          {archive.map(project => (
            <ProjectRow key={project.id} project={project} prefersReduced={prefersReduced} />
          ))}
        </motion.div>
      )}

      {filtered.length === 0 && (
        <p className="project-empty" aria-live="polite">No projects in this category.</p>
      )}
    </div>
  )
}

export default Projects
