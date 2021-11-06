/* eslint-disable */
import { Link, para } from "react-router-dom";
import React from "react";
import axios from "axios";
import { history } from "react-router";

class Update extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      user_name: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
      mobile_no: "",
      qualification: "",
      skills: "",
      doj: "",
      experience: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // Input Change Handler
  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Submit Form
  submitForm() {
    // var id=this.props.match.params.id;
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Token ${token}` },
    };
    axios
      .put(
        "http://192.168.100.18:8000/api/employe/",
        {
          email: this.state.email,
          user_name: this.state.user_name,
          confirm_password: this.state.confirm_password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          mobile_no: this.state.mobile_no,
          qualification: this.state.qualification,
          skills: this.state.skills,
          doj: this.state.doj,
          experience: this.state.experience,
        },
        config
      )
      .then(console.log("The value is Updated"));

    // axios('http://127.0.0.1:8000/Employee/'+id+'/',{
    //     method:'PUT',
    //     body:JSON.stringify(this.state),
    //     headers:{
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    // .then(response=>response.json())
    // .then((data)=>console.log(data));
    // alert('The value is Updated');
  }

  fetchData() {
    var emp_id = this.state.emp_id;
    // var id=this.props.match.params.id;
    fetch("http://192.168.100.18:8000/api/employe/" + emp_id)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          email: data.email,
          user_name: data.user_name,
          confirm_password: data.confirm_password,
          first_name: data.first_name,
          last_name: data.last_name,
          mobile_no: data.mobile_no,
          qualification: data.qualification,
          skills: data.skills,
          doj: data.doj,
          experience: data.experience,
        });

        console.log(data);
      });
  }

  componentDidMount() {
    console.log("my id");
    this.fetchData();
  }

  render() {
    return (
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Employee email</th>
            <td>
              <input
                type="text"
                value={this.state.email}
                name="email"
                onChange={this.changeHandler}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>user_name</th>
            <td>
              <input
                type="text"
                value={this.state.user_name}
                name="user_name"
                onChange={this.changeHandler}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>password</th>
            <td>
              <input
                type="text"
                value={this.state.confirm_password}
                name="confirm_password"
                onChange={this.changeHandler}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>first_name</th>
            <td>
              <input
                type="text"
                value={this.state.first_name}
                name="first_name"
                onChange={this.changeHandler}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>last_name</th>
            <td>
              <input
                type="text"
                value={this.state.last_name}
                name="last_name"
                onChange={this.changeHandler}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>mobile_no</th>
            <td>
              <input
                type="text"
                value={this.state.mobile_no}
                name="mobile_no"
                onChange={this.changeHandler}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>qualification</th>
            <td>
              <input
                type="text"
                value={this.state.qualification}
                name="qualification"
                onChange={this.changeHandler}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>skills</th>
            <td>
              <input
                type="text"
                value={this.state.skills}
                name="skills"
                onChange={this.changeHandler}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>doj</th>
            <td>
              <input
                type="text"
                value={this.state.doj}
                name="doj"
                onChange={this.changeHandler}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th>experience</th>
            <td>
              <input
                type="text"
                value={this.state.experience}
                name="experience"
                onChange={this.changeHandler}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input
                type="submit"
                onClick={this.submitForm}
                style={{ fontSize: "10px" }}
                className="btn btn-dark mr-5"
              />
              <Link
                className="btn btn-danger mr-5"
                to="/admin"
                style={{ fontSize: "10px" }}
              >
                Close
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Update;
