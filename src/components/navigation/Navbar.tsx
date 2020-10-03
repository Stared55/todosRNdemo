import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'src/utils/styles/colors';
import { yScale } from 'src/utils/styles/scale';

export interface NavbarProps {
  title: string;
}

const Navbar: React.SFC<NavbarProps> = ({ title }) => {
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <StatusBar backgroundColor={Colors.white} translucent={false} />
      <View style={styles.navbar}>
        <Text style={styles.label}>{title}</Text>
      </View>
    </>
  );
};
export default Navbar;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.white,
  },
  navbar: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: yScale(50),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderColor: Colors.grey,
    borderBottomWidth: 0.6,
  },
  label: {
    fontSize: yScale(24),
  },
});
