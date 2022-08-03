import { useState, useEffect } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onSelect = (event) => {
    setSelect(() => event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>목록을 가져오는 중입니다...</strong>
      ) : (
        <select onChange={onSelect}>
          <option>Select coin</option>
          {coins.map((coin) => (
            <option id="asd" key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h3>{select}</h3>
    </div>
  );
}

export default App;
