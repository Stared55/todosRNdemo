import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'src/utils/styles/colors';
import { xScale, yScale } from 'src/utils/styles/scale';
import { ITodo } from 'src/utils/types/todoTypes';

export interface TodoProps {
  todo: ITodo;
  setSelectedIds: (id: number) => void;
}

const Todo: React.SFC<TodoProps> = ({ todo, setSelectedIds }) => {
  const handleOnPress = () => {};
  const toggleActiveStatus = () => {
    todo.selected = !todo.selected;
    setSelectedIds(todo.id);
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.todoWrapper,
        shadowColor: todo.selected ? Colors.blue : 'rgba(0,0,0,0.4)',
      }}
      onPress={handleOnPress}
      onLongPress={toggleActiveStatus}>
      <View style={styles.leftColumn}>
        <Text>{todo.id}</Text>
      </View>
      <View style={styles.centerColumn}>
        <Text>{todo.title}</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text>{todo.completed ? 'done' : 'to do'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginVertical: xScale(6),
    height: yScale(40),
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftColumn: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  centerColumn: {
    paddingLeft: 6,
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '100%',
    alignItems: 'center',
  },
  rightColumn: {
    width: '15%',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
});
