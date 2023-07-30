import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
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
        console.log(formData)
    }

    return (
        <div className="form">
            <h2 style={{textAlign: "center"}}>Login</h2>
            <form method="post" action='http://localhost:8080/login'>
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
                        required 
                        id="password" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                <button>Log in</button>
            </form>
            <br />
            <p className="signup">Don't have an account?&nbsp;
                <Link to="/signup" className="signup--link">Register</Link>
            </p>
        </div>
    )
}