import { useSelector } from "react-redux";
import style from "./priceSum.module.css";

const PriceSum = () => {
  const todos = useSelector((state) => state.todos.todos);
  let sumPrice = todos.reduce(
    (acum, currentValue) => +acum + +currentValue.price,
    0
  );
  return (
    <div className={style.sum_wrapper}>
      <div className={style.sum_sum}>Сума</div>
      <div className={style.sum_value}>{sumPrice}</div>
      <div className={style.sum_unit}>грн.</div>
    </div>
  );
};

export default PriceSum;
