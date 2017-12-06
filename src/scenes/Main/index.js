import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, Button, TouchableNativeFeedback } from 'react-native'
import { Avatar, Icon } from 'react-native-elements';
import { LinesLoader, TextLoader } from 'react-native-indicator';
import { connect } from 'react-redux'
import icons from '@assets/icons'
import I18n from '@i18n'
import theme from '../../themes/base-theme'
import { AccountTypes } from '../../services/biz/accounts'

import styles from './styles'
import { openMenu, moveToAdd, moveToSettings } from './actions'
import { getShortUserNameTitle, getUserName, getUserProfilePicture } from '../Base/actions'

class Main extends Component {
  static propTypes = {
    moveToAdd: PropTypes.func.isRequired,
    moveToSettings: PropTypes.func.isRequired,
  }

  static navigationOptions = ({ navigation }) => {
    const { state, setParams, navigate } = navigation;
    const params = state.params || {};

    let headerBgColor = theme.fbColor;
    if(AccountTypes.FACEBOOK == params.type) {
      headerBgColor = theme.fbColor;
    } else if (AccountTypes.INSTAGRAM == params.type) {
      headerBgColor = theme.instaColor;
    }

    return {
      title: params.userName,
      headerStyle: {
        backgroundColor: headerBgColor
      },
      headerTitleStyle: {
        alignSelf: 'center',
        color: '#ffffff'
      },    
      headerLeft: (
        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => { setTimeout(() => { navigate('DrawerOpen') }, 100); }}>
          <View style={styles.headerIcon}>
            <Avatar
              small
              rounded
              style={styles.icon}
              icon={{name: 'person'}}
              title={params.shortUserNameTitle}
              source={{uri: params.userProfilePicture}}
              activeOpacity={0.7}
            />
            </View>
        </TouchableNativeFeedback>
      ),
      headerRight: (
        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => { /*setTimeout(() => {params.moveToAdd()}, 100);*/ } } >
          <View style={styles.headerIcon}>
            <Icon style={styles.icon} name='event' color={'#ffffff'} />
          </View>
        </TouchableNativeFeedback>
      )
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({type: this.props.appStore.userInfo.type, userName: this.props.getUserName(this.props.appStore.userInfo), moveToAdd: this.props.moveToAdd, openMenu: this.props.openMenu, shortUserNameTitle: this.props.getShortUserNameTitle(this.props.appStore.userInfo), userProfilePicture: this.props.getUserProfilePicture(this.props.appStore.userInfo)});
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={{alignItems: 'center'}}>
          <TextLoader text={I18n.t('main.loading_data')} />
          <LinesLoader color={theme.loadingBarColor} barNumber={5} />
        </View>
      </View>
    )
  }
}

export default connect(
  state => ({
    appStore: state.appStore
  }),
  dispatch => ({
    openMenu: () => dispatch(openMenu()),
    moveToAdd: () => dispatch(moveToAdd()),
    moveToSettings: () => dispatch(moveToSettings()),
    moveToLogin: () => dispatch(moveToLogin()),
    getShortUserNameTitle: (userInfo) => getShortUserNameTitle(userInfo),
    getUserName: (userInfo) => getUserName(userInfo),
    getUserProfilePicture: (userInfo) => getUserProfilePicture(userInfo)
  })
)(Main)
