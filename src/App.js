import { useState, useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>HELLO</h1>;
};

function App() {
  const [value, setValue] = useState(true);
  const onClick = () => {
    setValue((prev) => !prev);
  };
  return (
    <div>
      {value ? <Hello /> : null}
      <button onClick={onClick}>{value ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
