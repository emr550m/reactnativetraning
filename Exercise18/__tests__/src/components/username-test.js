/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Username } from "../../../src/components/username"
import { TextInput } from 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Username Component', () => {
    it(' should give text changed event and value', () => {
        var clicked=false;
        var textUpdated=""
        const button = renderer.create(<Username onChangeText={
            (text)=>{
                textUpdated=text;
            }
        } value={"EmrahOz"} />).root.findByType(TextInput)
        button.props.onChangeText("yenimi?");
        expect(textUpdated).toEqual("yenimi?")
    });
    it(' should render Email as placeholder', () => {
        const tree = renderer.create(<Username value={"EmrahOz"} placeholder="AreYou?" />).root.findByType(TextInput)
        expect(tree.props.placeholder).toEqual('Email')
    });
    it(' should not be autocapitalized', () => {
        const tree = renderer.create(<Username value={"EmrahOz"} />).root.findByType(TextInput)
        expect(tree.props.autoCapitalize).toEqual('none')
    });
    it(' should render prop value correctly', () => {
        const tree = renderer.create(<Username value={"EmrahOz"} />).toJSON();
        expect(tree.props.value).toEqual('EmrahOz')
    });
    it(' should have styles', () => {
        var callback = function () { }
        const tree = renderer.create(<Username value={"EmrahOz"} />).root.findByType(TextInput)
        expect(tree.props.style).toStrictEqual({
            height: 50,
            marginLeft: 20,
            marginRight: 20,
            paddingLeft: 20,
            paddingRight: 20,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'gray'
        })
    });
    it(' should have a type TextInput', () => {
        const tree = renderer.create(<Username />).toJSON();
        expect(tree.type).toEqual('TextInput');
    });
    it(' should have null children', () => {
        const tree = renderer.create(<Username />).toJSON();
        expect(tree.children).toEqual(null);
    });
});
