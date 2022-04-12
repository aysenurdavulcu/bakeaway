import React from 'react';
// import '../../styles/index.css';
import "./navstyle.css"
import { Link } from 'react-router-dom';
function Login(props) {
  return (
    <a
      id='login'
      href='#'
      style={{
        backgroundColor: props.whiteBg ? 'none' : '#eee',
        border: '1px solid #ddd',
      }}
    >
      Login
    </a>
  );
}

function SignUp(props) {
  return (
    <a
      id='signup'
      href='#'
      style={{
        backgroundColor: props.whiteBg ? 'none' : '#eee',
        border: '1px solid #ddd',
      }}
    >
      Sign Up
    </a>
  );
}

class NavBar extends React.Component {
  render() {
    return (
      <div
        id='nav'
        style={{ backgroundColor: this.props.whiteBg ? 'white' : 'none' }}
      >
        <Link to='/'>
          <h1 id='nav-logo'>Bake Away</h1>
        </Link>
        <div>
          <Link id='dashboard' to='/Cart'>
           Cart
          </Link>
          <Link id="dashboard" to="/ResultPage">
          Login/signup
        </Link> 
   
          <Link id="dashboard" to="/ResultPage">
          About Us
        </Link> 
         </div>
      </div>
    );
  }
}

export default NavBar;