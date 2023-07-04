import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

export default function Navbar({onShowChange}) {
    return (
        <View style={styles.container}>
            <Button style={styles.btn}
                icon="map"
                contentStyle={styles.btnContent}
                onPress={() => onShowChange("map")}>
                Map
            </Button>
            <Button style={styles.btn}
                icon="star"
                contentStyle={styles.btnContent}
                onPress={() => onShowChange("new")}>
                New
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "10%",
        backgroundColor: "lightgrey",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    btn: {
        flexGrow: 1,
    },
    btnContent: {
        backgroundColor: "white",
        height: "100%",
        textAlignVertical: 'center',
        lineHeight: "65%"
    }
})