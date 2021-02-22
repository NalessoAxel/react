import React from 'react'

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          clicks: 0 
        };
    }
  
    clicked = () => {
        this.setState({
            clicks: this.state.clicks +1
        })
    }
  
    render() {
      return (
        <div>
          Clicks: {this.state.clicks}
          <button onClick={this.clicked}>Click me</button>
        </div>
      );
    }
  }
  
 export default Timer