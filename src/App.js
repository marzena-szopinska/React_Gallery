import React from 'react';
import galleryData from './galleryData';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      galleryInfo: galleryData
    }
  }

  render(){
    return(
      <div className='container'>
        <h1>React Gallery</h1>
        <Header />
        <MainComponent />
        <Footer />
      </div>
    );
  }

}

export default App;
