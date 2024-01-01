// import {useState} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
  } from '@chakra-ui/react';

const TIMELINE_ELEMENTS = [

    //timeline events i.e., experiences
        {
            year: 2024,
            items:[
                {
                    title: 'Software Development Engineer @ ViTAA Medical',
                    text: 'Developing an in-house ML/AI infastructure...',
                },
            ]
        },
        {
            year: 2023,
            items:[
                {
                    title: 'Software Development Engineer @ ViTAA Medical',
                    text: 'Planned and implemented software architecture and infastructure overhauls. Introducing parallel computing and automated CI/CD integration pipelines reducing product and testing run times by 30% and 43% respectively.\n\nLed development and implementation of a 3D cardiovascular auto-segmentation algorithm in PyTorch leveraging MONAI and NIfTI libraries, resulting in a 92.84% Dice and 27% time reduction in QA personnel manual adjustments.\n\nLeading all development, implementation, and management of cybsersecurity tools.',
                },
                {
                    title: 'Founder @ August Technologies Inc.',
                    text: 'Freelance web development for small businesses.',
                },
            ]
        },
        {
            year: 2022,
            items:[
                {
                    title: 'Jr. Software Development Engineer @ ViTAA Medical',
                    text: 'Established and implemented comprehensive coding standards incorporating microservice principles resulting in a 15% improvement in deployment flexibility and resource utilization.',
                },
                {
                    title: 'Sr. Analyst @ CIBC',
                    text: 'Led internal process consulting for $50M business banking product transformation.',
                },
                {
                    title: 'Data Analyst @ TOHacks',
                    text: 'Leveraged Python, Seaborn, and Pandas to clean, visualize, and analyze prior years’ user submission data, guiding data-drive design & business decisions, improving user submissions, and increasing registrations by 84% & user engagement by 23%.\n\nConducted A/B testing to assess the impact of various design decisions, resulting in a 20% increase in user conversion.',
                }
            ]
        },
        {
            year: 2021,
            items:[
                {
                    title: 'Process Engineer @ AlphaPoly',
                    text: 'Developed sustainable packaging solutions to reduce GHG emissions for plastic converting.',
                },
                {
                    title: 'Product Data Analyst @ Celestica',
                    text: 'Analyzed $5+ million in customer portfolios utilizing SQL, Tableau, and PowerBI to uncover demonetized products and assess effects of commodity price fluctuations',
                },
                {
                    title: 'URC Mechanical Science Lead @ Ryerson Rams Robotics',
                    text: 'Designed and manufactured autonomous science console for life detection on mars.',
                }
            ]
        },
        {
            year: 2020,
            items:[
                {
                    title: 'Research Assistant  @ Ryerson University',
                    text: 'Led mechanical design ideation, initial design, and modeling of soft robotic continuum arm in SolidWorks and applied FEA in GMSH, SOFA, and ANSYS to analyze and simulate mechanical behaviour.',
                },
                {
                    title: 'Product Data Analyst Intern @ Celestica',
                    text: 'Coordinated Aerospace & Defense value engineering cost savings projects. Reducing excess inventory by over 20% and expanding customer AVL portfolio by over 15%, leading to annual cost savings of $1.5M.',
                },
                {
                    title: 'URC Chassis Lead @ Ryerson Rams Robotics',
                    text: 'Piloted development and evaluation of dynamic and static force model simulations in MATLAB for mechanical analysis and redesign, increasing drive train structural integrity by over 35%. Developed VBA macros for consolidating and analyzing: team performance metric reports and customer BOMs for product management.',
                }
            ]
        },
];

const Timeline = () => {
    return (
        <div className='lt-content-column' id='timeline' data-aos="fade-up"data-aos-duration="750"data-aos-offset="100">
            <h2><span className="side-header">Timeline</span></h2>
            <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
            {TIMELINE_ELEMENTS.map(ele=>
                <AccordionItem key ={ele.year} value ={ele.year}>
                <div className = 'event-year' data-aos="fade-left"data-aos-duration="750"data-aos-offset="200">
                <AccordionButton ><h2>{ele.year}</h2><AccordionIcon/></AccordionButton>
                <AccordionPanel pb={4}>
                    {ele.items.map(desc=>
                        <div key ={desc.title} value={desc.title} className ='event'>
                            <h3>{desc.title}</h3>
                            <p style={{whiteSpace: "pre-wrap"}}>{desc.text}</p>
                        </div>
                    )}
                </AccordionPanel>
                </div>
                </AccordionItem>
            )}
            </Accordion>
        </div>
    )
}

export default Timeline