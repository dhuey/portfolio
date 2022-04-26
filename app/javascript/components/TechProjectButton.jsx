import React from "react";

export const TechProjectButton = (props) => {
  return (
    <a href={props.link} target="_blank" className="tech-project-link">
      <div className="button accent-button text-center tech-project-button">
        {props.text} <i className={props.iconClass}></i>
      </div>
    </a>
  );
};
