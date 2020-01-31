import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { RegularText } from "../../../../src/components/texts/regulartext"; 

describe('RegularText -> ./src/components/texts/regulartext', () => {
    it(' should render Text component as root item', () => {
        const tree = renderer.create(<RegularText>Deneme</RegularText>).toJSON();
        expect(tree.type).toEqual("Text"); 
    });
    it(' Text (root) component should have style { color: "white", fontFamily: "Arial", fontSize: 20, fontWeight: "600" }', () => {
        const tree = renderer.create(<RegularText>Deneme</RegularText>).toJSON();
        expect(tree.props.style).toEqual({ color: "white", fontFamily: "Arial", fontSize: 20, fontWeight: "600" }) 
    });
    it(' Text (root) component should render given text inside it as children. -> <RegularText>Deneme</RegularText>', () => {
        const tree = renderer.create(<RegularText>Deneme</RegularText>).toJSON();
        expect(tree.children[0]).toEqual("Deneme") 
    }); 
});
