import React, { Component } from 'react'
import Form from './components/containers/Form'
import axios from 'axios'
import {Redirect} from 'react-router'
class Profile extends Component {
  state={
    edit: false,
    editted:false,
    delete: false,
    redirect:false
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
    axios.patch(`http://localhost:3000/users/${obj.id}`,{name:obj.name,username:obj.username,password:obj.password})
    .then(response => this.setState({
      editted:true,
      edit:false
    })
  )}
  YesHandler = () =>{
    axios.delete(`http://localhost:3000/users/7`)
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
        <Form name="Tyler" username="tsh" password="123" patchOrPost={this.patchOrPost}/>
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

    return (
      <div>
      {this.showEditOrProfile()}
    </div>
    )
  }
}

export default Profile
