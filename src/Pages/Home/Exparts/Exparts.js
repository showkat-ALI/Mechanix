import React from "react";
import Expert from "../Expert/Expert";

const Exparts = () => {
  const experts = [
    {
      img: "https://raw.githubusercontent.com/ProgrammingHero1/Genius-Car-Mechanics-module-60/main/src/images/mechanic/mechanic-1.jpg",
      name: "Andrew Smith",
      expertize: "-Engine Expert-",
    },
    {
      img: "https://raw.githubusercontent.com/ProgrammingHero1/Genius-Car-Mechanics-module-60/main/src/images/mechanic/mechanic-2.jpg",
      name: "John Anderson",
      expertize: "-Polish Expert-",
    },
    {
      img: "https://raw.githubusercontent.com/ProgrammingHero1/Genius-Car-Mechanics-module-60/main/src/images/mechanic/mechanic-3.jpg",
      name: "Zakaria Smith",
      expertize: "-Coloring Expert-",
    },
    {
      img: "https://raw.githubusercontent.com/ProgrammingHero1/Genius-Car-Mechanics-module-60/main/src/images/mechanic/mechanic-4.jpg",
      name: "Sakib Anderson",
      expertize: "-Alrounder Expert-",
    },
  ];

  return (
    <div className="container mt-5 pt-5" id="expart">
      <h2 className="text-center">Experts</h2>

      <div className="row ">
        {experts.map((expart) => (
          <Expert key={expart.name} expart={expart}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Exparts;
