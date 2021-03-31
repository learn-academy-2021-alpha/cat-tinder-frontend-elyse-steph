// import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('When App renders', () => {
  let renderedNotFound;
  beforeEach(() => {
    renderedNotFound = shallow(<NotFound />);
  });
  it('displays NotFound', () => {
    const h1 = renderedNotFound.find('h1');
    expect(h1.length).toEqual(1)
    const img = renderedNotFound.find('img')
    expect(img.length).toEqual(1)
  })
})
