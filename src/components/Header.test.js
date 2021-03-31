// import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe('When App renders', () => {
  let renderedHeader;
  beforeEach(() => {
    renderedHeader = shallow(<Header />);
  });
  it('displays Header', () => {
    const navbar = renderedHeader.find('Nav');
    expect(navbar.length).toEqual(1)
  })
  // it('verifies classname has specific name', () => {
  //   const findClassName = renderedHeader.find('[className = navbar]');
  //   expect(findClassName).toEqual('navbar')
  // })
})
