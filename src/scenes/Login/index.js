import React, { Component } from 'react'

import { View, Text, Button } from 'react-native'
import { SocialIcon, Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import I18n from '@i18n'
import { AccountTypes } from '../../services/biz/accounts'

import { logIn } from './actions'
import styles from './styles'

export class Login extends Component {
  static navigationOptions = {
    title: I18n.t('login.title'),
    header: null
  }

  componentDidMount() {
    this.props.appStore.tracker.trackScreenView(this.constructor.name);
  }

  render () {
      return (
        <View style={styles.container}>
          <SocialIcon
            title={ I18n.t('login.login_facebook') }
            button
            type='facebook'
            loading={this.props.data.type == AccountTypes.FACEBOOK && this.props.data.isFetching}
            onPress={() => this.props.logIn(this.props.appStore.tracker, AccountTypes.FACEBOOK)}
          />
          <SocialIcon
            title={ I18n.t('login.login_instagram') }
            button
            type='instagram'
            loading={this.props.data.type == AccountTypes.INSTAGRAM && this.props.data.isFetching}
          />
          { this.props.data.failure && this.props.data.errorMessage && (<Divider style={styles.divider} />) || null }
          { this.props.data.failure && this.props.data.errorMessage && (<Text style={styles.messages}>{this.props.data.errorMessage}</Text>) || null }
      </View>
      )
  }
}

export default connect(
  state => ({
    data: state.login,
    appStore: state.appStore
  }),
  dispatch => ({
    logIn: (tracker, type) => dispatch(logIn(tracker, type)),
  })
)(Login)
