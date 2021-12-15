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
            year: 2021,
            items:[
                {
                    title: 'Process Engineer @ AlphaPoly',
                    text: 'Developing sustainable packaging solutions to reduce GHG emissions for plastic converting.',
                },
                {
                    title: 'Product Data Analyst @ Celestica',
                    text: 'Developing a feed forward neural network for predicting electrical component pricing based on description.',
                },
                {
                    title: 'URC Mechanical Science Co-lead @ Ryerson Rams Robotics',
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
                    text: 'Coordinated Aerospace & Defense value engineering cost savings projects. Reducing excess inventory by over 20% and expanding customer AVL portfolio by over 15%, leading to annual cost savings of $1.5 million.',
                },
                {
                    title: 'URC Chassis Lead @ Ryerson Rams Robotics',
                    text: 'Piloted development and evaluation of dynamic and static force model simulations in MATLAB for mechanical analysis and redesign, increasing drive train structural integrity by over 35%.',
                }
            ]
        },
        {
            year: 2019,
            items:[
                // {
                //     title: 'Lead Web Developer @ RU K-POP',
                //     text: '',
                // },
                {
                    title: 'Product Data Analyst Intern @ Celestica',
                    text: 'Developed VBA macros for consolidating and analyzing: team performance metric reports and customer BOMs for product management.',
                }//,
                // {
                //     title: 'Lead Web Developer @ Ryerson Rams Robotics',
                //     text: '',
                // }
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
                            <p>{desc.text}</p>
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