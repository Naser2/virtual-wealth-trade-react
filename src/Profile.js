import React, { Component } from 'react'
import Form from './components/containers/Form'
import axios from 'axios'
import { Redirect } from 'react-router'
import Search from './SearchBar'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import CurrencyCollection from './components/presentational/CurrencyCollection'
import CoinDetails from './CoinDetails'

class Profile extends Component {
  state = {
    edit: false,
    editted: false,
    delete: false,
    redirect: false,
    selected: [],
    theCoin: null,
    showCoin: false

  }

  componentDidMount() {
    if (this.props.loginUser === null) {
      this.props.history.replace('/')
    }
    if (this.props.activeUser !== null) {
      let assets = localStorage.getItem('assets');
      const { username } = this.props.activeUser;
      console.log(username, assets, 'username, assets');
      if (assets) {
        assets = JSON.parse(assets);
        if (assets[username]) {
          this.setState({
            selected: assets[username],
          })
        }
      }
    }
  }

  editHandler = () => {
    this.setState({
      edit: true
    })
  }

  deleteHandler = () => {
    this.setState({
      delete: true
    })
  }

  patchOrPost = (obj) => {
    axios.patch(`http://localhost:3001/users/${obj.id}`, { name: obj.name, username: obj.username, password: obj.password })
      .then(response => this.setState({
        editted: true,
        edit: false
      })
      )
  }

  YesHandler = () => {
    axios.delete(`http://localhost:3001/users/7`)
    this.setState({
      redirect: true,
      delete: false
    })
  }

  NoHandler = () => {
    this.setState({
      delete: false
    })
  }

  showEditOrProfile = () => {
    if (this.state.edit) {
      return (
        <Form showName={true} name="Nasser" username="Nas" password="123" SubmitHandler={this.patchOrPost} />
      )
    }
    else if (this.state.delete) {
      return (<div>
        <h1>Are You Sure you want to delete your profile?</h1>
        <button onClick={() => this.YesHandler()}>Yes</button>
        <button onClick={() => this.NoHandler()}>Take Me Back</button>
      </div>)
    }
    else if (this.state.redirect) {
      console.log("redirect")
      return <Redirect to="/" />
    }
    else {
      return (<div>
        {this.state.editted ? <p>Edit Saved</p> : null}
        <p>Options</p>
        <table className="TableName">
          <tbody>
            <tr className="options" onClick={this.editHandler}>Edit</tr>
            <tr className="options" onClick={this.deleteHandler}>Delete</tr>
          </tbody>
        </table>
      </div>
      )

    }
  }

  imageHandler = (obj) => {
    console.log("image handler")
    this.setState({
      theCoin: obj,
      showCoin: true
    })
  }

  BackHandler = () => {
    this.setState({
      theCoin: null,
      showCoin: false
    })
  }
  render() {

    //console.log('MY PROPSSS', this.props)
    console.log('MY STATE', this.state.selected)
    //console.log(this.props.loginUser, 'this.props.loginUser')
    return (
      <div>
        {this.showEditOrProfile()}
        {this.state.showCoin ? <CoinDetails BackHandler={this.BackHandler} coin={this.state.theCoin} /> : null}
        <ul id="list">
          <CurrencyCollection imageHandler={this.imageHandler} active={this.props.active ? true : false} cryptos={this.state.selected} activeUser={this.props.activeUser} profile={true} />
        </ul>
      </div>
    )
  }
}

export default withRouter(Profile)
