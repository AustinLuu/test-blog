import { useEffect, useRef } from 'react'

const Header = () => {
    const rotatingTextRef = useRef(null)

    useEffect(() => {
        const container = rotatingTextRef.current
        if (!container) return

        const words = container.querySelectorAll('.word')
        if (!words.length) return

        // Split each word's text into individual letter <span>s
        words.forEach(word => {
            const letters = word.textContent.split('')
            word.textContent = ''
            letters.forEach(letter => {
                const span = document.createElement('span')
                span.textContent = letter === ' ' ? ' ' : letter
                span.className = 'letter'
                word.append(span)
            })
        })

        let currentWordIndex = 0
        const maxWordIndex = words.length
        words.forEach(word => { word.style.opacity = '0' })
        words[currentWordIndex].style.opacity = '1'

        const timeoutIds = []

        const rotateText = () => {
            const currentWord = words[currentWordIndex]
            const nextWord = words[(currentWordIndex + 1) % maxWordIndex]

            Array.from(currentWord.children).forEach((letter, i) => {
                const tid = setTimeout(() => {
                    letter.className = 'letter out'
                }, i * 40)
                timeoutIds.push(tid)
            })

            nextWord.style.opacity = '1'
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = 'letter behind'
                const tid = setTimeout(() => {
                    letter.className = 'letter in'
                }, 500 + i * 20)
                timeoutIds.push(tid)
            })

            currentWordIndex = (currentWordIndex + 1) % maxWordIndex
        }

        let intervalId = null
        const initTimeoutId = setTimeout(() => {
            rotateText()
            intervalId = setInterval(rotateText, 3000)
        }, 2000)
        timeoutIds.push(initTimeoutId)

        return () => {
            timeoutIds.forEach(id => clearTimeout(id))
            if (intervalId !== null) clearInterval(intervalId)
        }
    }, [])

    return (
        <header id='header'>
            <div id ='landing-overlay' className = 'lt-content-column'>
                <h1>Hi!</h1>
                <div className="rotating-text" ref={rotatingTextRef}>
                <h1>I'm <span className="word col1">Austin.</span><span className="word col2">a builder.</span><span className="word col3">an engineer.</span><span className="word col4">an athlete.</span></h1>
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

export default Header
