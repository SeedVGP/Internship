import { shallowMount } from '@vue/test-utils';
import EmailComponent from '@/components/EmailComponent.vue';

/**
 * Unit tests for the EmailComponent.
 *
 * @group EmailComponent
 */
describe('EmailComponent', () => {
  let wrapper;

  /**
   * Mounts the EmailComponent before each test.
   *
   * @returns {void}
   */
  beforeEach(() => {
    wrapper = shallowMount(EmailComponent);
  });

  /**
   * Test that the component renders the email input and submit button.
   *
   * @returns {void}
   */
  it('renders the input and button', () => {
    expect(wrapper.find('input[type="email"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  /**
   * Test that an error message is displayed for an invalid email format.
   *
   * @returns {void}
   */
  it('displays an error message for invalid email format', async () => {
    // Set an invalid email
    await wrapper.find('input[type="email"]').setValue('invalid-email');
    await wrapper.vm.validateEmail();
    
    // Check if the error message is displayed
    const errorMessage = wrapper.find('.error');
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toBe('Invalid email format');
  });

  /**
   * Test that no error message is displayed for a valid email format.
   *
   * @returns {void}
   */
  it('does not display an error message for valid email format', async () => {
    // Set value for the email input and trigger validation
    await wrapper.find('input[type="email"]').setValue('test@example.com');
    await wrapper.vm.validateEmail();
    
    // Check if the error message is not displayed
    const errorMessage = wrapper.find('.error');
    expect(errorMessage.exists()).toBe(false);
  });

  /**
   * Test that the component emits the email when the submit button is clicked.
   *
   * @returns {void}
   */
  it('emits the email when the submit button is clicked', async () => {
    // Set value for the email input and trigger validation
    await wrapper.find('input[type="email"]').setValue('test@example.com');
    await wrapper.vm.validateEmail();
    
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('submit')).toBeTruthy();
    expect(wrapper.emitted('submit')[0]).toEqual(['test@example.com']);
  });
});
