import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router";

const UpdateEmployee = () => {
  const params = useParams();
  const [loadin, setLoading] = useState(false)
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  useEffect(() => {
    EmployeeService.getEmployeeById(params.id).then((res) => {
      setEmployee(res.data);
    });
  }, []);


  console.log(employee);
  useEffect(() => {
    setFirstName(employee.firstName);
    setLastName(employee.lastName);
    setEmailId(employee.emailId);
  }, [employee]);
  const navigate = useNavigate();

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
    EmployeeService.updateEmployee(employee, params.id).then(() => {
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
            <h3 className="texte-conter">Update Employee</h3>
            <div className="card-body">
              <form>
                <div label="firstName" className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="first Name"
                    name="firsName"
                    className="form-control"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="LastName"
                    className="form-control"
                    value={lastName}
                    onChange={handleLastNameChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Email: </label>
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

export default UpdateEmployee;
