import React from "react";
import "../Styles/Modal.css"
import {useState} from "react";

function Modal({ setOpenModal }) {
  const [logindata, setLogindata] = useState({
    username: "", 
    password:""
  });
  console.log(logindata)
  function handleChange(event){
    // console.log(event.target.name)
    // console.log(event.target.value)
    setLogindata(prevdata => {
      return{
        ...prevdata,
       [event.target.name]: event.target.value
      }
    })
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
         
          </button>
        </div>
        <div className="title">
       
          {/* <h1>Are You Sure You Want to Continue?</h1> */}
        </div>
        <div className="body">
        <form>
          <label>
            Username:
            <input type="text" name="username" onChange={handleChange}/>
          </label>
          <br></br>
          <label>
            Password:
            <input type="text" name="password" onChange={handleChange} />
          </label>
        </form>
          {/* <p>The next page looks amazing. Hope you want to go there!</p> */}
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;