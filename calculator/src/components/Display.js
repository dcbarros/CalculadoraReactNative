import React from "react";
import {Text,View} from 'react-native';

import StylesDisplay from "./style/StylesDisplay";

export default props => {
    return(
    <View style = {StylesDisplay.display}>
        <Text style = {StylesDisplay.displayValue}
              numberOfLines = {1}>{props.value}</Text>
    </View>
    )
}