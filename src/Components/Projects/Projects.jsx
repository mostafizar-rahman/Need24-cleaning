import React from "react";
import { servicesList } from "../../Utlits/serviceList";
import Project from "./Project";
import Title from "../Title/Title";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <Title shortTitle="PORTFOLIO" longTitle="Our Recent Projects" />
        <div className="projects__gallery pt-8">
          {servicesList.map(({ id, discretion, image, title, isLarge }) => (
            <Project
              key={id}
              id={id}
              image={image}
              title={title}
              discretion={discretion}
              isLarge={isLarge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
