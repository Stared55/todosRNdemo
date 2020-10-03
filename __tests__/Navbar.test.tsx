import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Navbar from 'src/components/navigation/Navbar';
import { Text, SafeAreaView, StatusBar, View } from 'react-native';

describe('Navbar', () => {
  let component: ShallowWrapper;
  let props: any;
  const title = 'Home';
  let children = (
    <>
      <SafeAreaView />
      <StatusBar />
      <View>
        <Text>{title}</Text>
      </View>
    </>
  );

  beforeEach(() => {
    component = shallow(<Navbar title={title}>{children}</Navbar>);
    props = component.props();
    jest.clearAllMocks();
  });

  it('should match to snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it(`should render correct navbar title`, () => {
    const c = component.find({ children: title });
    expect(c).toHaveLength(1);
  });

  it(`should render 3 children`, () => {
    expect(props.children).toHaveLength(3);
  });
});
