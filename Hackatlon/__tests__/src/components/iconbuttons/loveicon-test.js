import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { LoveIconButton } from "../../../../src/components/iconbuttons/loveicon";
import { TouchableOpacity,  Image } from 'react-native';

describe('LoveIconButton -> ./src/components/iconbuttons/loveicon', () => {
    it(' should render TouchableOpacity component as root item', () => {
        const tree = renderer.create(<LoveIconButton />).root.findByType(TouchableOpacity);
        expect(tree).toBeDefined(); 
    });
    it(' root TouchableOpacity component should have Image component as only child', () => {
        const tree = renderer.create(<LoveIconButton />).root.findByType(TouchableOpacity);
        expect(tree.children.length).toEqual(1)
        expect(tree.findByType(Image)).toBeDefined(); 
    });
    it(' Image (inside TouchableOpacity) component should have style { height: 30, width: 30, marginLeft: 20 }', () => {
        const tree = renderer.create(<LoveIconButton />).root.findByType(Image);
        expect(tree.props.style).toEqual({ height: 30, width: 30, marginLeft: 20 }) 
    });
    it(' Image (inside TouchableOpacity) component should have source ./asset/hearth.png', () => {
        const tree = renderer.create(<LoveIconButton />).root.findByType(Image);
        expect(tree.props.source.testUri).toEqual("../../../asset/hearth.png") 
    }); 
});
