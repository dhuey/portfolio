import React from "react";
import { useOutletContext } from "react-router-dom";

export const AuthComponent = (props) => {
  const [loggedInStatus, user] = useOutletContext();

  if (loggedInStatus === "LOGGED_IN") {
    return props.component;
  } else {
    return null;
  }
};
