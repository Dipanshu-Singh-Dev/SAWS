import React from 'react'

const Signin = () => {
  return (
    <form className="login">
      <input type="email" placeholder="Email" name="email" id="SigninEmail" />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="SigninPassword"
      />
      <button id="signin-button">Sign in</button>
      <br />
    </form>
  );
}

export default Signin