import React from "react";
import Title from "../Title/Title";
import { teamsList } from "../../Utlits/teamsList";
import Team from "./Team";

const Teams = () => {
  return (
    <section className=" bg-gray-100">
      <div className="max-w-6xl mx-auto  py-24 px-3">
        <Title longTitle={"We are here"} shortTitle={"TEAMS"} />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {teamsList.map(({ id, image, name }) => (
            <Team key={id} name={name} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
