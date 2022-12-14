import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

function AboutIcon() {
  return (
    <div className="about-link">
      <Link
        to="/about"
        // to={{ pathname: "/about",
        // search: "?sort=name",
        // hash: "#hello"
        // }}
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIcon;
