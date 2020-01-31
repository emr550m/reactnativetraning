import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { FooterContainer } from "../../../src/modules/footercontainer"; 

describe('FooterContainer -> ./src/modules/footercontainer', () => {
    it(' should render View component as root item', () => {
        const tree = renderer.create(<FooterContainer />).toJSON();
        expect(tree.type).toEqual("View");  
    }); 
    it(' should match snapshot', () => {
        const tree = renderer.create(<FooterContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    });  
});
