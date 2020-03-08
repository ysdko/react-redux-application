import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "jgfj", age : 4 }
  ]
  return (
    <div>
      {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I am {props.name}, and {props.age} years old!</div>
}


User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
