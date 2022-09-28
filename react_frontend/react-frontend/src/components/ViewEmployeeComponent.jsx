import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmployeeService from "../services/EmployeeService";
const ViewEmployeeComponent = () => {
  const params = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });
  useEffect(() => {
    EmployeeService.getEmployeeById(params.id).then((res) => {
      setEmployee(res.data);
    }, []);
  }, []);

  return (
    <div>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label>Employee First Name : </label>
            <div>{employee.firstName}</div>
          </div>
          <div className="row">
            <label>Employee Last Name : </label>
            <div>{employee.lastName}</div>
          </div>
          <div className="row">
            <label>Employee Email : </label>
            <div>{employee.emailId}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;
