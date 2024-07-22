import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [positionError, setPositionError] = useState("");


  const navigate = useNavigate();

  const onButtonClickRegister = () => {

    setPasswordError('')
    setPositionError('')
    setNameError('')

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }

    if (position == ""){
      setPositionError('Please select a position')
      return
    }

    if (name == ""){
      setNameError('Please type in your name')
      return
    }


    navigate("/signUp");

}

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Registration Form</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={name}
          placeholder="Enter your name here"
          onChange={(ev) => setName(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <label className="errorLabel">{nameError}</label>
      <br />
      <div className={"inputContainer"}>
        <select
          value={position}
          onChange={(ev) => setPosition(ev.target.value)}
          className={"inputBox"}
        >
          <option value="">Select your position</option>
          <option value="Student">Student</option>
          <option value="Mentor">Mentor</option>
          <option value="Lead">Lead</option>
        </select>
      </div>
      <label className="errorLabel">{positionError}</label>
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
      <p>
        Your email id will be in the format <i>name@position.com</i>. For
        example, <i>ihsan@student.com</i>
      </p>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClickRegister}
          value={"Register"}
        />
      </div>
    </div>
  );
};

export default SignUp;
