import React, { useState } from "react";
import './loginpage.css';
import { useFormik } from "formik";
import * as yup from 'yup';


function Loginpage() {
    const [arr, setArr] = useState([]);
  

    const formik = useFormik({
        initialValues: {
            username: "",
            lastname: "",
            password: ""
        },
        validationSchema: yup.object({
            username: yup.string().required("*").min(2).max(50),
            lastname: yup.string().required("*").min(2).max(50),
            password: yup.string().required("*").min(8),
            email: yup.string().email("InValid Mail").required("*")
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    });
    return (
        <div className="datacontainer">
            <form onSubmit={formik.handleSubmit} className="formcontainer">
                <h1 >Registration page</h1>
                <label className="labeltext">FirstName:-</label> <input type="text" name="username" onChange={formik.handleChange} placeholder="Username"/><br />
                {formik.errors.username ? <div className="errormsg">{formik.errors.username}</div> : <></>}
                <label htmlFor="" className="labeltext">LastName:-</label> <input type="text" name="lastname" onChange={formik.handleChange} placeholder="Lastname"/><br />
                {formik.errors.lastname ? <div className="errormsg">{formik.errors.lastname}</div> : null}
                <label className="labeltext">Password:-</label> <input type="password" name="password" onChange={formik.handleChange} placeholder="Password"/><br />
                {formik.errors.password ? <div className="errormsg">{formik.errors.password}</div> : <></>}
                <label>Gmail:- </label> 
                {formik.errors.email ? <span  className="errormsg">{formik.errors.email}</span>: null}
                 <br /><input type="text"  name="email" onChange={formik.handleChange} placeholder="Enter Gmail"/>
                <button className="btn btn-primary p-3 m-3" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Loginpage;