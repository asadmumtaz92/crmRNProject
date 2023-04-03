import React, { useState, useLayoutEffect, useEffect } from 'react'
import {
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    TextInput,
    Keyboard,
    Text,
    View,
} from 'react-native'

import { Colors } from './styles/color'
import { gStyles } from './styles/globle'

import { connect, useDispatch } from 'react-redux'
import { addition, substruction } from './redux/actions/peoples'

import PeopleList from './components/peopleList'
import BottomTab from './components/BottomTab'

import AntDesign from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const AppRoute = (props) => {

    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [errorText, setErrorText] = useState('')

    const searchButtonHandler = () => {
        if (visible) { // for hide
            console.log('search 1')
            setVisible(!visible)
            let res = props?.peopleReducer?.peopleList
            setFilteredData(res)
        }
        else { // for show
            console.log('search 2')
            setVisible(!visible)
        }
    }

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                        onPress={() => searchButtonHandler()} activeOpacity={0.9}
                        style={gStyles.navBtn}
                    >
                        {visible 
                            ? <AntDesign name="close" style={styles.searchIcon} />
                            : <FontAwesome5 name="search" style={styles.searchIcon}/>
                        }
                    </TouchableOpacity>
                )
            },
        })
    }, [props?.navigation, visible])
    // SAVE SEARCH VALUSE
    const searchInputHandler = (text) => {
        setSearch(text)
    }

    useEffect(() => {
        SearchShop()
    }, [search, visible])

    useLayoutEffect(() => {
        setTimeout(() => {
            setFilteredData(props?.peopleReducer?.peopleList)
        }, 1500)
    }, [])

    // SEARCH SHOP
    const SearchShop = () => {
        const result = props?.peopleReducer?.peopleList.filter(item => item?.firstname.toLowerCase().includes(search.toLowerCase()))

        // if data found through first name
        if(result.length > 0) {
            let res = search.length > 0 ? result : props?.peopleReducer?.peopleList
            setFilteredData(res)
            setErrorText('')
        }
        // find data through last name
        else {
            let result2 = props?.peopleReducer?.peopleList.filter(item => item?.lastname.toLowerCase().includes(search.toLowerCase()))

            if (result2.length) {
                let res2 = search.length > 0 ? result2 : props?.peopleReducer?.peopleList
                setFilteredData(res2)
                setErrorText('')
            }
            else {
                setErrorText('Result not found.')
            }
        }
    }

    return (
        <View style={styles.contanier}>
            <StatusBar barStyle='light-content' backgroundColor={Colors.primery} />
            
            {visible && 
                <TextInput
                    onSubmitEditing={() => { Keyboard.dismiss(); setVisible(false) }}
                    onBlur={() => { Keyboard.dismiss(); setVisible(false) }}
                    onChangeText={(text) => searchInputHandler(text)}
                    placeholderTextColor={'rgba(34, 34, 34, 0.3)'}
                    selectionColor={Colors.selectionColor}
                    selectTextOnFocus={false}
                    placeholder="SEARCH..."
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    spellCheck={false}
                    style={gStyles.ip}
                    inputMode='search'
                    numberOfLines={1}
                    multiline={false}
                    autoFocus={true}
                    value={search}
                    maxLength={20}
                />
            }
            
            <View style={{ marginHorizontal: 20, flex: 1 }}>
                {errorText 
                    ? <View style={styles.errorView}>
                        <Text style={styles.errorText}>{errorText}</Text>
                    </View>
                    : filteredData.length
                        ? <PeopleList data={filteredData} />
                        : <ActivityIndicator size='large' color={Colors.primery} style={{ flex: 1 }} />
                }
            </View>

            {/* BOOTOM TABS */}
            <BottomTab />
            
            <View>
                {/* <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20}}>
                    <TouchableOpacity onPress={() => dispatch(substruction())} style={styles.btn} activeOpacity={0.9}>
                        <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>

                    <Text style={{marginHorizontal: 20, textAlign:'center', alignSelf: 'center', fontWeight: '700', fontSize: 20, color: Colors.black}}>
                        {props?.peopleReducer?.counter}
                    </Text>

                    <TouchableOpacity onPress={() => dispatch(addition())} style={styles.btn} activeOpacity={0.9}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View> */}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    searchIcon: {
        color: Colors.white,
        fontWeight: '300',
        fontSize: 20,
    },
    contanier: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    errorView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    errorText: {
        color: Colors.primery,
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: 24,
    },
    // btn: {
    //     backgroundColor: Colors.primery,
    //     alignSelf: 'center',
    //     marginVertical: 13,
    //     borderRadius: 5,
    //     width: 60,
    // },
    // btnText: {
    //     textTransform: 'uppercase',
    //     color: Colors.white,
    //     paddingVertical: 8,
    //     textAlign: 'center',
    //     fontWeight: '500',
    //     fontSize: 18,
    // },
})

const mapStateToProps = ({ peopleReducer }) => ({ peopleReducer })

export default connect(mapStateToProps, {
    addition,
    substruction,
})(AppRoute)
