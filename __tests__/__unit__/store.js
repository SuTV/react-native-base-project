import store from '@store'
// import reducer from '@store/reducer'

describe('Store', () => {
  it('creates correctly', () => {
    expect(store()).toMatchSnapshot()
  })
})
