import React, { Component } from 'react'

 class BackgroundImage extends Component {
  state ={
  x: '',
  y:''
  }
  componentDidMount(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
    this.setState({x:x,y:y});
  }
  render() {

    
      return (
        <div>
        <img className='bg' src={'https://source.unsplash.com/'+this.state.x+'x'+this.state.y+'/?nature'} />
      </div>
      )
 
      }

  }


export default BackgroundImage;
