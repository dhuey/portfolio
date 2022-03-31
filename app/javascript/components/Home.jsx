import React from 'react';

export const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div>
          <h1 className="tech-title">
            dalton huey
            <br />
            <span className="subtitle">
              <span className="h1-symbol">//</span>technically creative
            </span>
          </h1>
          <p>
            From HTML, CSS, and JavaScript to React and Ruby on Rails, I’m
            passionate about creating web apps that make a difference.
          </p>
        </div>
        <img src="/dalton-profile-large.jpg" />
      </div>

      <div>
        <h2>but first, tell me a bit about yourself</h2>
        <div className="content-card-container">
          <div className="content-card">
            I'm interested in video
          </div>
          <div className="content-card-container">
            I'm interested in web development
          </div>
        </div>
      </div>
    </div>
  )
}