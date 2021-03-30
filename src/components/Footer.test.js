// import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './footer'

Enzyme.configure({ adapter: new Adapter() })

describe('When App renders', () => {
  let renderedFooter;
  beforeEach(() => {
    renderedFooter = shallow(<Footer />);
  });
  it('displays Footer', () => {
    const footer = renderedFooter.find('h5');
    expect(footer.length).toEqual(1)
  })
})
