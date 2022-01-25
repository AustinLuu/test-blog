const About = () => {
    return (
        <div className='lt-content-column' id='about' data-aos="fade-up"data-aos-duration="750"data-aos-offset="100">
            <h2><span className="side-header">About</span></h2>
            <div className = 'lt-flex-row'>
                <div className = 'lt-flex-60 lt-card' data-aos="fade-up"data-aos-duration="750"data-aos-offset="100">
                    <p>Welcome to my little corner of the internet! I’m Austin, a recent engineer graduate interested in medical robotics, ml, and accessible tech — anything that can make technology work better for everyone. Currently, I'm based in Toronto, Canada developing sustainable plastic solutions <a href="https://alphapoly.com/">@apc</a>. I also help build robots for exploring Mars as part of <a href="https://teamr3.ca/">@r3</a>.</p>
                    <br/>
                    <p>In my spare time, you can find me power lifting at the gym, shooting mediocre photos, or at your local beach playing volleyball! Recently, I've started a podcast on which I plan to talk more about some of my thoughts on tech and general musings about the world.</p>
                    <br/>
                    <p>Feel free to download my resumes:</p>
                    <ul className='sub-nav' style ={{display: "flex",flexDirection: "column",padding:"0.5em 0em 0em 1em",fontSize: "initial"}}>
                        <li><a target="_blank"rel="noopener noreferrer" href="./static/Austin_Luu_Resume_2022_ML.pdf">/data science</a></li>
                        <li><a target="_blank"rel="noopener noreferrer" href="./static/Austin_Luu_Resume_2022_R.pdf">/robotics</a></li>
                        <li><a target="_blank"rel="noopener noreferrer" href="./static/Austin_Luu_Resume_2022_SWE.pdf">/software</a></li>
                        <li><a target="_blank"rel="noopener noreferrer" href="./static/Austin_Luu_Resume_2022_M.pdf">/mechanical</a></li>
                    </ul>
                    <img className="gh-chart" src="https://ghchart.rshah.org/austinluu" alt="austinluu's Github chart"/>
                    <br/>
                </div>

                <div className = 'img-container lt-flex-40' style={{paddingBottom:"12vh"}}>
                    <img className='me lt-shadow' src='../static/images/spring-me.jpg' alt='Austin Luu'/>
                    <table className ='highlight lt-shadow'>
                        <tbody>
                        <tr>
                            <td>
                                <pre>
                                    <code className="number-bar">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                        <span>6</span>
                                        <span>7</span>
                                    </code>
                                </pre>
                            </td>
                            <td>
                                <pre>
                                    <code className='language-json' data-lang='json'>
                                        {'{'} <br/>
                                        <span>"bio"</span>: <span>"writes code, builds robots, lifts weights"</span>,<br/>
                                        <span>"currently"</span>: <span>"@r3, @apc"</span>,<br/>
                                        <span>"previously"</span>: <span>"@ryu, @celestica"</span>,<br/>
                                        <span>"location"</span>: <span>"Toronto, Canada"</span>,<br/>
                                        <span>"name"</span>: <span>"Austin Luu"</span><br/>
                                        {'}'}
                                    </code>
                                </pre>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default About
