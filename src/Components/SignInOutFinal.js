import React, { useState } from 'react'
import {Col,Row , Card,Button} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'


// import Swal from 'sweetalert2'

export default function SigninoutFinal() {

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

   
    async function login(e) {
        e.preventDefault()
        try {
             // username & password
        let item = { username, password };
        let result = await fetch("http://192.168.100.18:8000/api/get-token/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)

        });

        result = await result.json();
        console.log(result)

        // passing token & email
        localStorage.setItem("token", result.token)

        const token = localStorage.getItem("token")
        // console.log(token)
        const value = {
            headers: { "Authorization": `Token ${token}` }
        };
        console.log(value)

        const email = result.email
        const data = await axios.get(`http://192.168.100.18:8000/api/employe/${email}/`, value)
        console.log(data);


        // time store
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();
        const signinTime = date;
        localStorage.setItem("time",signinTime)
        console.log(signinTime)
        const {
            data: {
                emp_id
            }
        } = data
        console.log(emp_id)
        const response = await axios.post('http://192.168.100.18:8000/api/emplogin/', {
            "employe_id": emp_id,
            "signin_time": signinTime
        },value)
        alert('You are successfully Sign in at  (   ' +signinTime+  ' )')
        // Swal.fire({
        //     title: 'You are successfully Sign in   (   ' +signinTime+  ' )' ,
        //     showClass: {
        //       popup: 'animate__animated animate__fadeInDown'
        //     },
        //     hideClass: {
        //       popup: 'animate__animated animate__fadeOutUp'
        //     }
        //   })
        // console.log(response)

        

        } catch  {

            alert('Invalid Username & Password!')

            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Invalid Username & Password!',
            //   })
          
            

            console.log('Invalid Username & Password!')

        }
    }

  


    async function signout(e) {
        e.preventDefault()
        try {
             // username & password
        let item = { username, password };
        let result = await fetch("http://192.168.100.18:8000/api/get-token/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)

        });

        result = await result.json();
        console.log(result)

        // passing token & email
        localStorage.setItem("token", result.token)

        const token = localStorage.getItem("token")
        // console.log(token)
        const value = {
            headers: { "Authorization": `Token ${token}` }
        };
        console.log(value)

        const email = result.email
        const data = await axios.get(`http://192.168.100.18:8000/api/employe/${email}/`, value)
        console.log(data);


        // time store
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();
        const currDate = date;
        console.log(currDate)
        const {
            data: {
                emp_id
            }
        } = data
        console.log(emp_id)
        const response = await axios.post('http://192.168.100.18:8000/api/emplogin/', {
            "employe_id": emp_id,

            "signout_time": currDate

        },value)
        console.log(response)
        
        alert('You are successfully Sign out at   (   ' +currDate+  ' )')

        // Swal.fire({
        //     title: 'You are successfully Sign out   (   ' +currDate+  ' )' ,
        //     showClass: {
        //       popup: 'animate__animated animate__fadeInDown'
        //     },
        //     hideClass: {
        //       popup: 'animate__animated animate__fadeOutUp'
        //     }
        //   })

        } catch  {

            alert('Invalid Username & Password!')

            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Invalid Username & Password!',
            //   })

            console.log('Error')

        }
    }
    

    return (
        <div>
            <nav className='nav ' style={{backgroundColor: '#4bb34b' ,float:'right' }}>
              
            
              <Link style={{color:'white'}} className='nav-link' to='/admin'>Admin</Link> 
              {/* <Link className='nav-link' to='/update'>update</Link>
           */}

           </nav> 

        <center>

            <img src="/assets/img/baboolsoftLogo.png" alt=" BaboolsoftLogo" style={{ width: '80px', height: '70px', marginTop: '50px' }} />
            <br />
            <img src="/assets/img/baboolsoftLogo1.png" alt=" BaboolsoftLogo" style={{ width: '150px', height: '35px' }} />
        </center>

        <Row>
            <Col>
                <Card style={{ width: '22rem', height: '24rem', marginLeft: '295px', marginTop: '66px', borderRadius: '50px' ,borderColor: '#119311' }}>
                    <Card.Body>
                        <center>
                            <h1 style={{ color: "#119311", marginTop: '35px' }}>Sign in</h1>
                            <br />
                            <p style={{}}>Employee</p>
                        </center>
                  
                            <center>
                                <div className="form-group">
                                    <input style={{ borderRadius: '25px', borderColor: '#119311', width: '265px' }}
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter Username"
                                        // value={this.state.user_name}
                                        onChange={(e) =>setUsername(e.target.value)}
                                    />
                                </div>

                                <br />

                                <div className="form-group">
                                    <input style={{ borderRadius: '25px', borderColor: '#119311', width: '265px' }}
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        // value={this.state.password}
                                        onChange={(e) =>setPassword(e.target.value)}
                                    />
                                </div>
                                <br />
                                <Button type="submit" onClick={login} style={{ backgroundColor: '#119311', color: 'white', borderRadius: '25px', width: '92px' }}>
                                    Sign In
                                </Button>

                            </center>
                       
                        <center>
                            {/* <Button onClick={() => this.submitForm()} type="submit" style={{backgroundColor:'#119311',color:'white',borderRadius:'25px',width:'92px'}}>
            Sign In
    </Button> */}
                        </center>
                        {/* <button onClick={() => this.myFunc()}>Sign In</button> */}
                    </Card.Body>
                </Card>
            </Col>


            <Col>
                <Card style={{ width: '22rem', height: '24rem', marginLeft: '25px', marginTop: '66px', borderRadius: '50px',borderColor: '#119311' }}>
                    <Card.Body>
                        <center>
                            <h1 style={{ color: "#119311", marginTop: '35px' }}>Sign Out</h1>
                            <br />
                            <p style={{}}>Employee</p>
                        </center>
                  
                            <center>
                                <div className="form-group">
                                    <input style={{ borderRadius: '25px', borderColor: '#119311', width: '265px' }}
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter Username"
                                        // value={this.state.user_name}
                                        onChange={(e) =>setUsername(e.target.value)}
                                    />
                                </div>

                                <br />

                                <div className="form-group">
                                    <input style={{ borderRadius: '25px', borderColor: '#119311', width: '265px' }}
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        // value={this.state.password}
                                        onChange={(e) =>setPassword(e.target.value)}
                                    />
                                </div>
                                <br />
                                <Button type="submit" onClick={signout}  style={{ backgroundColor: '#119311', color: 'white', borderRadius: '25px', width: '92px' }}>
                                    Sign Out
                                </Button>

                            </center>
                       
                        <center>
                            {/* <Button onClick={() => this.submitForm()} type="submit" style={{backgroundColor:'#119311',color:'white',borderRadius:'25px',width:'92px'}}>
            Sign In
    </Button> */}
                        </center>
                        {/* <button onClick={() => this.myFunc()}>Sign In</button> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    </div>
    )
}
