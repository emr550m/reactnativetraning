import 'react-native';
import React from 'react';
import { FooterButton } from "../../../src/components/footerbutton"
import { StyleSheet, TouchableOpacity,Text } from 'react-native';


// Note: test renderer must be required after react-native.
import renderer,{act}  from 'react-test-renderer';

describe('FooterButton Component', () => {
    it(' should render children text correctly', () => {
        const tree = renderer.create(<FooterButton>Hello World</FooterButton>).toTree();
        expect(tree.props.children).toEqual("Hello World")
    });
    it(' should trigger given prop onPress on Press', () => {
        var clicked=false;
        const button = renderer.create(<FooterButton onPress={()=>{
            clicked=true;
        }}>Hello World</FooterButton>).root.findByType(TouchableOpacity)
        button.props.onPress();
        expect(clicked).toBeTruthy()
    });
    it(' should have styles', () => {
        var callback= function(){}
        const tree = renderer.create(<FooterButton onPress={callback}>Hello World</FooterButton>).root.findByType(TouchableOpacity)
        expect(tree.props.style).toStrictEqual({
            flex: 1,
            height: 70,
            backgroundColor: 'purple',
            alignItems: "center",
            justifyContent: 'center'
        })
       
    });
    it(' should have styles for inner text', () => {
        var callback= function(){}
        const tree = renderer.create(<FooterButton onPress={callback}>Hello World</FooterButton>).root.findByType(Text)
        expect(tree.props.style).toStrictEqual({
            color: 'white' 
        })
    });
});
