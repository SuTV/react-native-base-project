import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableNativeFeedback } from 'react-native'
import { SocialIcon, Icon, Avatar, List, ListItem, Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import icons from '@assets/icons'
import styles from './styles'
import I18n from '@i18n'
import { getShortUserNameTitle, getUserName, getUserProfilePicture, getUserCoverPicture } from '../Base/actions'
import { logOut } from './actions'

class SlideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={{uri: this.props.appStore.userInfo ? this.props.getUserCoverPicture(this.props.appStore.userInfo) : null}} style={styles.backgroundImage}>
            <View style={styles.avatar}>
              <Avatar
                width={55}
                height={55}
                icon={{name: 'person'}}
                title={this.props.appStore.userInfo ? this.props.getShortUserNameTitle(this.props.appStore.userInfo) : null}
                source={{uri: this.props.appStore.userInfo ? this.props.getUserProfilePicture(this.props.appStore.userInfo) : null}}
                activeOpacity={0.7}
              />
            </View>
          </Image>
          <View style={styles.menuStyle}>
            <View style={styles.sectionHeadingStyle}>
              <Text style={styles.sectionHeadingTextStyle}>
              {I18n.t('menu.statistics.title')}
              </Text>
              <Divider style={{ backgroundColor: 'lightgrey' }} />
            </View>
            <View style={styles.navSectionStyle}>
              <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => {}}>
                <View style={styles.menuItemRowStyle}>
                  <Icon name='thumb-up' size={20} color='lightgrey'/>
                  <Text style={styles.navItemStyle}>
                    {I18n.t('menu.statistics.reactions')}
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => {}}>
                <View style={styles.menuItemRowStyle}>
                  <Icon name='comment' size={20} color='lightgrey'/>
                  <Text style={styles.navItemStyle}>
                    {I18n.t('menu.statistics.posts')}
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => {}}>
                <View style={styles.menuItemRowStyle}>
                  <Icon name='person-pin' size={20} color='lightgrey'/>
                  <Text style={styles.navItemStyle}>
                    {I18n.t('menu.statistics.followers')}
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.menuStyle}>
            <View style={styles.sectionHeadingStyle}>
              <Text style={styles.sectionHeadingTextStyle}>
              {I18n.t('menu.stalking.title')}
              </Text>
              <Divider style={{ backgroundColor: 'lightgrey' }} />
            </View>
            <View style={styles.navSectionStyle}>
              <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => {}}>
                <View style={styles.menuItemRowStyle}>
                  <Icon name='search' size={20} color='lightgrey'/>
                  <Text style={styles.navItemStyle}>
                    {I18n.t('menu.stalking.who_viewed_my_profile')}
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => {}}>
                <View style={styles.menuItemRowStyle}>
                  <Icon name='favorite' size={20} color='lightgrey'/>
                  <Text style={styles.navItemStyle}>
                    {I18n.t('menu.stalking.who_react_me_most')}
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.menuStyle}>
            <View style={styles.sectionHeadingStyle}>
              <Text style={styles.sectionHeadingTextStyle}>
              {I18n.t('menu.support.title')}
              </Text>
              <Divider style={{ backgroundColor: 'lightgrey' }} />
            </View>
            <View style={styles.navSectionStyle}>
              <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => {}}>
                <View style={styles.menuItemRowStyle}>
                  <Icon name='feedback' size={20} color='lightgrey'/>
                  <Text style={styles.navItemStyle}>
                    {I18n.t('menu.support.feedback')}
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => {}}>
                <View style={styles.menuItemRowStyle}>
                  <Icon name='apps' size={20} color='lightgrey'/>
                  <Text style={styles.navItemStyle}>
                    {I18n.t('menu.support.other_apps')}
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          {/* <SocialIcon
            type='facebook'
          /> */}
          <SocialIcon
            type='instagram'
            iconSize={20}
            style={styles.socialButton}
          />

          <View style={{flex: 1}}>
            <SocialIcon
              title={I18n.t('menu.fb_log_out')}
              button
              type='facebook'
              iconSize={20}
              style={styles.socialButtonFull}
              onPress={() => this.props.logOut(this.props.appStore.tracker, this.props.appStore.userInfo.type)}
            />
            {/* <SocialIcon
              title={I18n.t('menu.insta_log_out')}
              button
              type='instagram'
            /> */}
          </View>
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({
    appStore: state.appStore
  }),
  dispatch => ({
    getShortUserNameTitle: (userInfo) => getShortUserNameTitle(userInfo),
    getUserName: (userInfo) => getUserName(userInfo),
    getUserProfilePicture: (userInfo) => getUserProfilePicture(userInfo),
    getUserCoverPicture: (userInfo) => getUserCoverPicture(userInfo),
    logOut: (tracker, type) => dispatch(logOut(tracker, type)),
  })
)(SlideMenu)
