import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { naem: "Hanako", age: 5 },
    { naem: "Noname" }
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
  return <div>I am {props.name}, ans {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
