import React from "react";
import PersonData from "../Data/Persons.json";
import Person from "./Person";

const NameList = () => {
  const personList = PersonData.person.map((person) => (
    <Person person={person} key={person.id} />
  ));
  return <div>{personList}</div>;
};

export default NameList;
