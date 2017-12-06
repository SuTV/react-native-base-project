import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import I18n from '@i18n'

import styles from './styles'
import { moveToMain } from './actions'

class Onboarding extends Component {
  static propTypes = {
    move: PropTypes.func.isRequired,
  }

  static navigationOptions = {
    title: I18n.t('onboarding.title'),
    headerLeft: null,
  }

  render() {
    return (
      <View style={styles.onboarding}>
        <Text>{I18n.t('onboarding.example')}</Text>
        <Button onPress={() => this.props.move()} title="Move" />
      </View>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    move: () => dispatch(moveToMain()),
  })
)(Onboarding)
