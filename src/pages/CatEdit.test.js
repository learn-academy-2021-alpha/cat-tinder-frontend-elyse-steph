// import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatEdit from './catEdit'

Enzyme.configure({ adapter: new Adapter() })

describe('When App renders', () => {
  let renderedCatEdit;
  beforeEach(() => {
    renderedCatEdit = shallow(<CatEdit />);
  });
  it('displays CatEdit', () => {
    const h1 = renderedCatEdit.find('h1');
    expect(h1.length).toEqual(1)
  })
})
