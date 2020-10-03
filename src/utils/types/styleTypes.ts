import {
  FlexStyle,
  ShadowStyleIOS,
  TextStyleAndroid,
  TextStyleIOS,
  TransformsStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type ViewStyles = ViewStyle &
  FlexStyle &
  ShadowStyleIOS &
  TransformsStyle;

export type TextStyles = TextStyle &
  TextStyleIOS &
  TextStyleAndroid &
  ViewStyle;
