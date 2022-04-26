import React from "react";
import { Link } from "react-router-dom";

export const NewResourceButton = (props) => {
  return (
    <div className="add-resource">
      <Link to="new">
        <button className="button accent-button">
          Add A {props.resourceName}
        </button>
      </Link>
    </div>
  );
};
