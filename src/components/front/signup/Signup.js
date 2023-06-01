import React from 'react';
import "./Signup.css";

function Signup() {
    return (
      <div className="signup">
  <form action className="form">
    <h1 className="title">Sign up</h1>
    <div className="inputContainer">
      <input type="text" className="input" placeholder="a" />
      <label htmlFor className="label">Email</label>
    </div>
    <div className="inputContainer">
      <input type="text" className="input" placeholder="a" />
      <label htmlFor className="label">Username</label>
    </div>
    <div className="inputContainer">
      <input type="text" className="input" placeholder="a" />
      <label htmlFor className="label">Password</label>
    </div>
    <div className="inputContainer">
      <input type="text" className="input" placeholder="a" />
      <label htmlFor className="label">Confirm Password</label>
    </div>
    <input type="submit" className="submitBtn" defaultValue="Sign up" />
  </form>
</div>

        )
}

export default Signup