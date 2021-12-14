import React from "react";
import PropTypes from "prop-types";

function LoginForm({ loginUser }) {
  return (
    <div className="Form">
      <form onSubmit={(e) => loginUser(e)}>
        <label htmlFor="name">Name</label>
        <input type="name" name="name" placeholder="Enter name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="******" />
        <button className="Submit" type="Submit">
          Login
        </button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  loginUser: PropTypes.func,
};

export default LoginForm;
