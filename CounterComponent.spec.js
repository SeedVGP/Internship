// CounterComponent.test.js
import { shallowMount } from '@vue/test-utils';
import CounterComponent from '@/components/CounterComponent.vue';

describe('CounterComponent.vue', () => {
  it('renders the initial counter value', () => {
    // Mount the component
    const wrapper = shallowMount(CounterComponent);

    // Assert that the initial counter value is 0
    expect(wrapper.text()).toContain('0');
  });

  it('increments the counter when button is clicked', async () => {
    // Mount the component
    const wrapper = shallowMount(CounterComponent);

    // Find the button and simulate a click event
    const button = wrapper.find('button');
    await button.trigger('click');

    // Assert that the counter value is incremented to 1
    expect(wrapper.text()).toContain('1');
  });
});
