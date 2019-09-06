import React, { Component } from "react";
import { API_URL } from "../Nav/config";

class UpdateComment extends Component {
  state = {
    name: this.props.read.name,
    comment: this.props.read.comment
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // fix updating with empty state
  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    console.log(this.props.read._id);
    await fetch(`${API_URL}/comments/${this.props.read._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state)
    })
      .then(() => alert("Updated Succesfully"))
      .then(() => this.props.closeUpdate())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Update Comment</h1>
        <input
          type="text"
          value={this.state.comment}
          name="comment"
          placeholder="Update Comment"
          onChange={this.handleChange}
        />
        <br />
        <textarea
          type="text"
          value={this.state.name}
          name="name"
          placeholder="Update Name"
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" readOnly />
      </form>
    );
  }
}

export default UpdateComment;
