import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "../redux/actions/todoActions";
import { uuid } from "uuidv4";

const Form = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add_todo({
        id: uuid(),
        todo: name,
        done: false,
      })
    );
  };
  return (
    <div>
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>todo list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. pay bills"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
