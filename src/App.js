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
  }

  render(){
    const mainComponents = this.state.galleryInfo.map((info) => {
      return <MainComponent key={info.id} info={info}/>
    });

    return(
      <div className='container'>
      <div className='bg-modal'>

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
