import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ScrollViewWrapper from 'src/components/shared/ScrollViewWrapper';
import { Text } from 'react-native';

describe('ScrollViewWrapper', () => {
  let component: ShallowWrapper;
  let props: any;
  let children = <Text>test test</Text>;
  const scrollViewWrapper = { backgroundColor: 'green' };
  const contentContainer = { backgroundColor: 'yellow' };

  beforeEach(() => {
    component = shallow(
      <ScrollViewWrapper
        scrollViewWrapper={scrollViewWrapper}
        contentContainer={contentContainer}>
        {children}
      </ScrollViewWrapper>,
    );
    props = component.props();
    jest.clearAllMocks();
  });

  it('should match to snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correct children', () => {
    const c = component.find({ children: children });
    expect(c).toHaveLength(1);
  });

  it('should render correct container styles', () => {
    expect(props.style.backgroundColor).toEqual('green');
  });

  it('should render correct label styles', () => {
    expect(props.contentContainerStyle.backgroundColor).toEqual('yellow');
  });
});
