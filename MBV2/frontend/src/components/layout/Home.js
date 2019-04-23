import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <p>about me <Link to='/about'>About</Link></p>
      </div>
    )
  }
}

export default Home
