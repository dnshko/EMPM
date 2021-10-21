import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import {Container,Navbar,Row,Col,Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Login extends Component {
  

  constructor(props) {
    super(props)
    
    const token = localStorage.getItem("token")

    let loggedIn = true 
    if(token == null){
      loggedIn = false
    }
  
    this.state = {

      username:'',
      password:'',
      loggedIn
       
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
    
  

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async submitForm(e){
    e.preventDefault()
    const {username , password} = this.state
    const response = await axios.post('http://192.168.100.18:8000/api/get-token/',{
      username:username,
      password:password
    })
    console.log(response)
    localStorage.setItem("token" , response.data.token)
    this.setState({
           loggedIn: true
    })
      
    // if(username === "admin" && password === "admin@123"){
      
    //   localStorage.setItem("token" , "d6c8e63a9ac1b7c6e5ea106f5449ac6eab33979e")
    //   this.setState({
    //     loggedIn: true
    //   })
    // }
  }

  render() {

    if(this.state.loggedIn){
      return <Navigate to="/admin" />;

    }

    return (
        
        <>
     
        {/* 
         <div className="row-auto">
   
            </div>
         <div class="col-start-2 col-span-4 ...">1</div>
           <h1>welcome to baboolsoft</h1> */}
     
          <Row >
       <Col sm={2}><img src="./assets/img/baboolsoft.png"  /></Col>
       <Col  sm={10}><Navbar className="color-nav" style={{backgroundColor:"#119311"}}>
      
        <Container>
        <Link style={{color:'white',float:'right',marginLeft:'920px'}} className='nav-link' to='/' >Employee</Link> 
         {/* <h1 style={{marginLeft:"833px",float:"right",color:"white"}}> welcome </h1>  */}
        {/* <Navbar.Brand  href="#home">Navbar</Navbar.Brand> */}
        {/* <Nav className="me-auto"> */}
         {/*  <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
       {/*  </Nav> */}
         </Container>
        </Navbar></Col>
     </Row>
     <Card style={{width: '28rem',marginTop:"90px",marginLeft:"455px",borderRadius:"8px",boxShadow: "1px 8px 8px #9E9E9E", }}>
     <Card.Body>
    <Row >
    <Col >
    
    {/* 
     <form>
                   <h3>Sign In</h3>
   
                   <div className="form-group">
                       <label>Email address</label>
                       <input type="email" className="form-control" placeholder="Enter email" />
                   </div>
   
                   <div className="form-group">
                       <label>Password</label>
                       <input type="password" className="form-control" placeholder="Enter password" />
                   </div>
   
                   <div className="form-group">
                       <div className="custom-control custom-checkbox">
                           <input type="checkbox" className="custom-control-input" id="customCheck1" />
                           <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                       </div>
                   </div>
   
                   <button type="submit" className="btn btn-primary btn-block">Submit</button>
                   </form> */}
   <Container >
   <div className="login">
               <form onSubmit={this.submitForm} className="login_form"  >
                   <img style={{width:"155px",marginLeft:"85px"}} src="./assets/img/baboologo.png"/>
                  {/*  {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null} */}
            {/*       <input
                   type="email"
                   name="email"
                   className="form-control"
                   placeholder="Enter Email"
                   value={this.state.username}
                   onChange={this.onChange}
                   />
                  
                   <input style={{boxShadow:"0.1px 0.2px 2px #119311"}}
                   type="password"
                   name="password"
                   className="form-control"
                   placeholder="Password"
                   value={this.state.password}
                   onChange={this.onChange} 
                   />
                  
                  <center>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </center> */}
              <div className="form-group">
                <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.onChange}
                />
            </div>
            <hr style={{color:"white"}}></hr>
            <div className="form-group">
                <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.onChange}
                />
            </div>
            <hr style={{color:"white"}}></hr>
            <center>
            <button type="submit" style={{backgroundColor:"#119311",borderRadius:"5px",color:"white"}}>
                Submit
            </button>
            </center>
                
               </form>
   
           </div>
           </Container>
         
                   </Col>
                   </Row>
                   </Card.Body>
   </Card>
</>
)     











/* 
       <div>
        <div className="container">
        <div className="container">
  <div className="w-50 mx-auto shadow p-5">
    <h2 className="text-center mb-4">ADMIN LOGIN</h2>
    
    <hr></hr>
    
    <form  onSubmit={this.submitForm}>
            <div className="form-group">
                <input
                type="email"
                name="username"
                className="form-control"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this.onChange}
                />
            </div>
            <hr></hr>
            <div className="form-group">
                <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.onChange}
                />
            </div>
            <hr></hr>
            <center>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </center>
      </form>
            

     
   
  </div>
</div>
    </div>
      </div>  */
    
  }
}