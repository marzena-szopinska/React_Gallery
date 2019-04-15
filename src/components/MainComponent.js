import React from 'react';

function MainComponent(props) {
  return(
    <div className='info-box'>
      <h3>{props.info.title}</h3>
      <img onClick={() => props.handlePopup(props.info.id)} src={props.info.image} alt='beautiful image of nature'/>
      <p>{props.info.description}</p>
    </div>
  );
}

export default MainComponent;
