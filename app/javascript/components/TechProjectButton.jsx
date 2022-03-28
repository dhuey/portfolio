import React from "react";

export const TechProjectButton = (props) => {
  return (
    <div className="button accent-button text-center tech-project-button">
      <a href={props.link} target="_blank">
        {props.text} <i className={props.iconClass}></i>
      </a>
    </div>
  );
};
