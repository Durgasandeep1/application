import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign up");

    return (
        <div className='Container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign up" && (
                    <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='name' />
                </div>
                )}
                
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='gmail'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="text" placeholder='password' />
                </div>
            </div>
            {action === "Login" && (
                <div className="forget-password">lost password? <span>Click Here!</span></div>
            )}
            <div className="submit-container">
                <div className={action === "Login"? "submit gray": "submit"} onClick={()=> {setAction("Sign up")}}>Sign up</div>
                <div className={action === "Sign up"? "submit gray": "submit"} onClick={()=> {setAction("Login")}}>Login</div>
            </div>
        </div>
    );
};

export default LoginSignup;
