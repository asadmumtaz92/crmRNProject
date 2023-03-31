import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View,
    Text,
} from 'react-native'

const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={"red"}/>

            <View style={{}}>
                <Text style={styles.text}>Welcome to CRM!</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    view: {

    },
    text: {
        fontWeight: '600',
        fontSize: 24,
    },
});

export default App;
