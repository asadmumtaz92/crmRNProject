import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Text,
    View,
} from 'react-native'

import { Colors } from './styles/color'

import { connect, useDispatch } from 'react-redux'
import { addition, substruction } from './redux/actions/peoples'
import PeopleList from './components/peopleList'

import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const AppRoute = (props) => {

    const dispatch = useDispatch()

    const changeScreen = (appStatus) => {
        // props.navigation.navigate(appStatus)
        console.log('changeScreen')
    }

    return (
        <View style={styles.contanier}>
            <StatusBar barStyle='light-content' backgroundColor={Colors.primery} />

            <View style={{flexDirection: 'row', marginVertical: 10, justifyContent: 'space-evenly', borderBottomWidth: 0.5, paddingBottom: 10 }}>
                <EvilIcons
                    name='user'
                    style={{ color: Colors.primery, fontSize: 40 }}
                />
                <AntDesign
                    name='customerservice'
                    style={{ color: Colors.primery, fontSize: 30 }}
                />
            </View>

            <View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20}}>
                    <TouchableOpacity onPress={() => dispatch(substruction())} style={styles.btn} activeOpacity={0.9}>
                        <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>

                    <Text style={{marginHorizontal: 20, textAlign:'center', alignSelf: 'center', fontWeight: '700', fontSize: 20, color: Colors.black}}>
                        {props?.peopleReducer?.counter}
                    </Text>

                    <TouchableOpacity onPress={() => dispatch(addition())} style={styles.btn} activeOpacity={0.9}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <PeopleList data={props?.peopleReducer?.peopleList}/>

        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        minWidth: '100%',
        width: '100%',
        flex: 1,
    },
    btn: {
        backgroundColor: Colors.primery,
        alignSelf: 'center',
        marginVertical: 13,
        borderRadius: 5,
        width: 60,
    },
    btnText: {
        textTransform: 'uppercase',
        color: Colors.white,
        paddingVertical: 8,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18,
    },
})

const mapStateToProps = ({ peopleReducer }) => ({ peopleReducer })

export default connect(mapStateToProps, {
    addition,
    substruction,
})(AppRoute)
