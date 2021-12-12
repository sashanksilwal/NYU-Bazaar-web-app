import React from "react";
import PropTypes from "prop-types";

function CreateUserForm({ signUpUser }) {
  return (
    <div className="Form">
      <h2>Create User Form</h2>
      <form onSubmit={(e) => signUpUser(e)}>
        <label htmlFor="name">Name</label>
        <input type="name" name="username" placeholder="Enter name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="******" />
        <button type="Submit">CreateUser</button>
      </form>
    </div>
  );
}

CreateUserForm.propTypes = {
  signUpUser: PropTypes.func,
};

export default CreateUserForm;
