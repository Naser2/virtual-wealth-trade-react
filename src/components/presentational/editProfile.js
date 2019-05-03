import React from 'react';
import { Image, Reveal, Form } from 'semantic-ui-react';
// import 'sweetalert/dist/sweetalert.css'
const RevealExampleFade = props => (
  <Reveal animated="fade">
    <Reveal.Content visible>
      {/* <div className="ui raised container segment"> */}
      {/* <h1 className="ui block header">Edit Profile</h1> */}
      {/* </div> */}
      <Image src="./stevie.jpg" size="small" />
      <h5
        style={{
          color: '#FFF',
          background: 'rgb(35,205,253)',
          'padding-left': '8px',
          'padding-right': '8px',
          'padding-top': '5px',
          'padding-bottom': '5px',
          'border-radius': '5px'
        }}
      >
        {props.username}{' '}
      </h5>
    </Reveal.Content>
    <Reveal.Content hidden>
      <h1 className="ui block header" onClick={props.showEditFor}>
        Edit Profile
      </h1>
      <h5>{props.username} </h5>
    </Reveal.Content>
  </Reveal>
);

export default RevealExampleFade;
