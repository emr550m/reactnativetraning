import 'react-native';
import React from 'react';
import { LightButton } from "../../../src/components/lightbutton"
import { StyleSheet, TouchableOpacity,Text } from 'react-native';


// Note: test renderer must be required after react-native.
import renderer,{act}  from 'react-test-renderer';

describe('LightButton Component', () => {
    it(' should render children text correctly', () => {
        const tree = renderer.create(<LightButton>Hello World</LightButton>).toTree();
        expect(tree.props.children).toEqual("Hello World")
    });
    it(' should trigger given prop onPress on Press', () => {
        var clicked=false;
        const button = renderer.create(<LightButton onPress={()=>{
            clicked=true;
        }}>Hello World</LightButton>).root.findByType(TouchableOpacity)
        button.props.onPress();
        expect(clicked).toBeTruthy()
    });
    it(' should have styles', () => {
        var callback= function(){}
        const tree = renderer.create(<LightButton onPress={callback}>Hello World</LightButton>).root.findByType(TouchableOpacity)
        expect(tree.props.style).toStrictEqual({
            height: 50,
            marginTop: 5,
            marginRight: 20,
            marginLeft: 20,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: 'center',
        })  
    });
    it(' should have styles for inner text', () => {
        var callback= function(){}
        const tree = renderer.create(<LightButton onPress={callback}>Hello World</LightButton>).root.findByType(Text)
        expect(tree.props.style).toStrictEqual({
            color: 'black' 
        })
    });
});
