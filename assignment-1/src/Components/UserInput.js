import React from 'react';

const userInput = (props) => {

  const style = {
    border: '1px solid black',
    padding: '10px',
    background: 'black',
    color: 'white'
  }

  return <input
          style={ style }
          type="text" 
          onChange={props.changed}
          value={props.currentName} /> ;

};

export default userInput;