import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo !== "") {
      setTodos((currValue) => [todo, ...currValue]);
      setTodo("");
    }
  };
  return (
    <div>
      <h1>My ToDos ({todos.length})</h1>
      <form>
        <input
          type="text"
          value={todo}
          placeholder="Write your To Do..."
          onChange={onChange}
        />
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <ul>
        {todos.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
