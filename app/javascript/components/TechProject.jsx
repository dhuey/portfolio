import React from "react";
import { AuthComponent } from "./AuthComponent";
import { EditResourceButton } from "./EditResourceButton";

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
        <a href={props.repoLink} target="_blank">
          Source Code
        </a>
        <a href={props.demoLink} target="_blank">
          View Demo
        </a>
        <AuthComponent component={<EditResourceButton id={props.id} resourceName="Tech Project" />} />
      </div>
    </div>
  );
};
