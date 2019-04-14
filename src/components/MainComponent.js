import React from 'react';

function MainComponent(props) {
  return(
    <div className='info-box'>
      <h3>{props.info.title}</h3>
      <img src={props.info.image} alt=''/>
      <p>{props.info.description}</p>
    </div>
  );
}

export default MainComponent;
