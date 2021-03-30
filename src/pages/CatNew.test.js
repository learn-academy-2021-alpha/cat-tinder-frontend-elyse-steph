// import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatNew from './catNew'

Enzyme.configure({ adapter: new Adapter() })

describe('When App renders', () => {
  let renderedCatNew;
  beforeEach(() => {
    renderedCatNew = shallow(<CatNew />);
  });
  it('displays CatNew', () => {
    const h1 = renderedCatNew.find('h1');
    expect(h1.length).toEqual(1)
  })
})
