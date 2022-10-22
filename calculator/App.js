import React, { Component } from 'react';
import {SafeAreaView,Text,View,} from 'react-native';

import ButtonsCalc from './src/components/Buttons';
import StyleView from './src/components/style/StyleView';

import Display from './src/components/Display';

export default class App extends Component {
  state = {
    displayValue: '0'
  }

  render() {
    return (
      <SafeAreaView style = {StyleView.container}>
        <Display value = {this.state.displayValue}/>
        <View style = {StyleView.buttons}>
          <ButtonsCalc label = 'AC' />
          <ButtonsCalc label = '/' />
          <ButtonsCalc label = '7' />
          <ButtonsCalc label = '8' />
          <ButtonsCalc label = '9' />
          <ButtonsCalc label = '*' />
          <ButtonsCalc label = '4' />
          <ButtonsCalc label = '5' />
          <ButtonsCalc label = '6' />
          <ButtonsCalc label = '-' />
          <ButtonsCalc label = '1' />
          <ButtonsCalc label = '2' />
          <ButtonsCalc label = '3' />
          <ButtonsCalc label = '+' />
          <ButtonsCalc label = '0' />
          <ButtonsCalc label = '.' />
          <ButtonsCalc label = '=' />
        </View>
      </SafeAreaView>
    )
  }
}