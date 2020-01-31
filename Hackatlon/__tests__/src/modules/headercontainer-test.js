import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { HeaderContainer } from "../../../src/modules/headercontainer";
import { View  } from 'react-native';
import { BackIconButton } from "../../../src/components/iconbuttons/backicon";
import { TopButtons } from "../../../src/modules/topbuttons";

describe('HeaderContainer -> ./src/modules/headercontainer', () => {
    it(' should render View component as root item', () => {
        const tree = renderer.create(<HeaderContainer />).toJSON();
        expect(tree.type).toEqual("View");  
    }); 
    it(' View (root) component should have style { flex: 1,  marginTop: 20, flexDirection: "row", alignContent: "center", justifyContent: "center",  }', () => {
        const tree = renderer.create(<HeaderContainer />).toJSON();
        expect(tree.props.style).toEqual({ flex: 1,  marginTop: 20, flexDirection: "row", alignContent: "center", justifyContent: "center",  }) 
    }); 
    it(' root View component should have BackIconButton and TopButtons components as only children', () => {
        const tree = renderer.create(<HeaderContainer />).root.findByType(View);
        expect(tree.children[0].children.length).toEqual(2)
        expect(tree.findByType(BackIconButton)).toBeDefined();
        expect(tree.findByType(BackIconButton).parent).toEqual(tree.children[0]);
        expect(tree.findByType(TopButtons)).toBeDefined(); 
        expect(tree.findByType(TopButtons).parent).toEqual(tree.children[0]);
    });
    it(' should match snapshot', () => {
        const tree = renderer.create(<HeaderContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    });  
});
