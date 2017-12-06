import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-native-i18n', () => {
  const i18njs = require('i18n-js')
  const en = require('@i18n/locales/en')
  i18njs.translations = { en } // Optional ('en' is the default)

  return {
    t: jest.fn((k, o) => i18njs.t(k, o)),
  }
})

jest.mock('@assets/icons', () => jest.fn())
jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'))
//
// /**
//  * If we are running `e2e` tests, we want to setup and configure
//  * detox
//  */
// if (process.argv[2].includes('__e2e__')) {
//
// }
