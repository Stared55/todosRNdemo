import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'src/utils/styles/colors';
import { yScale } from 'src/utils/styles/scale';
import { ViewStyles } from 'src/utils/types/styleTypes';

export interface ScrollViewWrapperProps {
  children: React.ReactNode;
  scrollViewWrapper?: ViewStyles;
  contentContainer?: ViewStyles;
}

const ScrollViewWrapper: React.SFC<ScrollViewWrapperProps> = ({
  children,
  scrollViewWrapper,
  contentContainer,
}) => {
  return (
    <ScrollView
      style={{ ...styles.scrollViewWrapper, ...scrollViewWrapper }}
      contentContainerStyle={{
        ...styles.contentContainer,
        ...contentContainer,
      }}>
      {children}
    </ScrollView>
  );
};

export default ScrollViewWrapper;

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    paddingTop: yScale(12),
    justifyContent: 'space-between',
  },
  scrollViewWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
