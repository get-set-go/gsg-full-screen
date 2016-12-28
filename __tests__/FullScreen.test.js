import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import FullScreen from '../src';

describe('<FullScreen /> component', function() {

  it('should fullscreen exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<FullScreen />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
