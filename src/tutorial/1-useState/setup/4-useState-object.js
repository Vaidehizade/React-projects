import React, { useState } from 'react';

const UseStateObject = () => {

  const [person,setPerson] =useState({name: 'vaidehi',age:24, message:'random msg',});
  const [name,setName] = useState('vaidehi');
  const [age,setAge]= useState(24);
  const [message, setMessage] = useState('random msg');
  // console.log(person);
  const changeMsg = () =>{
    setPerson({...person, message: 'hello world'});  //spread operator for object 
  };
  return (

    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
       <h3>{message}</h3>
      <button className="btn" onClick={changeMsg}>change Message</button>
    </React.Fragment>
  );
};

export default UseStateObject;
