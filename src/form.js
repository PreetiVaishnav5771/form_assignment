import { useState } from "react";

const Form = () => {
   
    const [user, setuser] = useState({
        name:"",email:"",address:"",dob:"",gender:"", education:"",password:"",cpassword:""
    });

     const handleChange = (e) => {
    //  let name,value;
    //  name = e.target.name;
    //  value = e.target.value;

     setuser({
        ...user,
        [e.target.name]: e.target.value
      });
    }

    console.log(user)

    return(
        <section className="form">
            <div className="container mt-5">
                <div className="form-content">
                    <div className="login-form">
                        <h2 className="form-title">Input Form</h2>
                        <form className="register-form" id="register-form">
                            <div className="form-group">
                                <h5>Name</h5>
                                <input type="text" name="name" id= "name" autocomplete= "off" 
                                value={user.name}
                                onChange={handleChange}
                                placeholder= "Your Name"/>                            
                            </div>

                            <div className="form-group">
                                <h5>Email Address</h5>
                                <input type="text" name="email" id="email" 
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Your Email"/> 
                            </div>

                            <div className="form-group">
                                <h5>Date of Birth</h5>
                                <input type="text" name="dob" id="dob" 
                                value={user.dob}
                                onChange={handleChange}
                                placeholder="Your Date of Birth"/> 
                            </div>

                            <div className="form-group">
                                <h5>Gender</h5>
                                <input type="radio" name="gender" value="male" id="gender" onChange={handleChange}/> Male
                                <input type="radio" name="gender" value="female" id="gender" onChange={handleChange}/> Female
                            </div>

                            <div className="form-group">
                                <h5>Level of Education</h5> 
                                <select className= "custom-select" name="education" value={user.education} onChange= {handleChange}>
                                      <option value="BA">BA</option>    
                                      <option value="B.Com">B.Com</option>
                                      <option value="BE">BE</option>
                                      <option value="B.Tech">B.Tech</option>
                                      <option value="B.Farma">B.Farma</option>
                                    </select>
                                    
                            </div>

                            <div className="form-group">
                                <h5>Password</h5>
                                <input type="text" name="password" id="password"  
                                value={user.password}
                                onChange={handleChange}
                                placeholder="Your password"/> 
                            </div>

                            <div className="form-group">
                                <h5>Confirm Password</h5>
                                <input type="text" name="cpassword" id="cpassword"  
                                value={user.cpassword}
                                onChange={handleChange}
                                placeholder="confirm your password"/> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Form;