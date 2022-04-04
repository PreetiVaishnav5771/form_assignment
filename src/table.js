import { useState } from "react";
// import Form from './form'
import './App.css';

const Table = (props) => {

  const [records, setRecords] = useState([]);
 

  const deleteItem = (id) => {
    console.log(id);
    const updatedrecords = records.filter((elem, ind) => {
         return ind === records;
    });
    setRecords(updatedrecords);
  }    
 
  const editItem = (id) => {
    console.log(id);
    const updatedrecords = records.filter((elem, ind) => {
         return ind === records;
    });
    setRecords(updatedrecords);
  }    
 
 return(
   <div>
      <table className="user-table">
        {/* <thead className="heading"> */}
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Gender</th>
            <th>Education</th>
            <th>Actions</th>
          </tr>
        {/* </thead> */}
          {/* <tbody className="table-body"> */}
            {props.records.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                <td>{user.phone}</td>
                <td>{user.password}</td>
                <td>{user.cpassword}</td>
                <td>{user.gender}</td>
                <td>{user.education}</td>
                <td>{user.form}
                  <button onClick={() => editItem(user.id)}>Edit</button>
                  <button onClick={() => deleteItem(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          {/* </tbody> */}
      </table>  
    </div>
  );

}

export default Table;