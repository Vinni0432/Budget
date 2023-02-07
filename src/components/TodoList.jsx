import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({ toggleTodoCompleted, removeTodo }) => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodoCompleted={toggleTodoCompleted}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
