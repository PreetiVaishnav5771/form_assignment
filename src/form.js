import { useState } from "react";
import "./App.css";
import Table from "./table";

const Form = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
    gender: "",
    education: "",
    password: "",
    cpassword: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    console.log(user);
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...user, id: new Date().getTime().toString() };
    console.log(newRecord);
    setRecords([...records, newRecord]);
    console.log(records);
  };

  // console.log("test");
  return (
    // <section className="form">
    //   <div className="container mt-5">
    //     <div className="form-content">
          <div className="container">
            <div className="title">Input Form</div>
            <form action="#">
              <div className="user-details">
                 <div className="form-group">
                   <span class="details">Name</span>
                   <input
                     type="text"
                     name="name"
                     id="name"
                     value={user.name}
                     onChange={handleChange}
                     placeholder="Your Name"
                   />
                 </div>

                 <div className="form-group">
                   <span class="details">Email Address</span>
                   <input
                     type="text"
                     name="email"
                     id="email"
                     value={user.email}
                     onChange={handleChange}
                     placeholder="Your Email"
                   />
                 </div>

                 <div className="form-group">
                   <span class="details">Date of Birth</span>
                   <input
                     type="text"
                     name="dob"
                     id="dob"
                     value={user.dob}
                     onChange={handleChange}
                     placeholder="Your Date of Birth"
                   />
                 </div>
                 <div className="form-group">
                   <span class="details">Phone Numbers</span>
                   <input
                     type="text"
                     name="phone"
                     id="phone"
                     value={user.phone}
                     onChange={handleChange}
                     placeholder="Enter your phone number"
                   />
                 </div>
                 <div className="form-group">
                   <span class="details">Password</span>
                   <input
                     type="password"
                     name="password"
                     id="password"
                     value={user.password}
                     onChange={handleChange}
                     placeholder="Your password"
                   />
                 </div>

                 <div className="form-group">
                   <span class="details">Confirm Password</span>
                   <input
                     type="password"               
                     name="cpassword"
                     id="cpassword"
                     value={user.cpassword}
                     onChange={handleChange}
                     placeholder="confirm your password"
                   />
                 </div>
                 <div className="form-details">
                   <span class="details">Gender</span>
                   <input
                     type="radio"
                     name="gender"
                     value="male"
                     id="male"
                     onChange={handleChange}
                   />{" "}
                   Male
                   <input
                     type="radio"
                     name="gender"
                     value="female"
                     id="female"
                     onChange={handleChange}
                   />{" "}
                   Female
                 </div>

                 <div className="form-details">
                   <span class="details">Level of Education</span>
                   <select
                     className="custom-select"
                     name="education"
                     value={user.education}
                     onChange={handleChange}
                   >  
                     <option value="BA">BA</option>
                     <option value="B.Com">B.Com</option>
                     <option value="BE">BE</option>
                     <option value="B.Tech">B.Tech</option>
                     <option value="B.Farma">B.Farma</option>
                   </select>
                 </div>
                 
                   <button className="button" onClick={handleSubmit}>Add Report</button>
               </div>
            </form>

            <Table records={records} />
          </div>
  
  );
}


export default Form;