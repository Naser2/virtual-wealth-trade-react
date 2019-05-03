import React, { Component } from 'react';

export default class LogIn extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div
        class="ui grid container middle aligned login"
        style={{
          width: '639px !important',

          textAlign: 'center !important'
        }}
      >
        {/* <span class="IssueLabel d-inline-block v-align-middle" style="background-color: #d4c5f9;">
  <a class="lh-condensed-ultra" href="/facebook/create-react-app/labels/priority%3A%20low%20%28ignored%20issue%20template%29" style="color: #000000;">priority: low (ignored issue template)</a>
</span> */}
        <div class="column">
          <div
            className="ui segment top attached login"
            style={{
              textAlign: 'center',
              // lineHeight: '1',
              color: '#fff',
              background: 'rgb(17, 17, 18)',
              border:  '1px solid rgb(17, 17, 18) !important'
            }}
          >
            {' '}
            Login
          </div>
          <form
            class="ui form segment top attached green"
            onSubmit={e => this.props.loginUser(e, this.state)}
          >
            <div class="field ui left icon input fluid">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <i class="users icon" />
            </div>
            <div class="field ui left icon input fluid">
              <input
                type="text"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <i class="key icon" />
            </div>
            <button
              class="ui button fluid positive"
              type="submit"
              value="Login"
              style={{ background: '#0084cc' }}
            >
              Submit
            </button>
          </form>
          <div class="ui segment bottom attached">
            Not registered? <a href="!#">Sign up here</a>.
          </div>
        </div>
      </div>
    );
  }
}
