import { todoActions } from "../constants/todoConstants";

export const add_todo = (todo) => {
  return {
    type: todoActions.ADD_TODO,
    payload: {
      todo: todo,
    },
  };
};

export const del_todo = (id) => {
  return {
    type: todoActions.DEL_TODO,
    payload: {
      id: id,
    },
  };
};

export const toggle_done = (id) => {
  return {
    type: todoActions.TOGGLE_DONE,
    payload: {
      id: id,
    },
  };
};
