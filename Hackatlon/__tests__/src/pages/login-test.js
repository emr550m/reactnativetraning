import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

 
import { View   } from 'react-native';
import { Login } from "../../../src/pages/login";
import { FooterContainer } from "../../../src/modules/footercontainer";
import { BodyContainer } from "../../../src/modules/bodycontainer";
import { HeaderContainer } from "../../../src/modules/headercontainer"; 

describe('Login -> ./src/pages/login', () => {
    it(' should render View component as root item', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree.type).toEqual("View");  
    }); 
    it(' View (root) component should have style { flex: 1 }', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree.props.style).toEqual({
            flex: 1
        }) 
    }); 
    it(' root View component should have 1st->HeaderContainer , 2st->BodyContainer and 3rd->FooterContainer components as only children', () => {
        const tree = renderer.create(<Login />).root.findByType(View);
        expect(tree.children[0].children.length).toEqual(3)
        expect(tree.findByType(HeaderContainer)).toBeDefined();
        expect(tree.findByType(HeaderContainer).parent).toEqual(tree.children[0]);
        expect(tree.children[0].children[0].type).toEqual(HeaderContainer) 
        expect(tree.findByType(BodyContainer)).toBeDefined(); 
        expect(tree.findByType(BodyContainer).parent).toEqual(tree.children[0]);
        expect(tree.children[0].children[1].type).toEqual(BodyContainer)
        expect(tree.findByType(FooterContainer)).toBeDefined(); 
        expect(tree.findByType(FooterContainer).parent).toEqual(tree.children[0]);
        expect(tree.children[0].children[2].type).toEqual(FooterContainer)
    });
    it(' should match snapshot', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree).toMatchSnapshot();
    });   
});
