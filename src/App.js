import React, { useState } from "react";

import Form from "./components/Form";
import People from "./components/People";
import NewestPerson from "./components/NewestPerson";
const App = () => {
  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ]);
  const addPerson = (person) => {
    setPeople([...people, person]);
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <Form addPerson={addPerson} />
        <People people={people} />
        <NewestPerson newestPerson={people[people.length - 1]} />
      </div>
    </div>
  );
};

export default App;
