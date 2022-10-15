import React from 'react';
import { useLocation } from 'react-router-dom';
//by importing the line below I can use the Link tag of the react-router-dom
import { Link } from 'react-router-dom';
import '../css/Menu.css';


function Menu() {
  //the useLocation function gives me access to the location prop in react router
  const location = useLocation();
 //the function below matches the location prop to the url
  const isCurrentUrl = (url) => {
    return location.pathname.toLowerCase() === url.toLowerCase();
  }
  return(
    <div className="menu">
      <ul className="links">
        {/*each link below is a ternary condition that makes the link visible when it is not clicked*/}
        { !isCurrentUrl('/profile') ? <Link to='/profile'>Profile</Link> : null }
        { !isCurrentUrl('/shop') ? <Link to='/shop'>Shop</Link> : null }
        { !isCurrentUrl('/') ? <Link to='/'>Home</Link> : null }
      </ul>
    </div>
  )
}

export default Menu;