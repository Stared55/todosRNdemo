import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import HomeScreen from 'src/screens/HomeScreen';
import { mockedTodos } from 'src/utils/constants/mocks';

jest.mock('react-redux', () => ({
  useDispatch: () => () => jest.fn(),
  useSelector: (selector: any) =>
    selector({
      loading: false,
      todos: [],
      error: null,
    }),
}));

describe('HomeScreen', () => {
  let component: ShallowWrapper;
  let props: any;

  beforeEach(() => {
    component = shallow(<HomeScreen />);
    props = component.props();
    jest.clearAllMocks();
  });

  it('should match to snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render navbar with correct label', () => {
    const title = props.children[0].props.title;
    expect(title).toEqual('Home');
  });

  it('should render 3 children', () => {
    const children = props.children;
    expect(children).toHaveLength(3);
  });
});
