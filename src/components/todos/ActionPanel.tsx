import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  addTodo,
  deleteTodos,
  toggleTodos,
} from 'src/store/todos/todosActions';
import { Colors } from 'src/utils/styles/colors';
import { xScale } from 'src/utils/styles/scale';
import { ITodo } from 'src/utils/types/todoTypes';
import CustomButton from '../shared/CustomButton';

export interface ActionPanelProps {
  selected: number[];
  clearSelected: () => void;
}

const ActionPanel: React.SFC<ActionPanelProps> = ({
  selected,
  clearSelected,
}) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const dispatch = useDispatch();

  const handleInputValue = (text: string): void => {
    setNewTodoTitle(text);
  };

  const handleClearSelected = (): void => {
    clearSelected();
  };

  const handleToggleTodo = (state: boolean): void => {
    dispatch(toggleTodos(selected, state));
    clearSelected();
  };

  const handleActionPanel = () => {
    if (newTodoTitle.trim() === '') {
      return;
    }
    const id = Math.floor(Math.random() * (9999 - 11));
    const newTodo: ITodo = {
      userId: 1,
      id,
      title: newTodoTitle,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setNewTodoTitle('');
  };

  const handleDeleteTodos = () => {
    dispatch(deleteTodos(selected));
    clearSelected();
  };

  return (
    <View style={styles.mainWrapper}>
      {selected?.length > 0 ? (
        <View style={styles.buttonsSection}>
          <CustomButton
            label="Set Done"
            handler={() => handleToggleTodo(true)}
            containerStyles={{
              width: '22 %',
            }}
          />
          <CustomButton
            label="Set To Do"
            handler={() => handleToggleTodo(false)}
            containerStyles={{
              width: '22 %',
            }}
          />
          <CustomButton
            label="Clear"
            handler={handleClearSelected}
            containerStyles={{
              width: '20 %',
            }}
          />
          <CustomButton
            label="Delete Todos"
            handler={handleDeleteTodos}
            containerStyles={{
              width: '30%',
            }}
          />
        </View>
      ) : (
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputValue(text)}
            value={newTodoTitle}
            placeholder="Take out the garbage ..."
          />
          <CustomButton
            label="ADD"
            handler={handleActionPanel}
            containerStyles={{
              width: '20%',
              height: 40,
              paddingVertical: 0,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default ActionPanel;

const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  inputWrapper: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: xScale(12),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  buttonsSection: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: xScale(12),
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 12,
  },
});
