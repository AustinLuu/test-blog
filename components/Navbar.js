const Navbar = () => {
    return (
        <nav id="navbar">
            <div href="#header">
                <input id="themeSwitch"type="checkbox" style={{display: 'none'}}/>
                <label for="themeSwitch"><img className ="logo" src="../static/images/logo.png" alt="logo"/></label>
            </div>
            
            {/* <ul className = "nav-wrapper">
                <li className ="nav-item"><a href="#header"><span>portfolio.</span></a></li>
                <li className ="nav-item"><a href="#gallery"><span>gallery.</span></a></li>
                <li className ="nav-item"><a href="#blog"><span></span>blog.</a></li>
            </ul> */}
        </nav>
    )
}

export default Navbar
