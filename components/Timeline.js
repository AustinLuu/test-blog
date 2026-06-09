import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const EXPERIENCE = [
  {
    id: 'vitaa-sde2',
    role: 'Software Development Engineer II',
    company: 'ViTAA Medical Solutions',
    period: 'June 2024 – Present',
    current: true,
    metric: 'ML platform cut new-model deployment from 5 days to 1 day',
    bullets: [
      'Led ML platform build on AWS EC2/S3 (Slurm-managed); reduced deployment time 80%, enabled 5x experiment throughput across 10 engineers',
      'Designed and shipped a subagent-driven SDLC pipeline coordinating 11 specialized AI agents; reduced development time 88%',
      'Built a model-agnostic dynamic context system; cut token consumption 82–87% across 4+ projects',
      'Leading development and implementation of cybersecurity tooling for HIPAA and SOC 2 compliance across the ML infrastructure',
      'Driving technical roadmap for ML platform evolution, including experiment tracking, model versioning, and automated evaluation pipelines',
    ],
  },
  {
    id: 'cafe-toast',
    role: 'Founder & CEO',
    company: 'Cafe Toast',
    period: 'June 2025 – Present',
    current: true,
    metric: '$10,000+ revenue across 6+ events',
    bullets: [
      'Operated cafe pop-ups at markets, conventions, and weddings across the GTA; 1,000+ customers, 2,000+ items sold',
      'Launched a clothing line generating $1,000+ in merchandise sales',
    ],
  },
  {
    id: 'vitaa-sde1',
    role: 'Software Development Engineer I',
    company: 'ViTAA Medical Solutions',
    period: 'June 2022 – June 2024',
    current: false,
    metric: '3D cardiovascular auto-segmentation at 92.84% Dice score',
    bullets: [
      'Designed UNets for 3D cardiovascular auto-segmentation across 4 domains in PyTorch using MONAI and NIfTI; 92.84% Dice, 27% fewer manual QA adjustments',
      'Planned and shipped software architecture and infrastructure overhauls, introducing parallel computing; reduced product run times 30%',
      'Built CI/CD pipeline on AWS CodeDeploy, EC2, and S3; test execution 43% faster',
      'Defined core coding standards and data structures; engineer ramp-up 3 weeks → 1 week, PR review cycles halved',
      'Led all cybersecurity tooling development and implementation across the product stack',
    ],
  },
  {
    id: 'august-tech',
    role: 'Founder & CEO',
    company: 'August Technologies',
    period: 'Sept 2021 – Present',
    current: true,
    metric: '90%+ reduction in client operational time',
    bullets: [
      'Built and managed websites for 4 small-business clients; automated CRM and payroll workflows',
      'Delivered 4+ AI process automations; 100% recurring client rate',
      'Managed full project lifecycle from sales and scoping to delivery and ongoing support',
    ],
  },
  {
    id: 'tohacks',
    role: 'Data Analyst',
    company: 'TOHacks',
    period: 'Jan 2022 – June 2023',
    current: false,
    metric: 'Registrations +84%, user engagement +23%',
    bullets: [
      'Analyzed prior-year submission data with Python, Pandas, and Seaborn; registrations +84%, engagement +23%',
      'Designed and ran A/B tests on design decisions; 20% increase in user conversion',
    ],
  },
  {
    id: 'cibc',
    role: 'Senior Analyst',
    company: 'CIBC',
    period: 'Mar 2022 – June 2022',
    current: false,
    metric: 'Advised on a $50M business banking transformation',
    bullets: [
      'Served as key project consultant for $50M business banking transformation; advised 100+ stakeholders across 6+ teams',
      'Produced 4 assessment reports and process charts; trained 10 senior bank tellers across 3 sessions',
    ],
  },
  {
    id: 'alphapoly',
    role: 'Process Engineer',
    company: 'AlphaPoly Packaging',
    period: 'June 2021 – Oct 2021',
    current: false,
    metric: 'Forecasted 65% reduction in operation downtime',
    bullets: [
      'Analyzed manufacturing data, redeveloped SOPs; forecasted 65% downtime reduction with Power BI and Excel',
      'Managed $1M capital budget; acquired 4 new tools, expanded product variability 20%+',
    ],
  },
  {
    id: 'celestica',
    role: 'Product Data Analyst',
    company: 'Celestica',
    period: 'May 2019 – June 2021',
    current: false,
    metric: '~$1.5M in annual cost savings from value engineering',
    bullets: [
      'Led A&D value-engineering initiatives; ~$1.5M annual savings, inventory reduced 20%+, AVL expanded 15%+',
      'Analyzed $5M+ portfolio in SQL, Tableau, and Power BI; built VBA macros saving 20h/week per team member',
      'Managed RFQ process for A&D portfolio components; tracked commodity price fluctuations and their downstream effects on customer spend',
      'Coordinated cross-functional collaboration between procurement, engineering, and supply chain teams on cost reduction projects',
    ],
  },
  {
    id: 'robotics',
    role: 'Engineering Lead',
    company: 'Ryerson Rams Robotics',
    period: 'Sept 2016 – June 2021',
    current: false,
    metric: '1st nationally at VEXU 2018 & 2019, 2nd internationally at URC2019',
    bullets: [
      'Led 15-person team; developed PID control in C++ for autonomous robot; 1st nationally at VEXU 2018 & 2019',
      'Developed dynamic force simulations in MATLAB and ANSYS; +35% structural integrity, 2nd internationally at URC2019',
      'Designed autonomous science console for Mars life detection on the URC2019 rover',
      'Mentored 3 junior engineers in mechanical design, prototyping, and FEA simulation workflows',
      'Managed $15K annual competition budget and team logistics across 4 national and international competitions',
    ],
  },
  {
    id: 'research',
    role: 'Research Assistant',
    company: 'Toronto Metropolitan University',
    period: 'Sept 2020 – Jan 2021',
    current: false,
    metric: '20 DOF soft continuum arm, 50+ FEA simulations',
    bullets: [
      'Led mechanical design for a soft robotic continuum arm for UAV application',
      'Modeled 20 DOF arm in SolidWorks; ran 50+ FEA simulations in GMSH, SOFA, and ANSYS',
    ],
  },
]

