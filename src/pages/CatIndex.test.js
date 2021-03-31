// import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatIndex from './catIndex'

Enzyme.configure({ adapter: new Adapter() })

describe('When App renders', () => {
  let renderedCatIndex;
  beforeEach(() => {
    renderedCatIndex = shallow(<CatIndex />);
  });
  it('displays CatIndex', () => {
    const h1 = renderedCatIndex.find('h1');
    expect(h1.length).toEqual(1)
  })
})
