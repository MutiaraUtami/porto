import React from 'react'
import './hero.css'

const hero = () => {

  const text = "Mutiara Utami";
  let globalCharIndex = 0;

  return (
    <div className="section">
      <div className="hero">
        <div className='box'>
        <div className="title">
          <p className="greeting">Hello, I'm</p>
          <h1>
            {text.split(" ").map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                <span className="word-wrapper">
                  {word.split("").map((char, charIndex) => (
                    <span
                      key={charIndex}
                      style={{ animationDelay: `${1.7 + globalCharIndex++ * 0.05}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </React.Fragment>
            ))}
          </h1>
          <ul className="roles">
              <li>UI/UX Designer</li>
              <li>•</li>
              <li>Graphic Designer</li>
          </ul>
        </div>

        <div className='profile'>
          <img src="src\assets\profile-removebg-preview.png" alt="profile" />
        </div>

        </div>


      </div>
    </div>
  )
}

export default hero
