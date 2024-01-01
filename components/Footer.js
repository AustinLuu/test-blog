import { FiGithub,FiLinkedin, FiInstagram} from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import { IoNewspaperOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer id ="footer">
            <div className = 'lt-content-column copyright' >
            <img src="../static/images/roll.gif" alt="roll gif" style={{width: "256px"}}/>
            <br/>
            <div className="button-container">
                <a target="_blank"rel="noopener noreferrer" href="https://github.com/austinluu"><button className="icon-btn"><FiGithub /></button></a>
                <a target="_blank"rel="noopener noreferrer" href="https://www.linkedin.com/in/austin-luu/"><button className="icon-btn"><FiLinkedin/></button></a>
                <a target="_blank"rel="noopener noreferrer" href="https://www.instagram.com/austintoasteh/"><button className="icon-btn"><FiInstagram/></button></a>
                <a target="_blank"rel="noopener noreferrer" href="mailto:austinowenluu@gmail.com"><button className="icon-btn"><HiOutlineMail/></button></a>
                <a target="_blank"rel="noopener noreferrer" href="./static/Austin_Luu_Resume_2024_SWE.pdf"><button className="icon-btn"><IoNewspaperOutline/></button></a>
            </div>
            Designed and <a href="https://github.com/AustinLuu/austinluu.me" rel="noopener noreferrer" target="_blank" style={{fontWeight: "600", textDecoration:"none"}}>developed</a> with <span style={{whiteSpace:"nowrap"}}>☕️ &amp; ❤️ by Austin Luu © 2024.</span> 
            </div>
        </footer>
    )
}

export default Footer
