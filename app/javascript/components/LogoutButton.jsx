import React from "react";
import { useOutletContext } from "react-router-dom";

export const LogoutButton = () => {
  const handleLogout = useOutletContext()[3];
  return (
    <button className="button delete-button form-submit" onClick={handleLogout}>
      Logout
    </button>
  );
};
