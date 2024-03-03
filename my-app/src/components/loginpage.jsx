import React from 'react'
import l
function Loginpage() {
  return (
    <div>
        <h1>Login page</h1>
        <div className="inputs">
            <input type="text"  placeholder='username'/>
            <input type="password" placeholder='password'/>
        </div>
        <div className="submitbtn">
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Loginpage