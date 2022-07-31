import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    console.log("I run one time");
  }, []);
  useEffect(() => {
    console.log("Call the API");
  }, [counter]);
  useEffect(() => {
    console.log("SEARCH FOR: ", keyword);
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
