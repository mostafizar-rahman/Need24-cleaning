import React from "react";
import Title from "../Title/Title";
import { teamsList } from "../../Utlits/teamsList";
import Team from "./Team";

const Teams = () => {
  return (
    <section className="temas" name="/teams">
      <div className="container">
        <Title longTitle={"We are here"} shortTitle={"TEAMS"} />
        <div className="temas__wapper">
          {teamsList.map(({ id, image, name }) => (
            <Team key={id} name={name} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
