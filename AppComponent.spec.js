// App.test.js
/**
 * @file AppComponent.spec.js
 * This file contains unit tests for the `AppComponent.vue` component using Vue Test Utils.
 */

import { mount } from '@vue/test-utils';
import App from '@/AppComponent.vue';

describe('App.vue', () => {
  /**
   * Test case for incrementing the count value when the Counter button is clicked.
   *
   * @test
   * This test mounts the `AppComponent`, simulates a button click in the `Counter` component,
   * and checks whether the `Display` component correctly shows the updated count.
   */
  it('increments count when Counter button is clicked', async () => {
    // Mount the AppComponent to simulate a full rendering.
    const wrapper = mount(App);
    
    // Find the button in the Counter component.
    const button = wrapper.find('button');
    
    // Simulate a click event on the button.
    await button.trigger('click');
    
    // Check if the updated count is correctly displayed in the Display component.
    expect(wrapper.text()).toContain('Count: 1');
  });
});
