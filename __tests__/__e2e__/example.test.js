import 'react-native'
const detox = require('detox')
const config = require('../../package.json').detox

/* eslint-disable no-undef*/

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000

beforeAll(async () => {
  await detox.init(config)
  await detox.init(config, { launchApp: false })
  await device.launchApp({ permissions: { notifications: 'YES' } })
})

afterAll(async () => {
  await detox.cleanup()
})

beforeEach(async () => {
  await device.reloadReactNative()
})

describe('Example', () => {
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible()
  })

  it('should navigate correctly', async () => {
    await element(by.type('RCTImageView'))
      .atIndex(2)
      .tap()

    await expect(element(by.id('add'))).toBeVisible()

    await element(by.type('RCTImageView'))
      .atIndex(0)
      .tap()

    await expect(element(by.id('settings'))).toBeVisible()
  })
})
