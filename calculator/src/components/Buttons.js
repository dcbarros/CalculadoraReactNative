import React from 'react'
import {Text, TouchableHighlight } from 'react-native'

import StylesButtons from './style/StylesButtons'

export default props => {
    return(
        <TouchableHighlight
            onPress = {props.onClick}
        >
            <Text style = {StylesButtons.button}>{props.label}</Text>
        </TouchableHighlight>       
    )
}