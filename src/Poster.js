import React from "react";
import axios from "axios";
import "./poster.css";

class Poster extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      text: []
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      text: this.state.text
    };

    axios
      .post(
        `https://bion-92e43-default-rtdb.europe-west1.firebasedatabase.app/text.json`,
        { data }
      )

      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("Your message is submited!");
      });
  }

  render() {
    return (
      <div className="poster">
        <form onSubmit={this.handleSubmit}>
          <label>Message:</label>
          <br />
          <textarea name="text" onChange={this.handleChange} />

          <br />
          <button type="submit">SEND</button>
        </form>
      </div>
    );
  }
}

export default Poster;
