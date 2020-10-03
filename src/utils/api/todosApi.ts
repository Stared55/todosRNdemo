import { ITodo } from 'src/utils/types/todoTypes';
export const BACKEND_API = 'https://jsonplaceholder.typicode.com/';

export const getTodosApi = async (): Promise<ITodo[] | undefined> => {
  try {
    const response = await fetch(`${BACKEND_API}todos`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    const jsonResponse: ITodo[] = await response.json();

    return jsonResponse;
  } catch (error) {
    console.log('[GET TODOS API ERROR]: ', error);
  }
};
