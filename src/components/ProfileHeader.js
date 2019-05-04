import Form from './containers/Form';
import { Button, Divider, Image, Grid, Segment } from 'semantic-ui-react';
// import { ReactComponent } from '*.svg';
import React, { Component } from 'react';

export default class ProfileHeader extends Component {
  constructor(props) {
    super();
    console.log('HEADER CONSTRUCTOR :', this.props);
    this.state = {
      user_id: '',
      username: '',
      email: '',
      token: ''
    };
  }
  componentDidMount() {
    console.log('HEADER DID MOUNT :', this.props.user);
    let userDataItems = localStorage.getItem('auth');
    let auth = JSON.parse(userDataItems);
    console.log('USERNAME AUTH  :', auth);
    console.log('USERNAME  :', auth['username']);
    let username = auth['username'];
    let name = auth['name'];
    let token = auth['token'];
    let user_id = auth['user_id'];
    this.setState({
      user_id: user_id,
      username: username,
      token: token,
      name: name
    });
    let assets = localStorage.getItem('assets');
  }
  render() {
    console.log('HEADER RENDER :', this.props);
    return (
      <div >
        <Segment placeholder className="profile-header-wrapper-style" style={{background: '#e9eced'}}>
          {/* <Form /> */}
          <Grid columns={2} className="profile-header-style" relaxed="very" stackable>
            <Grid.Column className="profile-header-style">
              <Image src="./stevie.jpg" size="small" />
              <span
                style={{
                  color: '#FFF',
                  background: 'rgb(35,205,253)',
                  'padding-left': '8px',
                  'padding-right': '8px',
                  'padding-top': '5px',
                  'padding-bottom': '5px',
                  'border-radius': '5px',
                  display: 'inherit',
                  // width: '153px',
                  'margin-top': '7px'
                }}
              >
                {this.state.name}{' '}
              </span>
              <span
                style={{
                  color: '#FFF',
                  background: 'rgb(35,205,253)',
                  'padding-left': '8px',
                  'padding-right': '8px',
                  'padding-top': '5px',
                  'padding-bottom': '5px',
                  'border-radius': '5px',
                  display: 'inherit',
                  // width: '153px',
                  'margin-top': '7px'
                }}
              >
                {this.state.username}{' '}
              </span>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <h1
                className="ui block header edit-profile"
                onClick={() => this.props.showEditForm()}
              >
                Edit Profile
              </h1>
              <Form
                name={this.state.name}
                showName={() => this.props.showName()}
                username={this.props.username}
              >
                <Form />
                {/* <Form.Input
            icon="user"
            iconPosition="left"
            label="Username"
            placeholder={props.username}
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            label="Password"
            type={props.password}
          />
          <Button
            content="Submit"
            primary
            onClick={() => {
              props.patchOrPost();
            }}
          /> */}
              </Form>
            </Grid.Column>
          </Grid>

          <Divider vertical />
        </Segment>
      </div>
    );
  }
}
