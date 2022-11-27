import React from "react";

export default function Navbar(props) {
  return (
      <div
        className={`form-check form-switch text-${
          props.mode === "dark" ? "light" : "dark"
        } my-2 mx-2`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable {props.mode === "dark" ? "light" : "dark"} Mode
        </label>
      </div>
  );
}
