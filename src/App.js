import React, { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { useForm } from "./hooks/useForm";

function App() {
  const [number, setNum] = useState(
    JSON.parse(localStorage.getItem("triviaNum"))
  );

  const [inputs, handleInputs] = useForm({
    inputNum: 0,
  });

  const { data, loadingData } = useFetch(
    `http://numbersapi.com/${number}/trivia`
  );

  useEffect(() => {
    localStorage.setItem("triviaNum", JSON.stringify(number));
  }, [number]);

  return (
    <div className="App">
      <input
        type="number"
        name="inputNum"
        value={inputs.inputNum}
        onChange={handleInputs}
      />
      <button onClick={() => setNum(inputs.inputNum)}>Fetch Fact</button>

      {loadingData ? <h2>Fetching data...</h2> : <h1>{data}</h1>}
    </div>
  );
}

export default App;
