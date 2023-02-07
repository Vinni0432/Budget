import AddInputItem from "../components/AddInputItem";
import PriceSum from "../components/PriceSum";
import TodoList from "../components/TodoList";

import style from "./wrapper.module.css";

const Wrapper = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <AddInputItem />
      </div>
      <div className={style.column}>
        <TodoList />
        <PriceSum />
      </div>
    </div>
  );
};

export default Wrapper;
