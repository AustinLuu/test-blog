import React from 'react'
import PropTypes from 'prop-types'

const Header = () => {
    return (
        <header id='header'>
            <div id ='landing-overlay' className = 'lt-content-column'>
                <h1>Hi!</h1>
                <div className="rotating-text">
                <h1>I’m <span className="word col1">Austin.</span><span className="word col2">a student.</span><span className="word col3">an engineer.</span><span className="word col4">an athlete.</span></h1>
                </div>
                <ul className='sub-nav'>
                    <li>
                        <a href='#about'>/about</a>
                    </li>
                    <li>
                        <a href='#projects'>/projects</a>
                    </li>
                    <li>
                        <a href='#timeline'>/timeline</a>
                    </li>
                    <li>
                        <a href="#footer">/contact</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

Header.defaultProps = {
    trait: 'Austin.'
}

Header.propTypes = {
    trait: PropTypes.string
}

export default Header
