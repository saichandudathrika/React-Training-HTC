import React ,{Component}from 'react';

// import logo from './logo.svg';
// import './App.css';
// import Employee from './components/Employee'

const Employee=(props)=>{
    // const name = "saichandu"
    // const department = 'training' 

return(<div>
<h3>Employee Name is : {props.employee.name}</h3>
<h3>Employee department is : {props.employee.department}</h3>
</div>

) 

}


export default Employee




