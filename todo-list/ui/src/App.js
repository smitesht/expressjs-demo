import { useState, useEffect } from "react";
import "./App.css";
import Task from "./components/Task";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/tasks`).then((resp) => {
      setItems(resp.data);
    });
  }, []);

  const onClickHandle = () => {
    axios.post(`http://localhost:5000/tasks`, { task: item }).then((resp) => {
      setItems(resp.data);
    });

    console.log(item);
    setItem("");
  };

  const onInputChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        <h1>Item List</h1>
        <div className="input-wrapper">
          <input
            className="input-type"
            type="text"
            value={item}
            placeholder="Enter your task"
            onChange={(e) => onInputChange(e)}
          />
          <button className="btn" onClick={() => onClickHandle()}>
            Add
          </button>
        </div>
        <ul className="list-items">
          {items.map((data) => {
            return <li key={data.id}>{data.task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
