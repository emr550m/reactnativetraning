import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Switch,
    ScrollView,
    FlatList,
    RefreshControl,
    Platform,
    ProgressBarAndroid,
    ProgressViewIOS
} from 'react-native';

import { ListItem } from '../components/listitem';
import { Reading } from '../components/reading';

export function Demo() {

    var backendURL = 'http://localhost:8080/getItems/'
    if (Platform.OS == "android") {
        backendURL = 'http://10.0.3.2:8080/getItems/'
    }

    const [switchValue, setSwitchValue] = useState(true);
    const [barvalue, setBarValue] = useState(0.1);
    const [listValue, setListValue] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [items, setItems] = React.useState([{
        key: 1,
        image: 'http://tapsmart.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/pull-to-refresh.png',
        title: "Pull To get List",
        description: "Please pull to get items."
    }]);

    const onRefresh = React.useCallback(() => {
        setBarValue(0.1);
        setRefreshing(true);
        setTimeout(() => {
            setBarValue(barvalue + 0.2);
        }, 500);

        fetch(backendURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 0
            }),
        }).then((r) => {
            return r.json();
        }).then((rsp) => {
            setBarValue(1);
            setRefreshing(false)
            if (rsp.success) {
                setItems(rsp.list)
            }
        }).catch((e) => {
            setRefreshing(false)
            alert("error" + e)
        });
    }, [refreshing]);

    return (<View style={styles.mainContainer}>
        <View style={styles.enableArea}>
            <Text>Show Reading Area</Text>
            <Switch value={switchValue} onValueChange={(newValue) => { setSwitchValue(newValue) }} />
        </View>
        {(switchValue ? <View style={styles.listArea}>
            <Text>List View</Text>
            <ScrollView><Reading /></ScrollView>
        </View> : null)}
        <View style={styles.enableArea}>
            <Text>Show List Area</Text>
            <Switch value={listValue} onValueChange={(newValue) => { setListValue(newValue) }} />
        </View>
        {(listValue ? <View style={styles.flatListArea}>
            {(refreshing ?
                (Platform.OS == "android" ? <ProgressBarAndroid /> : <ProgressViewIOS progress={barvalue} />)
                : null)}
            <FlatList refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                data={items}
                renderItem={({ item }) => <ListItem key={item.key} title={item.title} image={item.image} description={item.description} />}
            />
        </View> : null)}
    </View>)
}


const styles = StyleSheet.create({
    flatListArea: {
        alignItems: 'stretch',
        justifyContent: 'center',
        height: 300,

    },
    listArea: {
        alignItems: 'flex-start',
        height: 300
    },
    enableArea: {
        alignItems: 'flex-start'
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

