import React from "react";
import { servicesList } from "../../Utlits/serviceList";
import Title from "../Title/Title";
import Service from "./Service";


const Services = () => {
  return (
    <section className="service">
      <div className="service__container">
        <Title shortTitle="SERVICE" longTitle="We are dadicated" />
        <div className="service__wapper">
          {servicesList.map(({ id, icons, discretion, image, title }) => (
            <Service
              key={id}
              id={id}
              icons={icons}
              image={image}
              title={title}
              discretion={discretion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
