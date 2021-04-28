import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { del_todo } from "../redux/actions/todoActions";
import Form from "./Form";

const List = () => {
  const todoList = useSelector((state) => state.todoReducer.todoList);
  const dispatch = useDispatch();
  console.log(todoList);
  const RenderList = ({ list }) => {
    const removeItem = (id) => {
      console.log(id);
      dispatch(del_todo(id));
    };
    return (
      <>
        {list.map((item) => {
          return (
            <article key={item.id} className="grocery-item">
              <p className="title">{item.todo}</p>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </article>
          );
        })}
      </>
    );
  };
  return (
    <main>
      <div className="section-center">
        <Form />
        <div className="grocery-container">
          <RenderList list={todoList} />
        </div>
      </div>
    </main>
  );
};

export default List;
