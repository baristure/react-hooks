import React, { useContext, useRef } from "react";
import PeopleContext from "../context/peopleContext";

import { useForm } from "../hooks";
const Form = () => {
  const context = useContext(PeopleContext);

  const firstNameInput = useRef(null);

  const validatePerson = (values) => {
    let errors = {};
    if (values.firstName.trim() === "") {
      errors.firstName = "First name must not be empty";
    }
    if (values.lastName.trim() === "") {
      errors.lastName = "Last name must not be empty";
    }
    return errors;
  };
  const addPersonFromForm = (event) => {
    context.addPerson(values);
    firstNameInput.current.focus();
  };

  const { values, errors, onChange, onSubmit } = useForm(
    addPersonFromForm,
    {
      firstName: "",
      lastName: "",
    },
    validatePerson
  );

  return (
    <div className="col">
      <h2>Add a person: </h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className={`form-control mb-2 ${errors.firstName && "is-invalid"} `}
            name="firstName"
            placeholder="First name.."
            value={values.firstName}
            ref={firstNameInput}
            onChange={onChange}
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`form-control mb-2 ${errors.lastName && "is-invalid"}`}
            name="lastName"
            placeholder="Last name.."
            value={values.lastName}
            onChange={onChange}
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}
        </div>
        <button className="btn btn-success" type="submit">
          Add person
        </button>
      </form>
    </div>
  );
};

export default Form;
