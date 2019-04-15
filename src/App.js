import React from 'react';
import data from './data';
import Header from './components/Header';
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
    modal.style.display = 'block';
    // insert src path to the imh tag
    const modalImg = document.querySelector('.modal-img');
    modalImg.setAttribute('src', src);
  }

  render(){
    const mainComponents = this.state.galleryInfo.map((info) => {
      return <MainComponent key={info.id} info={info} handlePopup={this.handlePopup}/>
    });

    return(
      <div className='container'>
      <div className='bg-modal'>
        <div className='modal-content'>
          <i class="fas fa-times"></i>
          <img className='modal-img' alt='popup window' />
        </div>
      </div>
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
