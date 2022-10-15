import React from 'react';
import img1 from '../Images/hat2.png'; 
import '../css/Header.css';

function Header(props) {
  return (
  <header className="App-header">
    <img src= {img1} alt="a logo"  className="headImage" />
    <h1><u>Jose's Mexican Delights</u></h1>
    <h2>{props.loggedIn ?  `Good Day, ${props.name}` : 'Please log in'}</h2>
  </header>)
}
//the ternary function greets the user since the props.loggedIn condition is true
export default Header; 