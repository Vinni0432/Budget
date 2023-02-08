import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

import InputField from "./InputField";
import ButtonSubmit from "./ButtonSubmit";

import style from "./AddInputItem.module.css";

const AddInputItem = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");

  const addTask = () => {
    dispatch(addTodo({ text, price }));
    setText("");
    setPrice("");
  };

  return (
    <div className={style.wrapper}>
      <InputField
        className={style.inputField}
        type="text"
        text={text}
        handleInput={setText}
        handleSubmit={addTask}
        placeholder="Вид робіт"
      />
      <InputField
        className={style.inputField}
        type="number"
        text={price}
        handleInput={setPrice}
        handleSubmit={addTask}
        placeholder="Ціна, грн"
      />

      <ButtonSubmit
        className={style.btn}
        buttonName="Додати"
        handleSubmit={addTask}
        disabled={!(text.length && price.length && price > 0)}
      />
    </div>
  );
};

export default AddInputItem;
