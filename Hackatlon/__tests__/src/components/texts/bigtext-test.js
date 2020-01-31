import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { BigText } from "../../../../src/components/texts/bigtext"; 

describe('BigText -> ./src/components/texts/bigtext', () => {
    it(' should render Text component as root item', () => {
        const tree = renderer.create(<BigText>Deneme</BigText>).toJSON();
        expect(tree.type).toEqual("Text"); 
    });
    it(' Text (root) component should have style { color: "white", fontFamily: "Arial", fontSize: 35, fontWeight: "600" }', () => {
        const tree = renderer.create(<BigText>Deneme</BigText>).toJSON();
        expect(tree.props.style).toEqual({ color: "white", fontFamily: "Arial", fontSize: 35, fontWeight: "600" }) 
    });
    it(' Text (root) component should render given text inside it as children. -> <BigText>Deneme</BigText>', () => {
        const tree = renderer.create(<BigText>Deneme</BigText>).toJSON();
        expect(tree.children[0]).toEqual("Deneme") 
    }); 
});
