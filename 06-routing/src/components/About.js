/** @format */

import React from "react";
import "./Style.css";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  return (
    <div className="color-red">
      <h2>About</h2>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default About;
