import React, { useState, useEffect } from "react";
import ax from "../modules/csrfToken";
import { TechProject } from "./TechProject";
import { AuthComponent } from "./AuthComponent";
import { NewResourceButton } from "./NewResourceButton";
import HOST_URL from "../modules/hostUrl";

export const Tech = () => {
  const [techProjects, setTechProjects] = useState([]);

  useEffect(() => {
    document.title = "Full-Stack Web Developer — Dalton Huey"
    let mounted = true;
    if (mounted) {
      ax.get(`${HOST_URL}api/v1/tech_projects`)
        .then((response) => setTechProjects(techProjects.concat(response.data)))
        .catch((error) => console.log(error));
    }

    return () => (mounted = false);
  }, []);

  const scrollDown = () => {
    const about = document.getElementById("about");
    about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="hero-section">
        <div>
          <h1 className="tech-title">
            dalton huey
            <br />
            <span className="subtitle">
              <span className="h1-symbol">//</span>full-stack web developer
            </span>
          </h1>
          <p>
            From HTML, CSS, and JavaScript to React and Ruby on Rails, I’m
            passionate about creating web apps that make a difference.
          </p>
        </div>
        <img src="/dalton-huey-web-developer.jpg" />
      </div>

      <div className="text-center">
        <img
          src="/down-arrow.svg"
          className="down-arrow"
          onClick={scrollDown}
        />
      </div>

      <div className="hero-section tech-about" id="about">
        <img src="/dalton-huey.jpg" />
        <div>
          <h2>
            <span className="h1-symbol">//</span>about me
          </h2>
          <p className="manifesto-para">
            I’m a full-stack web developer based in Lawrence, KS. In 2016, when
            I was first asked about learning some HTML and CSS on the job, I
            jumped at the opportunity. Soon after, I had been thrown into the
            deep end and was working with a small team of developers on our
            client-facing Rails apps.
          </p>

          <p className="manifesto-para">
            Since then, I’ve developed a passion for creating web apps that
            solve real-world problems. You’ll see a few examples of my work
            below.
          </p>

          <p>
            <strong>Skills & Technologies:</strong>
          </p>

          <img src="css3-logo.svg" alt="CSS" />
          <img src="js-logo.svg" alt="JavaScript" />
          <img src="html5-logo.svg" alt="HTML" />
          {/*<img src="react-logo.svg" alt="React" />*/}
          <img src="ruby-logo.svg" alt="Ruby" />
          <img src="rails-logo.svg" alt="Ruby on Rails" />
        </div>
      </div>

      {techProjects.map((techProject) => {
        return (
          <TechProject
            key={techProject.id}
            id={techProject.id}
            title={techProject.title}
            ytLink={techProject.youtube_link}
            repoLink={techProject.repo_link}
            demoLink={techProject.demo_link}
            description={techProject.description}
          />
        );
      })}

      <AuthComponent
        component={<NewResourceButton resourceName="Tech Project" />}
      />
    </div>
  );
};
