import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onNewTodo = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currValue) => [todo, ...currValue]);
    setTodo("");
  };
  console.log(todos);
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onClick={onSubmit}>
        <input
          onChange={onNewTodo}
          type="text"
          value={todo}
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
