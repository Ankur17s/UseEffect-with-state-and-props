import React from "react";
import "./style.css";
import User from "./User"

export default function App() {

  const [count, setCount] = React.useState(10);
  const [data, setData] = React.useState(20);

  return (
    <div>
      <User count={count} data={data}/>
      <button onClick={() => setCount(count + 1)}>update count</button>
      <br /><br />
      <button onClick={() => setData(data + 1)}>update data</button>
    </div>
  );
}
