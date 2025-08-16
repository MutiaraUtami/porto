import React from 'react'
import './hero.css'

const hero = () => {
  return (
    <div className="title">
        <h1>
            {"Hi, I'm Mutiara Utami!".split("").map((char, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                {char === " " ? "\u00A0" : char}
            </span>
            ))}
        </h1>

        <ul className="roles">
            <li>UI/UX Designer</li>
            <li>•</li>
            <li>Graphic Designer</li>
        </ul>
    </div>
  )
}

export default hero
