import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Todo from 'src/components/todos/Todo';
import { ITodo } from 'src/utils/types/todoTypes';

describe('Todo', () => {
  const todo: ITodo = {
    id: 1,
    userId: 1,
    title: 'lorem',
    completed: false,
  };
  const handler = jest.fn();
  let component: ShallowWrapper;
  let props: any;

  beforeEach(() => {
    component = shallow(<Todo todo={todo} setSelectedIds={handler} />);
    props = component.props();
    jest.clearAllMocks();
  });

  it('should match to snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should display correct todo title', () => {
    const labelValue = component.find({ children: 'lorem' });
    expect(labelValue).toHaveLength(1);
  });

  it('should display correct todo id', () => {
    const id = component.find({ children: 1 });
    expect(id).toHaveLength(1);
  });

  it('should display correct todo userId', () => {
    const id = component.find({ children: 1 });
    expect(id).toHaveLength(1);
  });

  it('should display correct todo completed state', () => {
    const id = component.find({ children: 'to do' });
    expect(id).toHaveLength(1);
  });

  it('should run callback', () => {
    component.simulate('longPress');
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
