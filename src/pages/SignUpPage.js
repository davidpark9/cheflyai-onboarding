import React, { useContext } from "react";
import { StateContext } from "../state";
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
 
  const {user, setUser} = useContext(StateContext);
  const navigate = useNavigate()
  

  const handleUsernameChange = (event) => {
    setUser({userName: event.target.value})
    console.log(user.userName)
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({userName: user.userName})
    navigate('/breakfast')
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={user.userName}
          onChange={handleUsernameChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
