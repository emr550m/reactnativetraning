/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Login } from "../../../src/pages/login"
import { LoginButton } from "../../../src/components/loginbutton"
import { Username } from "../../../src/components/username"
import { Password } from "../../../src/components/password"
import fetchMock from "fetch-mock";
import {
    Alert
} from 'react-native';

// Note: test renderer must be required after react-native.
import renderer,{act} from 'react-test-renderer';

describe('Login Component', () => {
    it(' should render a view component first,3 views as child', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree.type).toEqual("View");
        expect(tree.children[0].type).toEqual("View");
        expect(tree.children[1].type).toEqual("View");
        expect(tree.children[1].children[0].type).toEqual("TextInput");
        expect(tree.children[1].children[1].type).toEqual("TextInput");
        expect(tree.children[1].children[2].type).toEqual("View");
        expect(tree.children[2].type).toEqual("View");
    });
    it(' login button click should call login function', () => {
       /*
        Alert.alert = function (message) {
            console.log(message)
        }
        
        global.fetch = fetch;
        fetchMock.restore();
        
        const tree = renderer.create(<Login />).root;
        const username = tree.findByType(Username)
        username.props.onChangeText("emrah@eee.com");
        const password = tree.findByType(Password)
        password.props.onChangeText("123456");
        const loginbutton = tree.findByType(LoginButton)
        act(() => {
        loginbutton.props.onPress();
        });*/
    });
});
