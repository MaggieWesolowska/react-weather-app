import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type='text'
        value={props.value}
        placeholder='Enter City'
        onChange={props.change}></input>
      <button>Search City</button>
    </form>
  );
};

export default Form;
