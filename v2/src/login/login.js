import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClickLogin = async () => {
    // Set initial error values to empty
    setEmailError('');
    setPasswordError('');

    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email');
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    if ('' === password) {
      setPasswordError('Please enter a password');
      return;
    }

    if (password.length < 8) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });

      navigate("/lead-dashboard")

    //   // if (response.data.success) {
    //   //   navigate("/dashboard");
    //   // } else {
    //   //   setPasswordError('Invalid email or password');
    //   // }
    } catch (error) {
      console.error('There was an error logging in!', error);
      setPasswordError('An error occurred during login');
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          // onClick={onButtonClickSignUp}
          value={"Sign Up"}
        />
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClickLogin}
          value={"Log in"}
        />
      </div>
    </div>
  );
};

export default Login;
