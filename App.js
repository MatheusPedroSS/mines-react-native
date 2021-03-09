import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import params from './src/params';
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>
          Tamanho da grade:{params.getRowsAmount()}X{params.getColumnsAmount()}
        </Text>
        <Field />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {

  },
  instructions: {
    
  }
})