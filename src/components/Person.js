import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <h1 >
        {person.name},{person.age},{person.skills}
      </h1>
    </div>
  );
};
export default Person;
