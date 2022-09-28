import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router";
const CreateEmployee = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailId(event.target.value);
  };
  const saveEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    console.log("employee =>" + JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then(() => {
      navigate("/");
    });
  };
  const cancel = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="texte-conter">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={handleLastNameChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="emailId">Email: </label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={handleEmailChange}
                  ></input>
                </div>
                <button className="btn btn-success" onClick={saveEmployee}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateEmployee;
