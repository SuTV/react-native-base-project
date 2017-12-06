import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import icons from '@assets/icons'
import styles from './styles'
import I18n from '@i18n'

class Add extends Component {
  static navigationOptions = {
    title: I18n.t('add.more'),
    tabBarIcon: <Image source={icons.add} style={styles.icon} />,
  }
  render() {
    return (
      <View style={styles.more}>
        <Text testID="add">{I18n.t('add.welcome')}</Text>
      </View>
    )
  }
}

export default Add
