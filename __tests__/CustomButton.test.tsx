import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CustomButton from 'src/components/shared/CustomButton';

describe('CustomButton', () => {
  const label = 'Label';
  const containerStyles = { backgroundColor: 'red' };
  const labelStyles = { color: 'red' };
  const handler = jest.fn();
  let component: ShallowWrapper;
  let props: any;

  beforeEach(() => {
    component = shallow(
      <CustomButton
        labelStyles={labelStyles}
        containerStyles={containerStyles}
        handler={handler}
        label={label}
      />,
    );
    props = component.props();
    jest.clearAllMocks();
  });

  it('should match to snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should display correct label', () => {
    const labelValue = component.find({ children: label });
    expect(labelValue).toHaveLength(1);
  });

  it('should run callback', () => {
    component.simulate('press');
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('should render correct container styles', () => {
    expect(props.style.backgroundColor).toEqual('red');
  });

  it('should render correct label styles', () => {
    const children = component.children();
    const childrenProps = children.props();
    expect(childrenProps.style.color).toEqual('red');
  });
});
