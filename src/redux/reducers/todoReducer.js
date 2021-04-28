import { todoActions } from "../constants/todoConstants";

const initState = {
  todoList: [
    {
      id: 1,
      todo: "Get up",
    },
  ],
};

export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case todoActions.ADD_TODO:
      // let newTodoList = state.todoList.push(payload.todo);
      let newAddedState = {
        ...state,
        todoList: [...state.todoList, payload.todo],
      };

      return newAddedState;
    case todoActions.DEL_TODO:
      // let newTodoList = state.todoList.push(payload.todo);
      let newDelState = {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== payload.id),
      };

      return newDelState;

    default:
      return state;
  }
};
