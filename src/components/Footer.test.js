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
    // const footerMessage = renderedFooter.find("Footer");
    expect(footer.length).toEqual(1)
    // expect(footerMessage.text()).toEqual("Brought to you by Steph and Elyse from Learn Academy!")
  })
})
