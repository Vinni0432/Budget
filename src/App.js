// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "./store/todoSlice";

import "./App.css";
// import InputField from "./components/InputField";
// import TodoList from "./components/TodoList";
// import ButtonSubmit from "./components/ButtonSubmit";
// import PriceSum from "./components/PriceSum";
import Menu from "./UI/Menu";
import Wrapper from "./UI/Wrapper";

function App() {
  // const [todos, setTodos] = useState([]);

  // const dispatch = useDispatch();
  // const [text, setText] = useState("");
  // const [price, setPrice] = useState("");

  // const addTask = () => {
  //   dispatch(addTodo({ text, price }));
  //   setText("");
  //   setPrice("");
  // };

  // const addTodo = () => {
  //   if (text.trim().length) {
  //     setTodos([
  //       ...todos,
  //       {
  //         id: new Date().toISOString(),
  //         text,
  //         completed: false,
  //       },
  //     ]);
  //     setText("");
  //   }
  // };

  // const removeTodo = (todoId) => {
  //   // setTodos(todos.filter((todo) => todo.id !== todoId));
  // };

  // const toggleTodoCompleted = (todoId) => {
  //   // setTodos(
  //   //   todos.map((todo) => {
  //   //     if (todo.id !== todoId) return todo;
  //   //     return { ...todo, completed: !todo.completed };
  //   //   })
  //   // );
  // };

  return (
    <div className="App">
      <Menu />
      {/* <div>
        <InputField
          type="text"
          text={text}
          handleInput={setText}
          handleSubmit={addTask}
          placeholder="Вид робіт"
        />
        <InputField
          type="number"
          text={price}
          handleInput={setPrice}
          handleSubmit={addTask}
          placeholder="Ціна, грн"
        />
        <ButtonSubmit buttonName="Додати" handleSubmit={addTask} />
      </div> */}

      {/* <TodoList />
      <PriceSum /> */}
      <Wrapper />
    </div>
  );
}

export default App;
