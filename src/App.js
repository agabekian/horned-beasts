import './App.css';
import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import Modal from 'react-bootstrap/Modal';
import data from './components/data.json'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allBeastData: data,
      selectedBeast:{},
      showModal: false
    }
  }
  // congratulate = (person) => {
  //   this.handleOpen();
  // }

  handleClose = () => {
    this.setState( { showModal: false })
  }

  handleOpen = (e) => {
    console.log(e.target.alt)
    let selectedBeast = this.state.allBeastData.find(beastObj=>beastObj.title ==e.target.alt );
    // console.log(selectedBeast);
    
      this.setState( { selectedBeast, showModal: true });

    
  }

  render() {
    return (
      <>
        <Header />

        <Main 
            allBeastData={this.state.allBeastData}
            handleOpen={this.handleOpen}

        />
        <SelectedBeast 
          selectedBeast={this.state.selectedBeast}
          showModal = {this.state.showModal}
          handleClose={this.handleClose}
        />
        
        <Footer />
      </>

    )
  }

}

export default App;
