import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import ReactPaginate from "react-paginate";

export default function Admin() {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const config = {
      headers: { Authorization: `Token ${token}` },
    };

    const response = await axios.get(
      "http://192.168.100.18:8000/api/employe/",
      config
    );

    setEmployees(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const [loggedIn, setLoggedIn] = useState(true);

  const nav = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear("token");
    console.log("logout success");
    nav("/login");
  };

  if (loggedIn === false) {
    return <Navigate to="/login" />;
  }

  if (token == null) {
    return setLoggedIn(false);
  }
  /*  const deleteData = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/Employee/${id}/`)
         return <Navigate to="/admin" /> 
     }    */

  return (
    <div>
      <div>
        <nav
          style={{ backgroundColor: "lightgreen", height: "50px" }}
          className="nav justify-content-center"
        >
          <Link
            style={{ paddingLeft: "800px", fontWeight: "bold" }}
            className="nav-link"
            to="/addemployee"
          >
            Add Employee
          </Link>
          <Link style={{ fontWeight: "bold" }} className="nav-link" to="/emp">
            Login details
          </Link>

          {/* <Link className='nav-link' to='/update'>update</Link>
           */}
        </nav>{" "}
        <br />
        <button
          style={{
            backgroundColor: "skyblue",
            fontWeight: "bold",
            width: "150px",
            borderRadius: "5px",
          }}
          onClick={logout}
        >
          Logout
        </button>
        <h1>Show All the employee</h1>
        Total Employee:{employees.length}
        <table
          style={{
            borderWidth: "1px",
            borderColor: "#aaaaaa",
            borderStyle: "solid",
          }}
          class="table table-striped"
        >
          {/* <thead>
                 <tr>
                   <th scope="col">Email :</th>
                   <th scope="col">Username :</th>
                   <th scope="col">Confirmpassword :</th>
                   <th scope="col">first_name :</th>
                   <th scope="col">last_name :</th>
                   <th scope="col">mobile_no :</th>
                   <th scope="col">qualification :</th>
                   <th scope="col">skills :</th>
                   <th scope="col">date of joining :</th>
                   <th scope="col">experience : </th> 
                 </tr>
                
               </thead> */}
          {/* <thead>
    <tr>
      <th>Email :</th>
      <th>Username :</th>
      <th>Confirmpassword :</th>
      <th>first_name :</th>
      <th>last_name :</th>
      <th>mobile_no :</th>
      <th>qualification :</th>
      <th>skills</th>
      <th>date of joining :</th>
      <th>experience :</th>
      <th>Show Details</th>
    </tr>
  </thead> */}
        </table>
        {employees.map((emploe, index) => (
          <div style={{ backgroundColor: "white", maxWidth: "1800px" }}>
            {/*    ---------------------------------------------
<Card class="m-2 rounded shadow-lg " style={{width: '22rem',marginLeft:"220px"}} >
<Card.Body>
<Card.Title><h5>Email : {emploe.email}</h5></Card.Title>                  
<Card.Title><h5>Username : {emploe.user_name}</h5></Card.Title>
<Card.Title><h5>Confirmpassword : {emploe.confirm_password}</h5></Card.Title>
<Card.Title><h5>first_name : {emploe.first_name}</h5></Card.Title>
<Card.Title><h5>last_name : {emploe.last_name}</h5></Card.Title>
<Card.Title><h5>mobile_no : {emploe.mobile_no}</h5></Card.Title>
<Card.Title><h5>qualification : {emploe.qualification}</h5></Card.Title>
<Card.Title><h5>skills : {emploe.skills}</h5></Card.Title>
<Card.Title><h5>date of joining : {emploe.doj}</h5></Card.Title>
<Card.Title><h5>experience : {emploe.experience}</h5></Card.Title>
</Card.Body>
</Card> 
------------------------------------------<br/>    */}
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
                    <th>Show Details</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{emploe.email}</td>
                    <td>{emploe.user_name}</td>
                    <td>{emploe.confirm_password}</td>
                    <td>{emploe.first_name}</td>
                    <td>{emploe.last_name}</td>
                    <td>{emploe.mobile_no}</td>
                    <td>{emploe.qualification}</td>
                    <td>{emploe.skills}</td>
                    <td>{emploe.doj}</td>
                    <td>{emploe.experience}</td>
                    <td>
                      <Link
                        style={{ color: "black", backgroundColor: "skyblue" }}
                        className="btn btn-outline-primary mr-2"
                        to={`/employeedetail/${emploe.email}/`}
                      >
                        SHOW DETAIL
                      </Link>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div class="table-responsive"></div>

            {/* <Link style={{color:'black',backgroundColor:"skyblue"}} className="btn btn-outline-primary mr-2" to={`/update/${emploe.email}/`}>Update</Link>   */}
          </div>
        ))}
        {/* <Link className='nav-link' to='/'>Products</Link> */}
        {/*    <Link className='nav-link' to='/addProduct'>Add Products</Link> */}
        {/* <Link className='nav-link' to='/'>Logout</Link> */}
      </div>
    </div>
  );
}
