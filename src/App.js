import React, {Component} from 'react';

const App = () => 
  (<Counter></Counter>)

class Counter extends Component{
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    console.log("ladhgak")
    console.log(this.state.count)
    // this.state = { count: this.state.count + 1 }
    this.setState({ count: this.state.count + 1})
  }

  handleMinusButton = () => {
    console.log(this.state.count)
    this.setState({count: this.state.count -1})
  }
  render() {
    console.log("test")
    return (
      
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
          )
  }
}

// const User = (props) => {
//   return <div>I am {props.name}, and {props.age} years old!</div>
// }


// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }
export default App;
