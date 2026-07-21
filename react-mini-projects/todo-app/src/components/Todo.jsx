import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    const trimmedTask = task.trim();

    if (trimmedTask === "") return;

    const newTodo = {
      id: Date.now(),
      text: trimmedTask,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="container">
      <div className="todo-card">
        <h1>Todo List</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>Add</button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                className={todo.completed ? "completed" : ""}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>

              <button
                className="delete-btn"
                onClick={() => deleteTask(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;