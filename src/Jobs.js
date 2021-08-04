import React from "react";
import axios from "axios";
import "./jobs.css";

class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://bion-92e43-default-rtdb.europe-west1.firebasedatabase.app/text.json"
      )

      .then((results) => {
        console.log(results);
        const fetchedResults = [];
        for (let key in results.data) {
          fetchedResults.unshift({
            ...results.data[key].data,
            id: key
          });
        }
        this.setState({ results: fetchedResults });
      });
  }

  render() {
    return (
      <div className="jobs">
        {this.state.results.map((results) => (
          <Results key={results.id} text={results.text} />
        ))}
      </div>
    );
  }
}

const Results = (props) => <div className="card">Message:{props.text}</div>;

export default Jobs;
