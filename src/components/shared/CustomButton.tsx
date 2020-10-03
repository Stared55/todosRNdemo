import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from 'src/utils/styles/colors';
import { yScale } from 'src/utils/styles/scale';
import { ViewStyles, TextStyles } from 'src/utils/types/styleTypes';

export interface CustomButtonProps {
  handler: () => void;
  label: string;
  containerStyles?: ViewStyles;
  labelStyles?: TextStyles;
}

const CustomButton: React.SFC<CustomButtonProps> = ({
  handler,
  label,
  labelStyles,
  containerStyles,
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonWrapper, ...containerStyles }}
      onPress={handler}>
      <Text style={{ ...styles.text, ...labelStyles }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    paddingVertical: yScale(12),
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    borderWidth: 1,
    borderColor: Colors.dark,
    width: '100%',
    marginVertical: yScale(3),
  },
  text: {
    color: Colors.white,
  },
});
