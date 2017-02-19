import React from 'react';
import {Link} from 'react-router';
const SVGImage = require('babel!svg-react!../images/placeholder.svg?name=SVGImage');

export default class HomePage extends React.Component {
  render() {
    return (
      <div>

        <h1>This is the HomePage Component.</h1>

        <figure>
          <SVGImage className="svg-image"/>
          <figcaption>SVG image</figcaption>
        </figure>

        <figure>
          <img src={require("../images/placeholder.png")} />
          <figcaption>PNG image</figcaption>
        </figure>

        <figure>
          <img src={require("../images/placeholder.jpg")} />
          <figcaption>JPG image</figcaption>
        </figure>



      </div>
    );
  }
}
