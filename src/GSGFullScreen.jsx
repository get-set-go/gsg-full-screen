import '../node_modules/gsg-common-style/less/button/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGFullScreen extends React.Component {
  constructor(props) {
    super(props);

    this.detectKeyPress = this.detectKeyPress.bind(this);
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    this.toggleFullScreenClass = this.toggleFullScreenClass.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.detectKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.detectKeyPress, false);
  }

  detectKeyPress(event) {
    const _ESCKEYCODE = 27;
    console.log(document.fullscreenElement);
    console.log(document.webkitfullscreenElement);
    console.log(document.mozfullscreenElement);
    console.log(document.msfullscreenElement);

    if (event.keyCode === _ESCKEYCODE && (document.fullscreenElement || document.webkitfullscreenElement || document.mozfullscreenElement || document.msfullscreenElement)) {
      this.toggleFullScreenClass();
    }
  }

  toggleFullScreenClass() {
    const _fullscreenDOM = ReactDOM.findDOMNode(this);
    _fullscreenDOM.classList.toggle('exit');
  }

  toggleFullScreen() {
    this.toggleFullScreenClass();

    const _docEl = document.documentElement;
    if (_docEl.webkitRequestFullscreen) {
      _docEl.webkitRequestFullscreen();
    } else if (_docEl.mozRequestFullScreen) {
      _docEl.mozRequestFullScreen();
    } else if (_docEl.msRequestFullscreen) {
      _docEl.msRequestFullscreen();
    } else {
      _docEl.requestFullscreen();
    }
  }

  render() {
    let _bClass = {
      'btn': true
    };

    if (!this.props.bStyle) {
      _bClass = objectAssign(_bClass, {
        'btn-default': true
      });
    } else {
      _bClass = objectAssign(_bClass, {
        [`btn-${this.props.bStyle}`]: true
      });
    }

    if (this.props.bSize) {
      _bClass = objectAssign(_bClass, {
        [`btn-${this.props.bSize}`]: true
      });
    }

    _bClass = classNames(_bClass);

    return(
      <button type="button" className={_bClass} onClick={this.toggleFullScreen}>{this.props.inText}</button>
    );
  }
};

GSGFullScreen.propTypes = {
  inText: PropTypes.string,
  outText: PropTypes.string,
  bStyle: PropTypes.string
};

GSGFullScreen.defaultProps = {
  inText: 'Switch to full screen',
  outText: 'Exit full screen',
  bStyle: 'default'
};
