import React from 'react'
import './loginpage.css';
import { useFormik } from 'formik';
import Dataval from './dataval';
function Loginpage() {
    var [arr, setarr] = React.useState([])

    let formik = useFormik({
        initialValues: {
            username : '', 
            password: ''
        },
        onSubmit:(values)=> {
            setarr([...arr, values])
        }
    })
  return (
    <div className='datacontainer'>
    <form onSubmit={formik.handleSubmit}>
        <h1>Login page</h1>
      
            <input type="text" name='username' placeholder='username' onChange={formik.handleChange}/>
        
            <input type="password" name='password' onChange={formik.handleChange} />
   
            <button>Submit</button>

    </form>

    <div>
                
    <Dataval arr={arr}></Dataval>
    </div>

    </div>
    
    


    
  )
}

export default Loginpage