const ExperienceEntry = ({ entry, prefersReduced, isFirst }) => {
  const [open, setOpen] = useState(false)
  const transition = prefersReduced ? { duration: 0 } : { duration: 0.22, ease: [0.25, 0, 0.35, 1] }

  return (
    <div className={`experience-entry${entry.current ? ' experience-entry--current' : ''}`}>
      <button
        className="experience-toggle"
        style={isFirst ? { borderTop: 'none' } : {}}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <div className="experience-role-row">
          <span className="experience-role">{entry.role}</span>
          <span className={`experience-chevron${open ? ' open' : ''}`} aria-hidden="true">↓</span>
        </div>
        <div className="experience-subline">
          <span className="experience-company">{entry.company}</span>
          <span className="experience-sep" aria-hidden="true">·</span>
          <span className="experience-date">{entry.period}</span>
        </div>
        <p className="experience-metric">{entry.metric}</p>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="bullets"
            initial={prefersReduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition}
            style={{ overflow: 'hidden' }}
          >
            <div className="experience-bullets">
              <ul>
                {entry.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Timeline = () => {
  const prefersReduced = useReducedMotion()

  return (
    <div className="lt-content-column" id="experience" data-aos="fade-up" data-aos-duration="750" data-aos-easing="custom" data-aos-offset="100">
      <h2><span className="side-header">Experience</span></h2>
      <div className="experience-timeline">
        {EXPERIENCE.map((entry, i) => (
          <ExperienceEntry
            key={entry.id}
            entry={entry}
            prefersReduced={prefersReduced}
            isFirst={i === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline
