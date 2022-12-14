import {StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton:{
        color:'#fff',
        backgroundColor:'#fa8231',

    },
    buttonDouble:{
        width: 2*(Dimensions.get('window').width/4),
    },
    buttonTriple:{
        width: 3*(Dimensions.get('window').width/4),
    }
})