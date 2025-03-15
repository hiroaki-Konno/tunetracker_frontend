import React from 'react';
import Greeting from './Greeting'


// PersonalizedGreeting コンポーネント
const PersonalizedGreeting = (props) => {
  return (
    <div>
      <Greeting name={props.name} />
      <p>Welcome to our application, {props.name}!</p>
    </div>
  );
}


export default PersonalizedGreeting;
