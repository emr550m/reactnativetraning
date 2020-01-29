/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Password } from "../../../src/components/password"
import { TextInput } from 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Password Component', () => {
    it(' should allow secure only seecure text entry', () => {
        const tree = renderer.create(<Password secureTextEntry={false} value={"EmrahOz"} />).root.findByType(TextInput)
        expect(tree.props.secureTextEntry).toEqual(true)
    });
    it(' should give text changed event and value', () => {
        var clicked=false;
        var textUpdated=""
        const button = renderer.create(<Password onChangeText={
            (text)=>{
                textUpdated=text;
            }
        } secureTextEntry={false} value={"EmrahOz"} />).root.findByType(TextInput)
        button.props.onChangeText("yenimi?");
        expect(textUpdated).toEqual("yenimi?")
    });
    it(' should render Password as placeholder', () => {
        const tree = renderer.create(<Password value={"EmrahOz"} placeholder="AreYou?" />).root.findByType(TextInput)
        expect(tree.props.placeholder).toEqual('Password')
    });
    it(' should not be autocapitalized', () => {
        const tree = renderer.create(<Password value={"EmrahOz"} />).root.findByType(TextInput)
        expect(tree.props.autoCapitalize).toEqual('none')
    });
    it(' should render prop value correctly', () => {
        const tree = renderer.create(<Password value={"EmrahOz"} />).toJSON();
        expect(tree.props.value).toEqual('EmrahOz')
    });
    it(' should have styles', () => {
        var callback = function () { }
        const tree = renderer.create(<Password value={"EmrahOz"} />).root.findByType(TextInput)
        expect(tree.props.style).toStrictEqual({
            height: 50,
            marginLeft: 20,
            marginRight: 20,
            paddingLeft: 20,
            paddingRight: 20,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'gray'
        })
    });
    it(' should have a type TextInput', () => {
        const tree = renderer.create(<Password />).toJSON();
        expect(tree.type).toEqual('TextInput');
    });
    it(' should have null children', () => {
        const tree = renderer.create(<Password />).toJSON();
        expect(tree.children).toEqual(null);
    });
});
