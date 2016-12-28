import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import FullScreen from '../dist/index.min';

class Page extends React.Component {
  render() {

    const inTextContent = (
      <i className="fa fa-lg fa-expand"></i>
    );

    const outTextContent = (
      <i className="fa fa-lg fa-compress"></i>
    );

    return (
      <div className="fullscreen-eg-container">
        <h1>Get-Set-Go FullScreen Component</h1>

        <p className="fullscreen-eg-group">
          <h4>FullScreen Styles</h4>

          <FullScreen inText={inTextContent} outText={outTextContent}></FullScreen>
        </p>

      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
