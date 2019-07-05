import React, { Component } from "react";
import axios from "axios";
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      error: '',
      url: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({url: event.target.value})
  }
  handleSubmit(event) {
    alert("event has been submitted" + this.state.url)
    axios
      .post("/recognition", this.state.url)
      .then(res => {
        console.log(res)
      })
    event.preventDefault();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>

            <label>
                image url:
                <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
            </label>
              <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}
export default App;
