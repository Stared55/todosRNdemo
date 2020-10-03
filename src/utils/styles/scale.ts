import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const xScale = (size: number): number => (width / guidelineBaseWidth) * size;
const yScale = (size: number): number => (height / guidelineBaseHeight) * size;

export { xScale, yScale };
