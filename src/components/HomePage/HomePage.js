import React from 'react';
import './homepage.scss';

export default class HomePage extends React.Component {

  render() {
    return (
      <div>
        <img src={require("../../../public/images/react-js-img.png")} />
        <h1 className="primary">React Template HomePage</h1>

        <h5>CSS/Sass</h5>
        <p>Use either <strong>CSS</strong> or <strong>SCSS</strong>, simple change the file extension as required.</p>
        <p>CSS/SCSS files can be stored in the component folder, or in the 'styles' folder</p>
        <h5>Image types</h5>
        <p>All image types enabled: GIF, JPEG, JPG, PNG, SVG</p>

        <h5>Testing</h5>
        <p>Test can be written in ES6, test files are transpiled to ES5 for Mocha and Istanbul</p>
        <p>Test files can be in the component folder or in the 'tests' folder </p>
        <p>All test files name <strong>'*.spec.js'</strong> will found</p>
        <p>Run testing: <code>npm run test</code></p>
        <p>Run tests and view code coverage in browser: <code>npm run coverage</code></p>

      <h5>Build</h5>
        <p>Run build: <code>npm run build</code></p>
        <p>Build files will open in the browser so you can check for errors</p>
      </div>
    );
  }
}
