// import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatShow from './catShow'

Enzyme.configure({ adapter: new Adapter() })

describe('When App renders', () => {
  let renderedCatShow;
  beforeEach(() => {
    renderedCatShow = shallow(<CatShow />);
  });
  it('displays CatShow', () => {
    const h1 = renderedCatShow.find('h1');
    expect(h1.length).toEqual(1)
  })
})
