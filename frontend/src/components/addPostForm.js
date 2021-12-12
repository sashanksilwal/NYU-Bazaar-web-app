import React from "react";
import PropTypes from "prop-types";

export default function AddPostForm({ submitPost }) {
  return (
    <div className="Form">
      <h2>Add Item</h2>
      <form onSubmit={(e) => submitPost(e)}>
        <label htmlFor="name">Enter Item Name</label>
        <input type="name" name="name" placeholder="Enter name" />

        <label htmlFor="description">Description</label>
        <input type="text" name="description" placeholder="Enter description" />

        <label htmlFor="price">Price</label>
        <input type="price" name="price" placeholder="Enter price" />

        <label htmlFor="text">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter Pickup Location"
        />

        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

AddPostForm.propTypes = {
  submitPost: PropTypes.func,
};
