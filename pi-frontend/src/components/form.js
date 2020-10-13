import React from 'react';
import calculatePi from '../utilities/calculation.js';
import Visualization from './visualization.js';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0, piResult: 0.0, data: [], calculating: false};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.setState({calculating: true});
      fetch('/api/points?n=' + this.state.value)
        .then(res => res.json())
        .then(data => {
          const calculateResult = calculatePi(data, this.state.value);
          this.setState({value: this.state.value, piResult: calculateResult[0], data: calculateResult[1], calculating: false});
        },
        (err) => console.log(err)
      );
      event.preventDefault();
    }
  
    render() {
      const calculating = this.state.calculating;
      let result;
      if (calculating) {
        result = <p>Calculating...</p>
      } else {
        result = <p>PI number: {this.state.piResult} </p>
      }
      return (
        <div>
          <h2>PI Calculator</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Number of points:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Send" disabled={this.state.calculating}/>
          </form>
          <p>Only the first 5000 data points will be drawn.</p>
          <Visualization data = {this.state.data} />
          {result}
        </div>
      );
    }
}

export default Form;