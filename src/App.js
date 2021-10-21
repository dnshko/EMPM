import React  from 'react';

import EmployeeDetail from './Components/EmployeeDetail';
import AddEmployee from './Components/AddEmployee';
import Employee from './Components/Employee';
/* import Employeee from './Components/Employeee'; */

import {BrowserRouter , Route ,Routes} from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Update from './Components/Update';
import SigninoutFinal from './Components/SignInOutFinal'; 




class App extends React.Component {

  // state={
  //   isLog:false
  // }

  // handleLogin = (isLog) => this.setState({isLog})

  render(){

    // const {isLog} = this.state;

    return (
      
      <>
       <div className='container'>
       
         <BrowserRouter>
        
        <Routes>

        {/*  <Route path='/home' element={ <Home/>} /> */}
       {/*    <Route path='/' element={ <Employeee/>} />  */}

         
          <Route path='/addemployee'  element={<AddEmployee/>} />
          <Route path='/login' element={ <Login/>} />
           <Route path='/admin' element={ <Admin/>} />
           <Route path='/emp' element={ <Employee/>} />
           <Route path='/update/:id/' element={ <Update/>} />
           <Route path='/' element={ <SigninoutFinal/>} />
         
           <Route path='/:email/' element={ <EmployeeDetail/>} />
           <Route  path="/employeedetail/:email" element={ <EmployeeDetail/>}  />
           
  
         
         </Routes>
       
        
       </BrowserRouter>
        
       </div>
      </>
    )

  }

  

    
  }
  export default App
  