import React from 'react'

const Signup = () => {
  return (
    <form className="signup">
      <input type="text" placeholder="Email" name="email" id="SignupEmail" />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="SignupPassword"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        id="SignupConfirmPassword"
      />
      <button type="submit" id="create-account-button">
        Sign up
      </button>
      <br />
    </form>
  );
}

export default Signup