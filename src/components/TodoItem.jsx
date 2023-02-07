import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";
import style from "./todoItem.module.css";

const TodoItem = ({ id, text, price, completed }) => {
  const dispatch = useDispatch();
  const date = new Date();
  return (
    <div>
      <li key={id}>
        <div className={style.wrapper}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => dispatch(toggleTodoComplete({ id }))}
          />
          <div className={style.item_date}>{date.toLocaleDateString()}</div>
          <div className={style.item_text}>{text}</div>
          <div style={{ marginLeft: "20px" }}>{price} грн.</div>
          <div className="delete" onClick={() => dispatch(removeTodo({ id }))}>
            &times;
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
