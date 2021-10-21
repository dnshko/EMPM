import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom'




const  Employeee =() =>   {




    const [employees,setEmployees] = useState([])

    const getEmployees = async () => {
        const response = await axios.get('http://127.0.0.1:8000/Employee/')
        // console.log(response.data)
        setEmployees(response.data)
    }

    useEffect (() =>{
        getEmployees();
        // localStorage.removeItem("token")

    },[] )

  

    return (
        <div >
             {/* <Link className='nav-link' to='/admin'>AdminPage</Link> */}
            <div className="size" >
            {/* <div>
        
                <input type="button" onClick={handleLogout} value="Logout" />
                </div> */}
           <h1>Show All the Employees</h1>
           Total Products:{employees.length}
           {
               employees.map((emploe,index) =>(

                <Card class="m-2 rounded shadow-lg " style={{width: '22rem'}} >
               
                <Card.Body>

                <Card.Title>Employee Name : {emploe.Empname} </Card.Title>
                <Card.Text>Gmail : {emploe.gmail} </Card.Text>
                <Card.Text>mobileno : {emploe.mobileno} </Card.Text>
                <Card.Text>experiance : {emploe.experiance} </Card.Text>

                <Link className="btn btn-outline-primary mr-2" to={`/${emploe.id}/`}>SHOW DETAIL</Link>
                

                </Card.Body>
                </Card>

                // <div>
                //     {/* <p>{product.url} </p> */}
                //     <img src = {product.url} alt={product.image_name}/> 
                //     <p>{product.productname} </p>
                //     <p>{product.original_price} </p>
                //     <p>{product.price} </p>
                //     <p>{product.description} </p>
                // </div>


               )
               )
           }
           </div>
        </div>
    )
}


export default Employeee