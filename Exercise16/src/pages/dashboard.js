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
    ProgressViewIOS,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem } from '../components/listitem';
import { Reading } from '../components/reading';
import { useLoginCheck } from '../hooks/session';

export function Dashboard(props) {
    const { goBack } = props.navigation;
    const dashboardState = useSelector(state => state.dashboard);
    const dispatch = useDispatch()
    var backendURL = 'http://localhost:8080/getItems/'
    if (Platform.OS == "android") {
        backendURL = 'http://10.0.3.2:8080/getItems/'
    }
    const session = useLoginCheck();
    const [switchValue, setSwitchValue] = useState(true);
    const [barvalue, setBarValue] = useState(0.1);
    const [listValue, setListValue] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {

        setRefreshing(true);
        setTimeout(() => {
            setBarValue(barvalue + 0.6);
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
            setRefreshing(false)
            if (rsp.success) {

                dispatch({ type: 'SET_ITEMS', items: rsp.list })
            }
        }).catch((e) => {
            setRefreshing(false)
            alert("error" + e)
        });
    }, [refreshing]);

    return (<SafeAreaView style={styles.safeView}><View style={styles.mainContainer}>
        <View style={styles.enableArea}>
            <Text>Show Reading Area</Text>
            <Switch value={switchValue} onValueChange={(newValue) => { setSwitchValue(newValue) }} />
        </View>
        {(switchValue ? <View style={styles.listArea}>
            <Text>List View</Text>
            <ScrollView><Reading /></ScrollView>
        </View> : null)}
        <View style={styles.enableArea}>
            <TouchableOpacity style={styles.logoutButton} onPress={() => {
                dispatch({ type: 'SET_LOGGEDIN', isLoggedIn: false });
            }}><Text style={{ color: 'white', height: 40 }}>Log out</Text></TouchableOpacity>
            <TouchableOpacity style={styles.forgotButton}><Text style={{ color: 'black' }}>Forgot password?</Text></TouchableOpacity>
            <Text>Show List Area</Text>
            <Switch value={listValue} onValueChange={(newValue) => { setListValue(newValue) }} />
        </View>
        {(listValue ? <View style={styles.flatListArea}>
            {(refreshing ?
                (Platform.OS == "android" ? <ProgressBarAndroid /> : <ProgressViewIOS progress={barvalue} />)
                : null)}
            <FlatList refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                data={dashboardState.items}
                renderItem={({ item }) => <ListItem key={item.key} title={item.title} image={item.image} description={item.description} />}
            />
        </View> : null)}
    </View></SafeAreaView>)
}

export default withNavigation(Dashboard);


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
        marginTop: 5,
        flexDirection: 'column',
        padding: 10
    },
    logoutButton: {
        height: 50,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: 'blue',
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
    },
    safeView: {
        flex: 1,
        backgroundColor: 'white'
    }
});

