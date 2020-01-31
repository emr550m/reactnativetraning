import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { BodyContainer } from "../../../src/modules/bodycontainer"; 

describe('BodyContainer -> ./src/modules/bodycontainer', () => {
    it(' should render View component as root item', () => {
        const tree = renderer.create(<BodyContainer />).toJSON();
        expect(tree.type).toEqual("View"); 
    });
    it(' View (root) component should have style {  flex: 6  }', () => {
        const tree = renderer.create(<BodyContainer />).toJSON();
        expect(tree.props.style).toEqual({  flex: 6  }) 
    }); 
});
