import './App.css';
import React from 'react';
import data from './components/data.json'
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import Form from './components/Form';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false,
      beasts: data
    }
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  handleOpen = (e) => {
    // console.log(e.target.alt)
    let selectedBeast = data.find(beastObj => beastObj.title === e.target.alt);
    this.setState({ selectedBeast, showModal: true });
  }

  handleChange = (event) => {

    let filter = event.target.value;
    // State only contains what we're planning to render out
    // console.log(typeof (filter)); haha - it's a string no wonder I was baffled.
    let filteredBeasts = [];
    if (filter) {
      filteredBeasts = data.filter(b => b.horns === Number(filter));
    }
    if (filter === "All") {
      filteredBeasts = data;
    }
    this.setState({ beasts: filteredBeasts });
  }

  render() {
    return (
      <>
        <Header />
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <Main
          handleOpen={this.handleOpen}
          data={this.state.beasts}
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
