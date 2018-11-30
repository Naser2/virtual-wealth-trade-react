import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Home from './Home'


export default class NoMAtch extends Component {
  render() {
    return (
      <div>
        Nothing to show
        <Redirect to="home"/>
      </div>
    )
  }
}
