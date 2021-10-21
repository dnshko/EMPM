import React, { Component } from 'react'  
/* 
import './App.css';   */
import axios from "axios";  
import DatePicker from "react-datepicker"; 
/* import TimePicker from 'react-time-picker'; */  

import "react-datepicker/dist/react-datepicker.css";    
export class Employee extends Component {  

    constructor(props) {  
        super(props)  

        this.state = {  
            employee:[],
            dummy:[],
            employeedata:[],  
            startdate: '' ,  
            enddate:'',
            filter:''   
        }  
    }  
    Changedate = (e) => {    
        this.setState({    
                startdate: e    
        });    
};  
enddate = (e) => {    
    this.setState({    
        enddate: e    
    });    
};  
    componentDidMount() {  
        const token = localStorage.getItem("token")
        const config = {
            headers: { Authorization: `Token ${token}` }
        };
        axios.get('http://192.168.100.18:8000/api/emplogin/',config).then(response => {  
            console.log(response.data);  
            this.setState({  
                employeedata: response.data,/* dummy:response.data */
            });  
        });  
        axios.get('http://192.168.100.18:8000/api/employe/',config).then(response=>{
            console.log(response.data);
            this.setState({
                employee:response.data
            });

        });
  }  
    onsubmit = (e) => {    
        /* debugger;  */ 
      /*   const data = { startdate:this.state.startdate, enddate:this.state.enddate};    
        axios.post('http://192.168.100.18:8000/api/emplogin/',data).then(response => {  
            console.log(response.data);  
            this.setState({  
             employeedata: response.data  
        });  
        });   */
        e.preventDefault(); 
        if(this.state.filter === ''){
            const empdata = this.state.employeedata.filter(e =>  new Date(this.state.startdate) <= new Date(e.signin_time) && new Date(this.state.enddate) >= new Date(e.signin_time))
            console.log(empdata)
            this.setState({dummy:empdata})
        }   
        else{
            const empData = this.state.employeedata.filter(emp => emp.employe_id == this.state.filter)
            const Data = empData.filter(e =>  new Date(this.state.startdate) <= new Date(e.signin_time) && new Date(this.state.enddate) >= new Date(e.signin_time))   
            this.setState({dummy:Data})
        }
        
        
        // const empdata = this.state.employeedata.filter(e => new Date(e.signin_time).toLocaleDateString()>=startDate && new Date(e.signin_time).toLocaleDateString()<=endDate)
        
}     
    render() {  
        return (  
            <div>  
                <div className="row">  
                    <div className="col-sm-12 btn btn-info">  
                       employee login details
                 </div>  
                </div>  
                <form onSubmit={this.onsubmit}>  
                    <div className="row hdr" >  
                        <div className="col-sm-3 form-group">  </div>  
                        from 
                        <div className="col-sm-3 form-group">  
                        <input type="date" className="form-control" onChange={(e)=>this.setState({startdate:e.target.value})}/>
                            {/* {   <DatePicker className="form-control"    
                                                        selected={this.state.startdate} placeholderText="Select Date" showPopperArrow={false}    
                                                        onChange={this.Changedate}   showTimeSelect
                                                        dateFormat="yyyy/MM/dd  hh:mm" 
                                                />     } */}
                                               {/*  < DatePicker  className="form-control" selected={this.state.startDate} placeholderText="Select Date" showPopperArrow={false}  onChange={this.ChangeDate}/> */}
                                                 
                        </div>  
                        to
                        <div className="col-sm-3 form-group">  
                        <input type="date" className="form-control" onChange={(e)=>this.setState({enddate:e.target.value})}/>
                                {/* { <DatePicker className="form-control"    
                                                     selected={this.state.enddate} placeholderText="Select Date" showPopperArrow={false}    
                                                     onChange={this.enddate}   showTimeSelect
                                                     dateFormat="yyyy/MM/dd  hh:mm" 
                                                />     } */}
                                                {/*  <DatePicker className="form-control"    
                                                        selected={this.state.endDate} placeholderText="Select date" showPopperArrow={false}    
                                                     onChange={this.endDate}    
                                                />  */}  
                        </div>  
                        <div className="col-sm-3 form-group">
                            <select onChange={(e)=>this.setState({filter:e.target.value})}>
                            <option value="">All</option>
                                {this.state.employee.map(emp =><option value={emp.emp_id}>{emp.user_name}</option> )}
                            </select>
                        </div>
                        
                        <div className="col-sm-3 form-group">  
                            <button type="submit" className="btn btn-success" >Search</button>  
                        </div>  
                    </div>  
                </form>  
                <table className="table">  
                    <thead className="thead-dark">  
                        <tr> 
                            <th scope="col">employee_id</th>  
                            <th scope="col">SigninTime</th>  
                            <th scope="col">SignoutTime</th>  
                          
                        </tr>  
                 </thead>  
                 <tbody> 

                        {  
                    this.state.dummy.map((p, index) => {  
                      return  <tr key={index}>  
                            <th scope="row">{p.employe_id}</th>  
                            <td>{p.signin_time}</td>  
                            <td>{p.signout_time}</td>  
                  
                        </tr>  
                    })   
                    }  
                   </tbody>  
                </table>  
            
            </div>  
        )  
    }  
}  
export default Employee 