/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import App from './App';

describe('Render app', () => {

  it('renders children correctly', () => {
    const wrapper = render(
      <App>
          <div className="child" />
      </App>,
    );
    expect(wrapper.find('div.child').length).to.eq(1);
  });

});
