import React from 'react';
import data from './data';
import Header from './components/Header';
import Modal from './components/Modal';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      galleryInfo: data
    }
    this.handlePopup = this.handlePopup.bind(this);
  }

  handlePopup(id){
    let src;
    // loop through data and get the src data of the image that was clicked on
    const gallerys = this.state.galleryInfo.map((item) => {
      if(item.id === id){
        src = item.image;
      }
      return item;
    });
    // make the modal visable
    const modal = document.querySelector('.bg-modal');
    // if the screen is minimum 768px wide
    if(window.matchMedia('(min-width: 768px)').matches){
      // display modal box
      modal.style.display = 'block';
      // insert src path to the img tag
      const modalImg = document.querySelector('.modal-img');
      modalImg.setAttribute('src', src);
    }
  }

  handlePopupClose() {
    // stop displaying the modal
    const modal = document.querySelector('.bg-modal');
    modal.style.display = 'none';
  }

  render(){
    const mainComponents = this.state.galleryInfo.map((info) => {
      return <MainComponent key={info.id} info={info} handlePopup={this.handlePopup}/>
    });

    return(
      <div className='container'>
        <Modal handlePopupClose={this.handlePopupClose}/>
        <Header />
        <div className='wrapper'>
          {mainComponents}
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
