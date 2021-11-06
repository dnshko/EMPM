/* eslint-disable */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//eslint-disable-next-line no-unused-vars
import { Navigate, useNavigate } from "react-router-dom";

// import { useParams } from 'react-router';

const EmployeeDetail = () => {
  const [employees, setEmployees] = useState([]);

  const { email } = useParams();
  console.log(email);

  /* console.log(result); */

  useEffect(() => {
    getSingleemployee();
  }, []);

  const getSingleemployee = async () => {
    console.log("myemail", email);
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Token ${token}` },
    };
    const data = await axios.get(
      `http://192.168.100.18:8000/api/employe/${email}/`,
      config
    );
    console.log(data);
    const result = data.data.filter((emp) => emp.email == email);

    setEmployees(result[0]);
    console.log("mydata", data);
  };

  const deleteData = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Token ${token}` },
    };
    await axios.delete(
      `http://192.168.100.18:8000/api/employe/${email}/`,
      config
    );
    // return <Navigate to="/admin" />
    window.location.replace("/admin");
  };

  return (
    <div>
      <h2>Detail of Single Employee </h2>
      <hr></hr>
      <div>
        <div class="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Email </th>
                <th>Username </th>
                <th>Confirmpassword </th>
                <th>first_name </th>
                <th>last_name </th>
                <th>mobile_no </th>
                <th>qualification </th>
                <th>skills</th>
                <th>date of joining </th>
                <th>experience </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{employees.email}</td>
                <td>{employees.user_name}</td>
                <td>{employees.confirm_password}</td>
                <td>{employees.first_name}</td>
                <td>{employees.last_name}</td>
                <td>{employees.mobile_no}</td>
                <td>{employees.qualification}</td>
                <td>{employees.skills}</td>
                <td>{employees.doj}</td>
                <td>{employees.experience}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Link
          className="btn btn-primary mr-5"
          to="/admin"
          style={{ fontSize: "20px" }}
        >
          Back
        </Link>{" "}
        <></>
        <button
          onClick={deleteData}
          className="btn btn-danger mr-5"
          to={`/${employees.email}/`}
          style={{ fontSize: "20px" }}
        >
          Delete
        </button>
        {/*   <p>Email : {employees.email}</p>
            <p>employee username : {employees.user_name} </p>
            <p>Password: {employees.confirm_password} </p>
            <p>Firstname: {employees.first_name} </p>
            <p>Lastname : {employees.last_name} </p>
            <p>Mobileno : {employees.mobile_no}</p>
            <p>employee qualification : {employees.qualification} </p>
            <p>skills: {employees.skills} </p>
            <p>date of joining : {employees.doj} </p>
            <p>experience : {employees.experience} </p> */}
      </div>
      {/*  <Link className="btn btn-danger mr-5" to="/admin" style={{fontSize:'20px'}}>Back</Link>

            <button onClick={deleteData} className="btn btn-danger mr-5" to={`/${employees.email}/`} style={{fontSize:'20px'}}>Delete</button>  */}
    </div>
  );
};

export default EmployeeDetail;
