import React from 'react'
import axios from 'axios'
const Signup = () => {
const handleSubmit = (event)=>{
  event.preventDefault()
  const email = event.target.email.value;
  const password = event.target.password.value;
  axios.post("https://saws-backend.onrender.com/signup", { email, password }).then(res=>{
    window.alert("Signup Successful");
  }).catch((err)=>{
    window.alert("Failed to signup");
    console.log(err)
  });
}
  return (
    <form onSubmit={handleSubmit} className="signup">
      <input type="text" placeholder="Name" name="name" id="fullName" />
      <input type="text" placeholder="Email" name="email" id="SignupEmail" />

      <input
        type="password"
        placeholder="Password"
        name="password"
        id="SignupPassword"
      />
      <button type="submit" id="create-account-button">
        Sign up
      </button>
      <br />
    </form>
  );
}

export default Signup