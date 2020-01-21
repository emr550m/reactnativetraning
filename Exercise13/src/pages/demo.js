import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Switch,
    ScrollView,
} from 'react-native';

import {ListItem} from '../components/listitem';
import {Reading} from '../components/reading';

export function Demo() {

    const [switchValue, setSwitchValue] = useState(true); 
    const [listValue, setListValue] = useState(false);

    return (<View style={styles.mainContainer}>
        <View style={styles.enableArea}>
            <Text>Show Reading Area</Text>
            <Switch value={switchValue} onValueChange={(newValue) => { setSwitchValue(newValue) }} />
        </View>
        {(switchValue?<View style={styles.listArea}>
            <Text>List View</Text>
            <ScrollView><Reading /></ScrollView>
        </View>:null)}
        <View style={styles.enableArea}>
            <Text>Show List Area</Text>
            <Switch value={listValue} onValueChange={(newValue) => { setListValue(newValue) }} />
        </View>
    </View>)
}


const styles = StyleSheet.create({
    listArea: { 
        alignItems:'flex-start',  
        height:300
    },
    enableArea: { 
        alignItems:'flex-start'
    },
    mainContainer: {
        margin: 0, 
        alignContent: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        marginTop: 50,
        flexDirection: 'column',
        padding: 10
    },

});

