import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import icons from '@assets/icons'
import I18n from '@i18n'

class Settings extends Component {
  static navigationOptions = {
    title: I18n.t('settings.title'),
    tabBarIcon: <Image source={icons.settings} style={styles.icon} />,
  }
  render() {
    return (
      <View style={styles.settings}>
        <Text testID="settings">{I18n.t('settings.placeholder')}</Text>
      </View>
    )
  }
}

export default Settings
