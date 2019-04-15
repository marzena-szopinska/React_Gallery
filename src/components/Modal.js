import React from 'react';

function Modal(props) {
  return (
    <div className='bg-modal'>
      <div className='modal-content'>
        <i className="fas fa-times" onClick={props.handlePopupClose}></i>
        <img className='modal-img' alt='popup window' />
      </div>
    </div>
  );
}

export default Modal;
