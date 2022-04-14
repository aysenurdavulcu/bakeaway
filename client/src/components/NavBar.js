import "../Styles/navstyle.css"
import { Link } from 'react-router-dom';
import Modal from "../components/Modal";
import React, {useState } from "react";
export default function Navbar() {
    const [modalOpen, setModalOpen] = useState(false);

  return (


      <div className='navbar'>

          {/* <img className='nav-img' src={BackgroundImage} alt='NYC Apartments' /> */}

          <div className='nav-buttons'>
              <div className='nav-home-btn'> <Link to='/'>BakeAway </Link></div>
              {/* <img className='nav-logo' src={Logo} alt='Building and map pin(https://www.flaticon.com/free-icon/houses_353354#)' /> */}
              <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Login/Signup
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </div>

      </div>
  )
}