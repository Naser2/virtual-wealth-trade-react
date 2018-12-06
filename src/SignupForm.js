import React, { Component } from 'react'

export default class SignupForm extends Component {

  state ={
    name: '',
    username:'',
    password: ''
  }


  handleChange = (e) => {
     this.setState({
      [ e.target.name]: e.target.value
     })
  }

  // <form onSubmit={(e)=>this.props.handleSubmit(e,this.state)}>
  // <h1>Please Sign</h1>
  // <input type="text" name="name" placeholder="name" value={this.state.name}  onChange={this.handleChange}/>
  // <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
  // <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
  // <input type="submit" />
  // </form>
  render() {
    return (
      <div class="ui grid container middle aligned" >
      <div class="column">
      <div class="ui segment top attached"> Sign Up</div>
        <form class="ui form segment top attached green" onSubmit={(e)=>this.props.handleSubmit(e,this.state)}>
          <div class="field ui left icon input fluid">
          <input type="text" name="name" placeholder="name" value={this.state.name}  onChange={this.handleChange}/>
          <br />
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
            <i class="users icon"></i>
          </div>
          <div class="field ui left icon input fluid">
            <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />  
            <i class="key icon"></i>
          </div>
          <button class="ui button fluid positive" type="submit" value="Login"style={{background: '#0084cc'}} >Submit</button>
        </form>  
        <div class="ui segment bottom attached"> <a >Welcome to Virtual Weatlth</a>.</div>
      </div>
    </div>
  
  

    )
  }
}
