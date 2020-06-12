import React from "react";

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false,
    };
  }

  componentDidMount() {
    // Executes after mouting
    fetch("https://randomuser.me/api/")
      .then((response) => {
        if (response.status !== 200) {
          return "Error. Status Code: " + response.status;
        }
        response.json().then((result) => console.log(result)); // do sth with data
      })
      .then((d) => d.json())
      .then(
        (d) => {
          this.setState({
            data: d,
          });
        },
        () => {
          this.setState({
            requestFailed: true,
          });
        }
      );
  }

  render() {
    if (this.state.requestFailed) return <p>Request failed.</p>;
    if (!this.state.data) return <p>Loading</p>;

    return <h1>{this.state.data.results[0].gender}</h1>;
  }
}
