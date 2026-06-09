import { useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.body.setAttribute('saved-theme', 'dark')
    } else {
      document.body.removeAttribute('saved-theme')
    }
  }

  return (
    <nav id="navbar">
      <img className="logo" src="/static/images/logo.png" alt="logo" />
      <button
        className="theme-toggle icon-btn"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Light mode' : 'Dark mode'}
      >
        {isDark ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  )
}

export default Navbar
