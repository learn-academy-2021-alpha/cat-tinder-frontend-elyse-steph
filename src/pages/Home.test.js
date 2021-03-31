// import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home renders', () => {
  let renderedHome;
  beforeEach(() => {
    renderedHome = shallow(<Home />);
  });
  it('displays just one image of a cat', () => {
    //act
    const img = renderedHome.find('img');
    // assert
    expect(img.length).toEqual(1)
  })
})
