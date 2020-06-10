import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import App from '../../components/App';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


// eslint-disable-next-line no-undef
describe('<App />', () => {
  // eslint-disable-next-line no-undef
  it('renders a <Header /> component', () => {
    const wrapper = mount(<App stores={{}} />);
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });
  // eslint-disable-next-line no-undef
  it('renders a <Footer /> component', () => {
    const wrapper = mount(<App stores={{}} />);
    expect(wrapper.find(Footer)).to.have.lengthOf(1);
  });
});
