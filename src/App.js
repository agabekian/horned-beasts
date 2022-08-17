import './App.css';
import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import data from './components/data.json'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false
    }
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  handleOpen = (e) => {
    // console.log(e.target.alt)
    let selectedBeast = data.find(beastObj => beastObj.title === e.target.alt);
    // console.log(selectedBeast);
    this.setState({ selectedBeast, showModal: true });
  }

  render() {
    return (
      <>
        <Header />

        <Main
          handleOpen={this.handleOpen}
        />

        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          showModal={this.state.showModal}
          handleClose={this.handleClose}
        />

        <Footer />
      </>

    )
  }

}

export default App;
