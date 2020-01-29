/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Logo } from "../../../src/components/logo"

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Logo Component', () => {
    it(' should render prop imge url correctly', () => {
        const tree = renderer.create(<Logo />).toJSON();
        expect(tree.props.source.testUri).toEqual('../../../asset/logo.png') 
    });
    it(' should have a type Image', () => {
        const tree = renderer.create(<Logo />).toJSON();
        expect(tree.type).toEqual('Image') ;
    });
    it(' should have null children', () => {
        const tree = renderer.create(<Logo />).toJSON();
        expect(tree.children).toEqual(null) ;
    });
});
