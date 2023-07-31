import React from 'react'
import { Link } from 'react-router-dom'


export default function Login() {
    const [formData, setFormData] = React.useState(
        {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            value: ""
        }
    )
    function handleChange(event) {

        const {name, value} = event.target
        setFormData(prevData => (
            {
                ...prevData,
                [name] : value
            }
        ))
    }
    
    return (
        <div className='form'>
            <h2 style={{textAlign: "center"}}>Sign up</h2>
            <form method='post' action='https://16.171.196.4:443/signup'>
                    <input 
                        type="text" 
                        name="username" 
                        id="name" 
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        required 
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        required 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword"
                        required 
                        placeholder="Confirm Password" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                <button>Sign up</button>
            </form>
            <br />
            <p className="signup">Already created an account?&nbsp;
                <Link to="/" className="signup--link">Login</Link>
            </p>
        </div>
    )
}