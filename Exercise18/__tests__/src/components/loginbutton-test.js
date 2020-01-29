import 'react-native';
import React from 'react';
import { LoginButton } from "../../../src/components/loginbutton"
import { StyleSheet, TouchableOpacity,Text } from 'react-native';


// Note: test renderer must be required after react-native.
import renderer,{act}  from 'react-test-renderer';

describe('LoginButton Component', () => {
    it(' should render children text correctly', () => {
        const tree = renderer.create(<LoginButton>Hello World</LoginButton>).toTree();
        expect(tree.props.children).toEqual("Hello World")
    });
    it(' should trigger given prop onPress on Press', () => {
        var clicked=false;
        const button = renderer.create(<LoginButton onPress={()=>{
            clicked=true;
        }}>Hello World</LoginButton>).root.findByType(TouchableOpacity)
        button.props.onPress();
        expect(clicked).toBeTruthy()
    });
    it(' should have styles', () => {
        var callback= function(){}
        const tree = renderer.create(<LoginButton onPress={callback}>Hello World</LoginButton>).root.findByType(TouchableOpacity)
        expect(tree.props.style).toStrictEqual({
            height: 50,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: 'purple',
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        })  
    });
    it(' should have styles for inner text', () => {
        var callback= function(){}
        const tree = renderer.create(<LoginButton onPress={callback}>Hello World</LoginButton>).root.findByType(Text)
        expect(tree.props.style).toStrictEqual({
            color: 'white' 
        });
    });
});
