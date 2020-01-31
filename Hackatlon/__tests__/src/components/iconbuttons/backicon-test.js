import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { BackIconButton } from "../../../../src/components/iconbuttons/backicon";
import { TouchableOpacity, Image } from 'react-native';

describe('BackIconButton -> ./src/components/iconbuttons/backicon', () => {
    it(' should render View component as root item', () => {
        const tree = renderer.create(<BackIconButton />).toJSON();
        expect(tree.type).toEqual("View"); 
    });
    it(' root View component has style { paddingLeft: 20, flex: 1 }', () => {
        const tree = renderer.create(<BackIconButton />).toJSON();
        expect(tree.props.style).toEqual({ paddingLeft: 20, flex: 1 });
    });
    it(' root View component should have TouchableOpacity as only child', () => {
        const tree = renderer.create(<BackIconButton />);
        expect(tree.toJSON().children.length).toEqual(1)
        expect(tree.root.findByType(TouchableOpacity)).toBeDefined(); 
    });
    it(' TouchableOpacity should have only Image component as child', () => {
        const tree = renderer.create(<BackIconButton />).root.findByType(TouchableOpacity);
        expect(tree.children.length).toEqual(1)
        expect(tree.findByType(Image)).toBeDefined(); 
    });
    it(' Image (inside TouchableOpacity) component should have style { height: 30, width: 30 }', () => {
        const tree = renderer.create(<BackIconButton />).root.findByType(Image);
        expect(tree.props.style).toEqual({ height: 30, width: 30 }) 
    });
    it(' Image (inside TouchableOpacity) component should have source ./asset/ok.png', () => {
        const tree = renderer.create(<BackIconButton />).root.findByType(Image);
        expect(tree.props.source.testUri).toEqual("../../../asset/ok.png") 
    });
});
