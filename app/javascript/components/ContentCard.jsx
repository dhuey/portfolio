import React from "react";
import { Link } from "react-router-dom";

export const ContentCard = (props) => {
  return (
    <div className="content-card" id={props.cssId}>
      <Link to={props.path}>{props.text}</Link>
    </div>
  );
};
