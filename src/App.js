import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import Form from './Components/Form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://localHost:3333/api/debtors',
      debts: [],
      total:[],
    }
  }
  componentDidMount() {
    axios.get(this.state.url)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }
  handleAdd = () => {

  }
  handleDelete = () => {

  }
  handleDeleteAll = () => {

  }
  handleUpdateDebt = () => {

  }
  handleRetrive = () => {

  }
  handleSearchID = () => {

  }


  render() {

    console.log(this.state.url)
    return (
      <div>
        <App />
        <Header />
        <Form />


      </div>
    )
  }
}
export default App;
