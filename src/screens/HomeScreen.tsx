import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from 'src/components/navigation/Navbar';
import ActionPanel from 'src/components/todos/ActionPanel';
import Todo from 'src/components/todos/Todo';
import { AppState } from 'src/store/store';
import { getTodos } from 'src/store/todos/todosActions';
import { Colors } from 'src/utils/styles/colors';
import { ITodo } from 'src/utils/types/todoTypes';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from 'src/components/navigation/RootNavigator';

type HomeScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Home'>;

export interface HomeScreenProps {
  navigation?: HomeScreenNavigationProp;
}

const HomeScreen: React.SFC<HomeScreenProps> = () => {
  const { todos, loading } = useSelector((state: AppState) => state.todos);
  const [items, setItems] = React.useState<ITodo[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  useEffect(() => {
    const itemsCopy = copyTodos();
    setItems(itemsCopy);
    renderList([...itemsCopy]);
  }, [todos]);

  const copyTodos = () => {
    if (todos?.length > 0) {
      return todos.map((todo: ITodo) => {
        return {
          ...todo,
          selected: false,
        };
      });
    } else {
      return [];
    }
  };

  const handleSelectedIds = (id: number): void => {
    let updatedSelectedIds = [...selectedIds];
    if (updatedSelectedIds.includes(id)) {
      updatedSelectedIds = updatedSelectedIds.filter(
        (selected) => selected !== id,
      );
    } else {
      updatedSelectedIds.push(id);
    }
    setSelectedIds(updatedSelectedIds);
  };

  const clearSelectedCards = () => {
    const itemsCopy = copyTodos();
    setItems([...itemsCopy]);
    renderList([...itemsCopy]);
    setSelectedIds([]);
  };

  const renderList = ({ item }: any) => {
    if (!item) {
      return <Text>No todos</Text>;
    }
    return (
      <Todo key={item.id} todo={item} setSelectedIds={handleSelectedIds} />
    );
  };

  const content =
    todos && todos.length > 0 ? (
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderList}
      />
    ) : (
      <View style={styles.noTodos}>
        <Text style={{}}>No todos found!</Text>
      </View>
    );

  return (
    <>
      <Navbar title="Home" />
      <ActionPanel clearSelected={clearSelectedCards} selected={selectedIds} />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.wrapper}>{content}</View>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  flatList: {
    width: '100%',
  },
  flatListContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTodos: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
