import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  useEffect(() => {
    document.title = "dalton huey—creative"
  })

  const scrollDown = () => {
    const about = document.getElementById("about");
    about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="hero-section" id="hero">
        <div>
          <h1>
            dalton huey
            <br />
            <span>
              <span className="h1-symbol">&mdash;</span>creative
            </span>
          </h1>
          <p>
            Proud to have a multi-faceted skillset. Because you can't build a
            house with just a hammer.
          </p>
        </div>
        <img src="/dalton-profile-large.jpg" />
      </div>

      <div className="text-center">
        <img
          src="/down-arrow.svg"
          className="down-arrow"
          onClick={scrollDown}
        />
      </div>

      <div className="hero-section tech-about" id="about">
        <img src="/dalton-profile-large.jpg" />
        <div className="manifesto">
          <h2>
            <span className="h1-symbol">&mdash;</span>about me
          </h2>
          <p className="manifesto-para">
            My name is Dalton Huey. I live in Lawrence, KS with my wife Hannah,
            and I am pretty well convinced that I was made to tell stories and
            solve problems. And, for better or worse, those
            inclinations come out in several different ways. One of my first
            loves was writing, which laid the foundation for music, which roped
            in a love for video. Along the way, I discovered business and web
            app development, and I've been thrilled to be able to throw my
            creative mind at solving real-world problems for everyday people.
          </p>

          <p className="manifesto-para">
            On this site, you'll find examples of my previous creative work in a
            variety of media. Feel free to have a look around, and if you're
            ever interested in working together, please send me a message. I'd
            love to connect.
          </p>
        </div>
      </div>

      <div className="text-center boxed-section manifesto">
        <h2><span className="h1-symbol">&mdash;</span>what I believe</h2>
        <p>
          I believe in unbridled creativity.
        </p>
        <p>
          In this world, there are magnificent stories to be told, just causes
          to champion, and wonderful people to win over.
        </p>
        <p>
          And yet most stories lie unheard, many causes fail, and far too many
          people remain trapped in the habits that have formed them.
        </p>
        <p>
          Why? Because Chaos, or noise, drowns out these vital communications
          and fills their place with violence, hatred, and the equivalent of
          jelly beans for dinner.
        </p>

        <p>
          This beautiful world needs creative people. Whether it be through
          words, images, music, or technological applications, stories are told,
          problems are solved, and lives are made better by those with the
          artistic ability to channel unruly Chaos into refined Order.
        </p>
        <p>
          And as for me, I choose to use my creative brain first and allow the
          cause to determine the medium. I choose to be an agent of making Order
          out of Chaos through any means necessary, be it a film, a song, an
          app, or a novel.
        </p>

        <p>
          As for you, if you're with me, I'd love to chat. Let's grab a cup of
          coffee and start making something beautiful together.
        </p>

        <div>
          <Link to="contact">
            <button className="button accent-button">Drop me a line</button>
          </Link>
        </div>
      </div>
      <div className="boxed-section text-center">
        <h2><span className="h1-symbol">&mdash;</span>who you are</h2>
        <p>What are you most interested in?</p>
        <div className="content-card-container">
          <div className="content-card">
            <Link to="video">
              I'm interested in video
            </Link>
          </div>
          <div className="content-card">
            <Link to="tech">
              I'm interested in web development
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
