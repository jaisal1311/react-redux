import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { del_todo, toggle_done } from "../redux/actions/todoActions";
import Form from "./Form";

const List = () => {
  const todoList = useSelector((state) => state.todoReducer.todoList);
  const dispatch = useDispatch();
  const RenderList = ({ list }) => {
    const removeItem = (id) => {
      console.log(id);
      dispatch(del_todo(id));
    };
    const toggleDone = (id) => {
      console.log(id);
      dispatch(toggle_done(id));
    };
    return (
      <>
        {list.map((item) => {
          return (
            <article key={item.id} className="grocery-item">
              <p className="title">{item.todo}</p>
              <div className="button-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => {
                    toggleDone(item.id);
                  }}
                >
                  {!item.done ? "Mark as Done" : "Not Done ?"}
                </button>

                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
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
