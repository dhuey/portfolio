import React, { useState, useEffect } from "react";
import ax from "../modules/csrfToken";
import { TechProject } from "./TechProject";
import { AuthComponent } from "./AuthComponent";
import { NewVideoButton } from "./NewVideoButton";

export const Tech = () => {
  const [techProjects, setTechProjects] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      ax.get("http://localhost:3000/api/v1/tech_projects")
        .then((response) => setTechProjects(techProjects.concat(response.data)))
        .catch((error) => console.log(error));
    }

    return () => (mounted = false);
  }, []);

  return (
    <div>
      <div className="hero-section">
        <div>
          <h1>
            dalton huey
            <br />
            <span className="h1-dash">//</span>full-stack web developer
          </h1>
          <p>
            From HTML, CSS, and JavaScript to React and Ruby on Rails, I’m
            passionate about creating web apps that make a difference.
          </p>
        </div>
        <img src="/dalton-profile-large.jpg" />
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

      <AuthComponent component={<NewVideoButton />} />
    </div>
  );
};
