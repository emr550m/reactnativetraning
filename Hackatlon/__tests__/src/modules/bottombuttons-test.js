import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import {BottomButtons} from '../../../src/modules/bottombuttons';

describe('BottomButtons -> ./src/modules/bottombuttons', () => {
  it(' should render View component as root item', () => {
    const tree = renderer.create(<BottomButtons />).toJSON();
    expect(tree.type).toEqual('View');
  });
  it(' should match snapshot', () => {
    const tree = renderer.create(<BottomButtons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
