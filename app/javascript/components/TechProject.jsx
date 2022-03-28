import React from "react";
import { AuthComponent } from "./AuthComponent";
import { EditResourceButton } from "./EditResourceButton";
import { TechProjectButton } from "./TechProjectButton";

export const TechProject = (props) => {
  return (
    <div className="video-project-card">
      <iframe
        className="youtube-embed"
        width="560"
        height="315"
        src={props.ytLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="video-details">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <AuthComponent
          component={
            <EditResourceButton id={props.id} resourceName="Tech Project" />
          }
        />
        <TechProjectButton
          link={props.repoLink}
          text="View it on Github"
          iconClass="fa-brands fa-github"
        />
        <TechProjectButton
          link={props.demoLink}
          text="See how it works"
          iconClass="fa-solid fa-display"
        />
      </div>
    </div>
  );
};
