import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';

export function BottomButtons() {
    return (<View style={styles.bottomButtonArea}>
        <View style={{ flex: 1, margin: 20, marginTop: 50 }}>
            <TouchableOpacity >
                <View style={{ flexDirection: "row", borderWidth: 1, height: 50, justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "white" }}>
                    <Image style={{ height: 20, width: 20, marginRight: 5 }} source={require("../../asset/arrow.png")} />
                    <Text style={styles.bottomButtonText}>Start</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>);
};

const styles = StyleSheet.create({
    bottomButtonArea: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch", 
        marginBottom: 50
    },
    bottomButtonText: {
        color: "black", 
        textAlign: "center",
        textAlignVertical:"center",
        fontFamily: "Arial",
        fontSize: 25,
        fontWeight: "400"
    },
});
