import React from 'react'

const Popup = () => {
  return (
    <div id="popup-container">
      <div className={openPopUp ? "popup open-popup" : "popup"} id="popup">
        <img
          src="https://www.pngall.com/wp-content/uploads/9/Green-Tick-Vector-PNG-Images.png"
          alt=""
        />
        <h2>Login Successful</h2>
        <p>You will be redirected in {seconds} seconds</p>
        <button onClick={closePopUpBar} type="button" id="closeBtn">
          OK
        </button>
      </div>
    </div>
  );
}

export default Popup