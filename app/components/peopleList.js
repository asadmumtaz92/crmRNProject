import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    View,
    Text,
    Dimensions,
} from 'react-native'

import { Colors } from '../styles/color'

const deviceWidth = Dimensions.get('window').width
const PeopleList = ( props ) => {

    // console.log("props--", props)
    

    const renderItem = (items) => {
        let item = items.item

        return (
            <View key={item.id} style={styles.card}>
                <View style={styles.imageBox}>
                    {item.image
                        ? <Image source={{uri: item?.image}} style={styles.image}  resizeMode="cover"/>
                        : <Text style={styles.imageText}>
                            {`${item?.firstname.substring(0, 1)}${item?.lastname.substring(0, 1)}`}
                        </Text>
                    }
                </View>

                <View style={{ alignContent: 'center', marginLeft:10, flexDirection: 'column' }}>
                    <Text style={{}}>
                        {item?.firstname} {item?.lastname}</Text>
                    <Text style={{}}>{item?.company}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.data}
                contentContainerStyle={styles.flatlist}
                keyExtractor={(item) => item.id }
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 26,
        paddingVertical: 15,
        flex: 1,
    },
    flatlist: {
        // 
    },
    card: {
        backgroundColor: Colors.white,
        // width: deviceWidth - 52,
        alignContent: 'center',
        // alignSelf: 'center',
        flexDirection: 'row',
        paddingVertical: 8,
        marginVertical: 8,
        elevation: 3,
    },
    imageBox: {
        borderColor: Colors.gray,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 25,
        borderWidth: 2,
        height: 50,
        width: 50,
    },
    image: {
        borderColor: Colors.primery,
        borderRadius: 25,
        borderWidth: 2,
        height: 50,
        width: 50,
    },
    imageText: {
        textTransform: 'uppercase',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 22,
    },
    imageAltBox: {},
})

export default PeopleList
