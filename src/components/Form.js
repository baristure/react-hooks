import React, { useState, useContext, useMemo,useRef } from "react";
import PeopleContext from "../context/peopleContext";

const Form = () => {
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  const context = useContext(PeopleContext);
  const firstNameInput=useRef(null);
  const onChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (person.firstName.trim() === "" || person.lastName.trim() === "") return;

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim(),
    };

    context.addPerson(newPerson);
    setPerson({ firstName: "", lastName: "" });
    firstNameInput.current.focus();
  };
  const printNumberOfPeople = () =>
    console.log(`Number of people: ${context.people.length}`);

  useMemo(() => printNumberOfPeople(), []);
  
  return (
    <div className="col">
      <h2>Add a person: </h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-2"
            name="firstName"
            placeholder="First name.."
            value={person.firstName}
            ref={firstNameInput}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-2"
            name="lastName"
            placeholder="Last name.."
            value={person.lastName}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add person
        </button>
      </form>
    </div>
  );
};

export default Form;
