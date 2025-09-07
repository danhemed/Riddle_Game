import { useState } from "react";

export default function Play() {
  const [riddles, setRiddles] = useState([{name: "", taskDescription: "", correctAnswer: ""}]);

  async function getRiddle() {
    try {
      const res = await fetch("http://localhost:3005/riddles");
      const resRiddles = await res.json();
  
      setRiddles(resRiddles);
  
      localStorage.setItem("riddles", JSON.stringify(riddles));
    } catch (err) {
      console.log(err);
    }
  }

  console.log(riddles);
  getRiddle();
    
  return (
    <div>
      <div id="play-status">
      <h2>status:</h2>
      <p>riddles answered: { }</p>
      <p>mistakes: { }</p>
      </div>
      <section className="page">
        <h1>name riddle: {riddles[0].name}</h1>
        <form action="">
          <label htmlFor="taskDescription">taskDescription: {riddles[0].taskDescription}</label>
          <br />
          <input type="text" id="taskDescription" name="taskDescription" required/>
          <br />
          <br />
          <button type="submit">check</button>
        </form>
      </section>
    </div>
  )
}
