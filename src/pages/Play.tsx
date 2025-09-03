// import { useState } from "react";

export default function Play() {
  // const [riddles, setRiddles] = useState([]);
  
  return (
    <div>
      <div id="play-status">
      <h2>status:</h2>
      <p>riddles answered: { }</p>
      <p>mistakes: { }</p>
      </div>
      <section className="page">
        <h1>name riddle: { }</h1>
        <form action="">
          <label htmlFor="taskDescription">taskDescription: { }</label>
          <br />
          <input type="text" id="taskDescription" name="taskDescription" />
          <br />
          <br />
          <button type="submit">check</button>
        </form>
      </section>
    </div>
  )
}
