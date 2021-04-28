import { todoActions } from "../constants/todoConstants";

const initState = {
  todoList: [],
};

export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case todoActions.ADD_TODO:
      let newAddedState = {
        ...state,
        todoList: [...state.todoList, payload.todo],
      };

      return newAddedState;
    case todoActions.DEL_TODO:
      let newDelState = {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== payload.id),
      };

      return newDelState;

    case todoActions.TOGGLE_DONE:
      let newDoneState = {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === payload.id) {
            item.done = !item.done;
          }
          return item;
        }),
      };

      return newDoneState;

    default:
      return state;
  }
};
