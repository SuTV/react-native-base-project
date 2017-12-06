import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    height: 100,
    resizeMode: 'cover', // or 'stretch'
    marginBottom: 10
  },
  avatar: {
    width: 56,
    height: 56,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 15,
    // flexDirection: 'row',
  },
  sectionHeadingTextStyle: {
    fontSize: 16
  },
  menuStyle: {
    flex: 1
  },
  navItemStyle: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#616161'
  },
  menuItemRowStyle: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    // backgroundColor: '#9e9e9e'
  },
  navSectionStyle: {
  },
  footerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  socialButton: {
    height: 40, 
    width: 40
  },
  socialButtonFull: {
    height: 40,
  }
})
