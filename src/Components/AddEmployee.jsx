import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import Login from './Login';

export default function AddEmployee() {
  const [loggedIn, setLoggedIn] = useState(true);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  // console.log(token)

  const [email, setEmail] = useState(null);
  const [user_name, setUser_name] = useState(null);
  const [password, setpassword] = useState(null);
  const [Confirm_password, setConfirm_password] = useState(null);
  const [first_name, setFirst_name] = useState(null);
  const [last_name, setLast_name] = useState(null);
  const [mobile_no, setMobile_no] = useState(null);
  const [qualification, setQualification] = useState(null);
  const [skills, setSkills] = useState(null);
  const [doj, setDOJ] = useState(null);
  const [experience, setExperience] = useState(null);

  if (loggedIn === false) {
    return <Navigate to="/login" />;
  }

  if (token == null) {
    return setLoggedIn(false);
  }

  // if(token === null){
  //   return <Navigate to="/login" />;
  // }

  // if(token === 'sample'){
  //   // console.log('token null')
  //   setLog(false)
  // }

  // const [auth,setAuth] =useState(false);

  //validation for allow only string
  // eslint-disable-next-line no-unused-vars
  function handleChange(e) {
    if (e.target.value.match("^[A-Za-z ]*$") != null) {
      e.preventDefault();
      setEmail(e.target.value);
    }
  }

  const addNewEmployee = async () => {
    let formField = new FormData();
    formField.append("email", email);
    formField.append("user_name", user_name);
    formField.append("password", password);
    formField.append("confirm_password", Confirm_password);
    formField.append("first_name", first_name);
    formField.append("last_name", last_name);
    formField.append("mobile_no", mobile_no);
    formField.append("qualification", qualification);
    formField.append("skills", skills);
    formField.append("doj", doj);
    formField.append("experience", experience);
    console.log(formField);

    const token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Token ${token}` },
    };
    console.log(token);

    const response = await axios.post(
      "http://192.168.100.18:8000/api/employe/",
      formField,
      config
    );
    console.log(response.data);
    navigate("/admin");

    // await axios({

    //   method: 'post',
    //   url:'http://localhost:8000/api/employe/',
    //   data: formField
    // }).then(response=>{
    //   console.log(response.data);
    //   navigate('/admin')
    // })
  };

  return (
    <div>
      {/* {
    auth === true ? <Login /> : ( */}

      <div className="container">
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A Employee</h2>

            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter the employee email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onChange={e => { handleChange1(e); handleChange(e) }}
                // onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter the employee username"
                name="user_name"
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter the employee password"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter the employee password"
                name="confirm_password"
                value={Confirm_password}
                onChange={(e) => setConfirm_password(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter the Firstname "
                name="first_name"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter the lastname "
                name="last_name"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter the mobileno "
                name="mobile_no"
                value={mobile_no}
                onChange={(e) => setMobile_no(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter the qualifications"
                name="qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter the Skills "
                name="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="datetime-local"
                className="form-control form-control-lg"
                placeholder="Enter the date of joing "
                name="doj"
                value={doj}
                onChange={(e) => setDOJ(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter the experiance "
                name="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>

            <>
              <button
                style={{ margin: "20px" }}
                className="btn btn-primary btn-block"
                onClick={addNewEmployee}
              >
                Add Employee
              </button>
            </>
            <></>
            <>
              <Link
                className="btn btn-primary "
                to="/admin"
                style={{ fontSize: "16px", height: "37px" }}
              >
                Back
              </Link>
            </>
          </div>
        </div>
      </div>

      {/* )
  } */}
    </div>
  );
}
