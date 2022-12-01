import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg"
import visibilityIcon from "../assets/svg/visibilityIcon.svg"

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const navigate = useNavigate()

  return (
      <>
        <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome back</p>
        </header>

        <form>
          <input 
          type="email" 
          className="emailInput" 
          placeholder="Email" 
          id="email" 
           value={email}
           onChange={onChange} />

           <div className="passwordInputDiv">
            <input type={showPassword ? "text" : "password"} 
            className="passwordInput" 
            placeholder="Password" 
            value={password} id="password" 
            onChange={onChange} />

            <img 
            src={visibilityIcon} 
            alt="showPassword" 
            className="showPassword" 
            onClick={() => setShowPassword((prevState) =>!prevState)} />
           </div>

           <Link to="/forgot-password"
           className="forgotPasswordLink">
            Forgot Password
           </Link>

           <div className="signInBar">
            <p className="signInText">
              Sign In  
            </p> 
            <button className="signInButton">
              <ArrowRightIcon 
              fill="#ffffff" 
              width="34px" 
              height="34px" />
            </button>
           </div>
        </form>

        {/* google Oauth */}
        <Link to="/sign-up" className="registerLink">
          Sign up instead
        </Link>
      </div>
      </>
    )
  }
  
  export default SignIn
  