import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ActionPanel from 'src/components/todos/ActionPanel';

jest.mock('react-redux', () => ({
  useDispatch: () => () => jest.fn(),
  useSelector: (selector: any) =>
    selector({
      loading: false,
      todos: [],
      error: null,
    }),
}));

describe('ActionPanel', () => {
  const selected = [1, 3, 5];
  const handler = jest.fn();
  const placeholder = 'Take out the garbage ...';
  const label = 'ADD';
  let component: ShallowWrapper;
  let props: any;

  beforeEach(() => {
    component = shallow(
      <ActionPanel clearSelected={handler} selected={selected} />,
    );
    props = component.props();
    jest.clearAllMocks();
  });

  it('should match to snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should display input with placeholder', () => {
    component = shallow(<ActionPanel clearSelected={handler} selected={[]} />);
    props = component.props();
    const input = props.children.props.children[0];
    const inputPlaceholder = input.props.placeholder;
    expect(inputPlaceholder).toEqual(placeholder);
  });

  it('should display add button', () => {
    component = shallow(<ActionPanel clearSelected={handler} selected={[]} />);
    props = component.props();
    const button = props.children.props.children[1];
    const buttonLabel = button.props.label;
    expect(buttonLabel).toEqual(label);
  });

  it('should display only 4 buttons', () => {
    const buttonsLength = props.children.props.children.length;
    expect(buttonsLength).toEqual(4);
  });
});
