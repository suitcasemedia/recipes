import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Filter from '../../components/filters';
import RecipeListing from '../../components/recipe-listing';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  shallow(<Provider><RecipeListing/></Provider>);
});

