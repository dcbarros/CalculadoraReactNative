import React from 'react'
import {Text, TouchableHighlight} from 'react-native'

import StylesButtons from './style/StylesButtons'

export default props => {
    const defaultButton = [StylesButtons.button]

    if(props.double) defaultButton.push(StylesButtons.buttonDouble)
    if(props.triple) defaultButton.push(StylesButtons.buttonTriple)
    if(props.operation) defaultButton.push(StylesButtons.operationButton)

    return(
        <TouchableHighlight onPress = {props.onClick}>
            <Text style={defaultButton}>{props.label}</Text>
        </TouchableHighlight>       
    )
}