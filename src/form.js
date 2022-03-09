import { useState } from "react";

const form = () => {

    const [user, setuser] = useState({
        name:"",Email:"",address:"",dob:"",gender:"", education:"",password:"",cpassword:""
    });

    let namae,value;

    const handleInputs = (e) => {
     console.log(e);
     name = e.target.name;
     value = e.target.value;

     setuser({...user, [name]:vlaue});
    }


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
                                onChange={handleInputs}
                                placeholder= "Your Name"/>                            
                            </div>

                            <div className="form-group">
                                <h5>Email Address</h5>
                                <input type="text" name="email" id="email" autocomplete="off" 
                                value={user.email}
                                onChange={handleInputs}
                                placeholder="Your Email"/> 
                            </div>

                            <div className="form-group">
                                <h5>Date of Birth</h5>
                                <input type="text" name="dob" id="dob" autocomplete="off" 
                                value={user.dob}
                                onChange={handleInputs}
                                placeholder="Your Date of Birth"/> 
                            </div>

                            <div className="form-group">
                                <h5>Gender</h5>
                                <input type="text" name="gender" id="gender" autocomplete="off" 
                                value={user.gender}
                                onChange={handleInputs}
                                placeholder="select your gender"/> 
                                <input type="radio" name="gender" value="male" id="gender" autocomplete="off"onchange={e=> setgender(e.target.value)}/> Male
                                <input type="radio" name="gender" value="female" id="gender" autocomplete="off" onchange={e=> setgender(e.target.value)}/> Female
                            </div>

                            <div className="form-group">
                                <h5>Level of Education</h5>
                                <input type="text" name="education" id="education" autocomplete="off" 
                                value={user.education}
                                onChange={handleInputs}
                                placeholder="select your Education"/> 
                                <select cleasName= "custom-select" onchange= {(e)=>{
                                      const selectededucation= e.target.value;
                                      seteducationstate (selectededucation);
                                    }}>
                                      <option value="BA">BA</option>
                                      <option value="B.Com">B.Com</option>
                                      <option value="BE">BE</option>
                                      <option value="B.Tech">B.Tech</option>
                                      <option value="B.Farma">B.Farma</option>
                                    </select>
                                    {educationstate}
                            </div>

                            <div className="form-group">
                                <h5>Password</h5>
                                <input type="text" name="password" id="password" autocomplete="off" 
                                value={user.password}
                                onChange={handleInputs}
                                placeholder="Your password"/> 
                            </div>

                            <div className="form-group">
                                <h5>Confirm Password</h5>
                                <input type="text" name="cpassword" id="cpassword" autocomplete="off" 
                                value={user.cpassword}
                                onChange={handleInputs}
                                placeholder="confirm your password"/> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
