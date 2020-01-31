import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import {View} from 'react-native';
import {LoveIconButton} from '../../../src/components/iconbuttons/loveicon';
import {FileUploadIconButton} from '../../../src/components/iconbuttons/fileupload';
import {UserIconButton} from '../../../src/components/iconbuttons/usericon';
import {TopButtons} from '../../../src/modules/topbuttons';

describe('TopButtons -> ./src/modules/topbuttons', () => {
  it(' should render View component as root item', () => {
    const tree = renderer.create(<TopButtons />).toJSON();
    expect(tree.type).toEqual('View');
  });
  it(' View (root) component should have style { flex: 5, flexDirection: "row",  alignContent: "flex-end", justifyContent: "flex-end",  marginRight: 40  }', () => {
    const tree = renderer.create(<TopButtons />).toJSON();
    expect(tree.props.style).toEqual({
      flex: 5,
      flexDirection: 'row',
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
      marginRight: 40,
    });
  });
  it(' root View component should have 1st->LoveIconButton , 2st->FileUploadIconButton and 3rd->UserIconButton components as only children', () => {
    const tree = renderer.create(<TopButtons />).root.findByType(View);
    expect(tree.children[0].children.length).toEqual(3);
    expect(tree.findByType(LoveIconButton)).toBeDefined();
    expect(tree.findByType(LoveIconButton).parent).toEqual(tree.children[0]);
    expect(tree.children[0].children[0].type).toEqual(LoveIconButton);
    expect(tree.findByType(FileUploadIconButton)).toBeDefined();
    expect(tree.findByType(FileUploadIconButton).parent).toEqual(
      tree.children[0],
    );
    expect(tree.children[0].children[1].type).toEqual(FileUploadIconButton);
    expect(tree.findByType(UserIconButton)).toBeDefined();
    expect(tree.findByType(UserIconButton).parent).toEqual(tree.children[0]);
    expect(tree.children[0].children[2].type).toEqual(UserIconButton);
  });
  it(' should match snapshot', () => {
    const tree = renderer.create(<TopButtons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
