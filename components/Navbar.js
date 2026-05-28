import { useEffect, useRef } from 'react'

const Navbar = () => {
    const switchRef = useRef(null)

    useEffect(() => {
        const themeSwitch = switchRef.current
        if (!themeSwitch) return
        const handleChange = (event) => {
            event.target.checked
                ? document.body.setAttribute('saved-theme', 'dark')
                : document.body.removeAttribute('saved-theme')
        }
        themeSwitch.addEventListener('change', handleChange)
        return () => themeSwitch.removeEventListener('change', handleChange)
    }, [])

    return (
        <nav id="navbar">
            <div>
                <input id="themeSwitch" ref={switchRef} type="checkbox" style={{display: 'none'}}/>
                <label htmlFor="themeSwitch"><img className ="logo" src="/static/images/logo.png" alt="logo"/></label>
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
