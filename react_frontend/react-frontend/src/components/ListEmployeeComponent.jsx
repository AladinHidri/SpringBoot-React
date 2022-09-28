import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router";
import EmployeeService from "../services/EmployeeService";

const ListEmployee = () => {
  const navigate = useNavigate();
  const [employees, setEmployee] = useState({});
  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployee(res.data);
    });
  }, []);

  function editEmployee(id) {
    navigate(`/update-employee/${id}`);
  }

  function addEmployee() {
    navigate("/add-employee");
  }

  function viewEmployee(id) {
    navigate(`/view-employee/${id}`);
  }

  function deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      setEmployee(employees.filter((emp) => emp.id !== id));
    });
  }

  // begin search Form
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
    console.log(searchTerm);
  };
  // end searchForm

  // begin pagination Form
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 3;
  useEffect(() => {
    // index of the last item in the current page
    const endOffset = itemOffset + itemPerPage;
    setCurrentItems(Array.from(employees).slice(itemOffset, endOffset));
    setPageCount(Math.ceil(employees.length / itemPerPage));
  }, [itemOffset, itemPerPage, employees]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerPage) % employees.length;
    setItemOffset(newOffset);
  };
  // end pagination form
  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <div className="row">
        <button className="btn btn-primary mb-3" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <div className="row">
        <input
          type="text"
          name="searchBar"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
          className="form-control mb-3"
        />

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> First Name</th>
              <th> Last Name</th>
              <th style={{ paddingLeft: "120px" }}> Email </th>
              <th style={{ paddingLeft: "170px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(currentItems)
              .filter((employee) => {
                return (
                  employee.firstName
                    .toUpperCase()
                    .startsWith(searchTerm.toUpperCase()) ||
                  employee.lastName
                    .toUpperCase()
                    .startsWith(searchTerm.toLowerCase())
                );
              })
              .map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => editEmployee(employee.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        deleteEmployee(employee.id);
                      }}
                      className="btn btn-danger ml-5"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        viewEmployee(employee.id);
                      }}
                      className="btn btn-info ml-5"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeClassName="active"
          ></ReactPaginate>
        </>
      </div>
    </div>
  );
};

export default ListEmployee;
