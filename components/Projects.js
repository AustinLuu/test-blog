import {useState} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/react';

const Projects = () => {
    //projects
    const [projects] = useState([
        {
            title: 'Kabo',
            year: 2021,
            brief: 'a lightweight karaoke Discord bot',
            description: 'Kabo is a karaoke Discord bot developed at Hack the North 2020++ for simulating karaoke with live pitch and lyrical correctness scoring. Backend developed in Python using Aubio, Numpy, SpeechRecognition, Pydub, LyricsGenius, and Wave libraries for audio analysis. Frontend developed using Node.js, Discord.js, and PythonShell for interfacing.',
            tools: [
                {text: 'Python'},
                {text: 'Numpy'},
                {text: 'Azure'},
                {text: 'JavaScript'},
                {text: 'Node.js'},
                {text: 'Discord.js'}
            ],
            github: 'https://github.com/SherRao/HackTheNorth2020-',
            devpost: 'https://devpost.com/software/karaokebot',
        },
        {
            title: 'iCal',
            year: 2021,
            brief: 'image to Google calendar events',
            description: 'iCal is a web app which deciphers images into google calendar events. Using Google\'s Cloud Vision API and OCR technology, iCal takes images of events (think poster or webpage screenshot) to create an event in your Google Calendar with the correct title, date, and description. In the future I hope to build this into a Chrome extension for acessibility and quality of life usage.',
            tools: [
                {text: 'Google Cloud Vision API'},
                {text: 'Google Calendar API'},
                {text: 'JavaScript'},
                {text: 'Node.js'},
                {text: 'Discord.js'},
                {text: 'CSS'},
            ],
            github: 'https://github.com/AustinLuu/yuHacks',
            devpost: 'https://devpost.com/software/image-to-google-calendar-event',
        },
        {
            title: 'Portable Machine Shop',
            year: 2021,
            brief: 'a portable accessible machine shop',
            description: 'Designed a portable machine shop which fits in the bed of medium to large sized pickup trucks as my undergraduate capstone project. Design is directed towards contract manufacturing, maintenance, and competitive engineering design teams for convenient machining of small steel and aluminum parts utilizing milling, turning, and drilling operations.',
            tools: [
                {text: 'SolidWorks'},
                {text: 'FEA'},
                {text: 'FMEA'}
                
            ]
        },
        {
            title: 'iTest',
            year: 2020,
            brief: 'a commercial helmet factor of safety testing machine',
            description: 'Designed a helmet factor of safety testing machine capable of impacting helmets at 28m/s with a force of 60N across six impact locations using three pneumatic piston end effector mechanisms. Designed custom cam followers and pawl & ratchet mechanisms. Simulated designs using SolidWorks motion analysis and OMRON PLC utilizing PLC fiddle ladder logic software for pneumatic testing.',
            tools: [
                {text: 'SolidWorks'},
                {text: 'Ladder Logic'},
                {text: 'PLC'}
            ]
        },
        {
            title: 'Mi Melons',
            year: 2019,
            brief: 'an iOS + Voiceflow breast examination app',
            description: 'An app that guides women through their monthly breast exam to check for lumps and irregularities. Users are able to track their past exams and symptoms. Developed for Hack the North 2019.',
            tools: [
                {text: 'iOS'},
                {text: 'Swift'},
                {text: 'Figma'},
                {text: 'Voiceflow'},
                {text: 'ResNet50'}
            ],
            github: 'https://github.com/AustinLuu/mi-melons',
            devpost: 'https://devpost.com/software/mi-melons',
            image: './static/mimelons.png'
        },
        {
            title: 'RU K-POP',
            year: 2019,
            brief: 'Ryerson University\'s KPOP student organization webpage',
            description: 'Piloted design and development of static webpage for sharing sponsorship, navigation, event updates, and communication. Frontend developed using Vanilla JavaScript, CSS, HTML hosted on Bluehost.',
            tools: [
                {text: 'JavaScript'},
                {text: 'CSS'},
                {text: 'Google Maps API'}
            ],
            github: 'https://github.com/AustinLuu/rukpop',
            website: 'https://github.com/AustinLuu/rukpop',
        },
        {
            title: 'Parallel Drone Swarm',
            year: 2018,
            brief: 'an IoT disaster rescue drone network',
            description: 'Built two IoT enabled ground drones communicating using MQTT protocol for PennApps XVII. The two ground drones collect thermal, moisture, and relative location data for autonomous 2D environment mapping. Built with the attempt at targeting disaster relief and search & rescue.',
            tools: [
                {text: 'Python'},
                {text: 'C++'},
                {text: 'IoT'},
                {text: 'MQTT'},
                {text: 'Arduino'},
                {text: 'SolidWorks'},
                {text: 'Laser Cutting'},
                {text: '3D Printing'}
            ],
            devpost: 'https://devpost.com/software/drone-swarm',
        },
        {
            title: 'BioArm',
            year: 2018,
            brief: 'a 15 degree of freedom bionic arm',
            description: 'Designed and fabricated a bionic arm assembly offering 15 degrees of freedom (3 DOF across each finger). Manufactured the design in under $150 as a proof of concept to further the field of bio-mechanics in hope of making prosthetics more accessible and versatile in the future.',
            tools: [
                {text: 'C++'},
                {text: 'Arduino'},
                {text: 'SolidWorks'},
                {text: 'ANSYS'},
                {text: 'FEA'},
                {text: 'Laser Cutting'},
                {text: '3D Printing'}
            ]
        },
        {
            title: 'Greeco',
            year: 2018,
            brief: 'a crowd sourced approach towards environmental cleanliness',
            description: 'Greeco is a web application that allows users to rate and visualize a \'cleanliness\' overlay of their local surroundings. Greeco acts as a crowd sourced approach to identify problematic areas whilst raising awarness and organizing cleanup events in local communities.',
            tools: [
                {text: 'Python'},
                {text: 'Django'},
                {text: 'JavaScript'},
                {text: 'CSS'},
                {text: 'Bootstrap'},
                {text: 'Google Maps API'},
            ],
            github: 'https://github.com/AustinLuu/waste_detect',
        },
        {
            title: 'Vision Motion',
            year: 2017,
            brief: 'kinematic motion analysis learning tool',
            description: 'Deployed a kinematic motion tracking app on the Google Play Store with 2190+ total installs. The app leverages OpenCV for real-time computer vision to track motion of objects to render downloadable CSV graphs of its position, velocity, and acceleration. Designed in hope of making higher education experimentation more accessible.',
            tools: [
                {text: 'Android'},
                {text: 'OpenCV'},
                {text: 'Java'},
                {text: 'GraphQL'}
            ],
            github: 'https://github.com/AustinLuu/waste_detect',
            devpost: 'https://devpost.com/software/visionmotion',
            website: 'https://visionmotion.williamqin.com/',
        },
        {
            title: 'UFbOat',
            year: 2017,
            brief: 'a maritime life support system',
            description: 'UFbOat is an enclosed lifeboat developed for emergency life support and rescue in the Carribean sea capable of fitting eight adults. Designed for small scale usage on medium sized boats.',
            tools: [
                {text: 'SolidWorks'},
                {text: 'FMEA'}
            ]
        },
        {
            title: 'Personal Website',
            year: 2021,
            brief: 'the thing you\'re on right now',
            description: 'Decided my portfolio needed an upgrade. Built this website using a variety of tools I was interested in learning at the time including React, Next.js, Chakra UI, SASS, and AOS. Yep, surprisingly this is my first React website!',
            tools: [
                {text: 'React.js'},
                {text: 'Next.js'},
                {text: 'Chakra UI'},
                {text: 'JavaScript'},
                {text: 'styled-components'},
                {text: 'CSS'},
                {text: 'SASS'},
                {text: 'AOS'}
            ],
            github: 'https://github.com/AustinLuu/austinluu.me',
            website: 'https://austinluu.me/',
        },
    ])

    return (
        <div className='lt-content-column' id='projects' data-aos="fade-up"data-aos-duration="750"data-aos-easing="custom"data-aos-offset="100">
            <h2><span className="side-header">Projects</span></h2>
            <Accordion allowToggle>
            {projects.map(({title, brief, description, tools, github, devpost, website})=>
                
                <div className = 'project lt-shadow' data-aos="fade-left"data-aos-duration="750"data-aos-offset="200">
                <AccordionItem>
                <AccordionButton className='project-btn' ><div className="project-highlight lt-flex-row"><p><b>{title}</b></p><p> — {brief}</p><AccordionIcon/></div></AccordionButton>
                <AccordionPanel pb={4}>
                    
                        <div className ='project-text'>
                            <p>{description}</p>
                            <ul className='sub-nav' style={{fontSize:'0.9em'}}>
                                {github?<li><a target="_blank" rel="noopener noreferrer" href={github}>/github</a></li>:null}
                                {devpost?<li><a target="_blank" rel="noopener noreferrer" href={devpost}>/devpost</a></li>:null}
                                {website?<li><a target="_blank" rel="noopener noreferrer" href={website}>/website</a></li>:null}
                            </ul>
                            <ul className = "tools">
                            {tools.map(({text})=>
                                <li>{text}</li>
                            )}  
                            </ul>
                        </div>
                        
                </AccordionPanel>
                </AccordionItem>
                </div>
            )}
            </Accordion>
        </div>
    )
}

export default Projects
