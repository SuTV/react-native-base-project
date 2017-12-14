import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { LineDotsLoader } from 'react-native-indicator';
import { connect } from 'react-redux'
import CodePush from "react-native-code-push";

import I18n from '@i18n'
import { loadUser } from './actions'
import theme from '../../themes/base-theme'

import styles from './styles'

class Splash extends Component {
  constructor() {
    super();
    this.state = { syncMessage: '', progress: false };
  }

  static navigationOptions = {
    title: I18n.t('splash.title'),
    header: null,
  }

  componentDidMount() {
    CodePush.sync(
      { installMode: CodePush.InstallMode.IMMEDIATE },
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );

    // load user info
    this.props.load(this.props.appStore);

    // track screen view
    this.props.appStore.tracker.trackScreenView(this.constructor.name);
  }

  codePushStatusDidChange(syncStatus) {
    switch(syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({ syncMessage: I18n.t('splash.update.checking') });
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({ syncMessage: I18n.t('splash.update.downloading') });
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({ syncMessage: I18n.t('splash.update.installing') });
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        this.setState({ syncMessage: I18n.t('splash.update.up_to_date'), progress: false });
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({ syncMessage: I18n.t('splash.update.installed'), progress: false });
        break;
      case CodePush.SyncStatus.SYNC_IN_PROGRESS:
        this.setState({ syncMessage: I18n.t('splash.update.sycn_in_progress'), progress: false });
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({ syncMessage: I18n.t('splash.update.unknown_error'), progress: false });
        break;
      default:
        this.setState({ progress: false });
        break;
    }
  }

  codePushDownloadDidProgress(progress) {
    this.setState({ progress });
  }

  render() {
    let progressView;
    
    if (this.state.progress) {
      progressView = (
        <Text style={styles.messages}>{this.state.progress.receivedBytes} of {this.state.progress.totalBytes} bytes received</Text>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{I18n.t('splash.greeting_text')}</Text>
        {
          (this.state.progress || this.props.data.isFetching) && <LineDotsLoader size={5} color={theme.loadingBarColor} dotsNumber={5} betweenSpace={5} />
        }

        {progressView}
        
        { this.state.syncMessage && (<Text style={styles.messages}>{this.state.syncMessage}</Text>) || null }
      </View>
    )
  }
}

export default connect(
  state => ({
    data: state.splash,
    appStore: state.appStore
  }),
  dispatch => ({
    load: (appStore) => dispatch(loadUser(appStore)),
  })
)(Splash)
