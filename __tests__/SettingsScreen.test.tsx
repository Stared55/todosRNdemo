import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import SettingsScreen from 'src/screens/SettingsScreen';

jest.mock('react-redux', () => ({
  useDispatch: () => () => jest.fn(),
  useSelector: (selector: any) =>
    selector({
      loading: false,
      todos: [],
      error: null,
    }),
}));

describe('SettingsScreen', () => {
  let component: ShallowWrapper;
  let props: any;

  beforeEach(() => {
    component = shallow(<SettingsScreen />);
    props = component.props();
    jest.clearAllMocks();
  });

  it('should match to snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render navbar with correct label', () => {
    const title = props.children[0].props.title;
    expect(title).toEqual('Settings');
  });

  it('should render 4 buttons', () => {
    const buttons = props.children[1].props.children;
    expect(buttons).toHaveLength(4);
  });
});
