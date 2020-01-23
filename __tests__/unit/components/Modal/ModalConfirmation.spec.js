import { shallowMount } from '@vue/test-utils'
import useI18nGlobally from '../../__utils__/i18n'
import ModalConfirmation from '@/components/Modal/ModalConfirmation'

const i18n = useI18nGlobally()
let wrapper
beforeEach(() => {
  wrapper = shallowMount(ModalConfirmation, {
    i18n
  })
})
describe('ModalConfirmation', () => {
  it('should render modal', () => {
    expect(wrapper.isVueInstance()).toBeTrue()
  })

  it('should default portal target to "modal"', () => {
    expect(wrapper.props('portalTarget')).toBe('modal')
  })

  it('should change portal target', () => {
    wrapper = shallowMount(ModalConfirmation, {
      i18n,
      propsData: {
        portalTarget: 'test'
      }
    })
    expect(wrapper.props('portalTarget')).toBe('test')
  })
})
