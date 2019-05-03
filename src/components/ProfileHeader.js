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
  }
  render() {
    console.log('HEADER RENDER :', this.props);
    return (
      <div>
        <Segment placeholder>
          {/* <Form /> */}
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
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
                {this.props.name}{' '}
              </span>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <h1
                className="ui block header"
                onClick={() => this.props.showEditForm()}
              >
                Edit Profile
              </h1>
              <Form
                name={this.props.name}
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
