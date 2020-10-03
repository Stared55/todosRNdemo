import React, { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import Share from 'react-native-share';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from 'src/components/navigation/Navbar';
import CustomButton from 'src/components/shared/CustomButton';
import ScrollViewWrapper from 'src/components/shared/ScrollViewWrapper';
import { AppState } from 'src/store/store';
import { clearTodos, getTodos, saveTodos } from 'src/store/todos/todosActions';
import { Colors } from 'src/utils/styles/colors';
import { xScale, yScale } from 'src/utils/styles/scale';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from 'src/components/navigation/RootNavigator';

type SettingsScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  'Settings'
>;

export interface SettingsScreenProps {
  navigation?: SettingsScreenNavigationProp;
}

const SettingsScreen: React.SFC<SettingsScreenProps> = () => {
  const { todos } = useSelector((state: AppState) => state.todos);
  const [message, setMessage] = React.useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    createPlainText();
  }, [todos]);

  const createPlainText = () => {
    let plainText = '';
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      const item = `${todo.title} ${todo.completed ? '+' : '-'}\n`;
      plainText = plainText.concat(item, plainText);
    }
    setMessage(plainText);
  };

  const options: any = Platform.select({
    ios: {
      activityItemSources: [
        {
          placeholderItem: { type: 'text', content: message },
          item: {
            default: { type: 'text', content: message },
            message: message,
          },
        },
      ],
    },
    default: {
      title: 'My todos',
      subject: 'My todos',
      message,
    },
  });

  const handleSaveTodos = () => {
    dispatch(saveTodos());
  };

  const handleLoadTodos = () => {
    dispatch(getTodos());
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  const handleShareList = () => {
    Share.open(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });
  };

  const warnAlert = () => {
    Alert.alert(
      'Warning',
      'Are you sure you want to clear your data?',
      [
        {
          text: 'Clear',
          onPress: () => handleClearTodos(),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <>
      <Navbar title="Settings" />
      <ScrollViewWrapper
        contentContainer={{
          justifyContent: 'center',
          flex: 1,
          paddingHorizontal: xScale(20),
        }}>
        <CustomButton label="Save Todos" handler={handleSaveTodos} />
        <CustomButton label="Load Todos" handler={handleLoadTodos} />
        <CustomButton
          label="Clear Todos + AsyncStorage"
          handler={warnAlert}
          containerStyles={{ backgroundColor: Colors.darkRed }}
        />
        <CustomButton
          label="Share List"
          handler={handleShareList}
          containerStyles={{
            marginTop: yScale(46),
          }}
        />
      </ScrollViewWrapper>
    </>
  );
};

export default SettingsScreen;
