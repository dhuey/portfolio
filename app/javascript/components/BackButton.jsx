import React from "react";
import { Link } from "react-router-dom";

export const BackButton = (props) => {
  return (
    <Link to={props.route}>
      <button className="button btn-small">
        <i className="fa-solid fa-arrow-left" />
        Back to {props.backTo}
      </button>
    </Link>
  );
};
