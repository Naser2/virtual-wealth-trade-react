import React, { Component } from 'react'
import Form from './components/containers/Form'
import axios from 'axios'
import {Redirect} from 'react-router'
import Search from './SearchBar'
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';

class Profile extends Component {
  state={
    edit: false,
    editted:false,
    delete: false,
    redirect:false,
  }

  componentDidMount(){
    if (this.props.loginUser===null){
      this.props.history.replace('/')
    }
    if (this.props.loginUser !== null){
      console.log("have a user")
    }
  }

  editHandler = () =>{
    this.setState({
      edit:true
    })
  }

  deleteHandler = () => {
    this.setState({
      delete:true
    })
  }

  patchOrPost = (obj) =>{
    axios.patch(`http://localhost:3001/users/${obj.id}`,{name:obj.name,username:obj.username,password:obj.password})
    .then(response => this.setState({
      editted:true,
      edit:false
    })
  )}

  YesHandler = () =>{
    axios.delete(`http://localhost:3001/users/7`)
    this.setState({
      redirect:true,
      delete:false
    })}

  NoHandler = () =>{
    this.setState({
      delete:false
    })
  }

  showEditOrProfile = () => {
    if (this.state.edit){
      return(
        <Form showName={true} name="Nasser" username="Nas" password="123" SubmitHandler={this.patchOrPost}/>
        )
    }
    else if (this.state.delete) {
      return(<div>
      <h1>Are You Sure you want to delete your profile?</h1>
      <button onClick={()=>this.YesHandler()}>Yes</button>
      <button onClick={()=>this.NoHandler()}>Take Me Back</button>
      </div>)
    }
    else if (this.state.redirect){
      console.log("redirect")
      return <Redirect to="/"/>
    }
    else{
      return(<div>
    {this.state.editted ? <p>Edit Saved</p> : null}
    <p>Options</p>
    <table className="TableName">
      <tbody>
    <tr className="options"onClick={this.editHandler}>Edit</tr>
    <tr className="options"onClick={this.deleteHandler}>Delete</tr>
    </tbody>
  </table>
</div>
    )

    }
  }
  render() {
    console.log('sdsadada', this.props)
    return (
      <div>
     Hello
      {this.showEditOrProfile()}
     hello Profile
    </div>
    )
  }
}

export default withRouter(Profile)
