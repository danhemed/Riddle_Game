import { useState } from "react";

export default function Play() {
  const [riddles, setRiddles] = useState([]);
  
  return (
    <div>
      <h2>status:</h2>
      <p>riddles answered: { }</p>
      <p>mistakes: { }</p>
      <section className="page">
        <h1>name riddle: { }</h1>
        <form action="">
          <label htmlFor="taskDescription">taskDescription: { }</label>
          <input type="text" id="taskDescription" name="taskDescription" />
          <button type="submit">check</button>
        </form>
      </section>
    </div>
  )
}
