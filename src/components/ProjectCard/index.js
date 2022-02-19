import React from "react";
import "./ProjectCard.css";
import projectImage1 from "../../foodtopia.png";

export const ProjectCard = () => {
  return (
    <>
      <div class="ui-card">
        <img src={projectImage1} alt="something" />
        <div class="description">
          <h3>Mountain Morning</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
