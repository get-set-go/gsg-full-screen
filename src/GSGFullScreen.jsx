import '../node_modules/gsg-common-style/less/button/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGFullScreen extends React.Component {
  constructor(props) {
    super(props);

    this.fullscreen = this.fullscreen.bind(this);
  }

  fullscreen() {
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
    <button type="button" className={_bClass} onClick={this.fullscreen}>{this.props.children}</button>
    );
  }
};

GSGFullScreen.propTypes = {
  bStyle: PropTypes.string
};

GSGFullScreen.defaultProps = {
  bStyle: 'default'
};
