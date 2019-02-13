/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

/****** ADD YOUR CODE AFTER THIS LINE ******/


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: "asdf"
      }
    }
  
    componentDidMount() {
      console.log(this);
      fetch('https://weatherapp.eficode.fi/api/forecast')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          data: JSON.stringify(myJson)
        });
      });
    }
  
    render() {
      return (
        this.state.data
      );
    }
  }
  

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
