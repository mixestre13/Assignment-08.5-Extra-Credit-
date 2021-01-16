import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, logIn, logOut} from './actions';


function App() {
  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state=>state.isLogged);
  
  const dispatch = useDispatch();

  return (
    <div className="App">
     

     <img src="sq.gif" class="center" width= "250px" height= "250px"/>
        <button className="myButton setMargin" onClick={() => dispatch(increment(1))}>+</button>
        <button className="myButton setMargin" onClick={() => dispatch(decrement(1))}>-</button>
         <h1>Counter: {counter}</h1>
         <br></br>
        {/* Display Log in/out button based on isLogged state */}
        {!isLogged ? 
        <button className="myButton setMargin" onClick={() => dispatch(logIn())}>Log In</button> 
        : <button 
        className="myButton setMargin" onClick={() => dispatch(logOut())}>Log Out</button>}
      {isLogged ? <h3>If you are seeing this you are logged in </h3> : ""}
    </div>
  );
}

export default App;
