export default function SignIn() {
  const comeIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputUsername = e.currentTarget.username.value;
    const inputPassword = e.currentTarget.password.value;

    if (inputUsername.trim() === "" || inputPassword.trim() === "") {
      return window.alert("You didn't enter anything!");
    }

    try {
      const res = await fetch(`http://localhost:3005/players/${inputUsername}`);
      
      const user = await res.json();
  
      if (user) {
        if (user.username === inputUsername || user.password === inputPassword) {
          window.alert("The details are correct.!\nYou are moving to another page.")
          window.location.href = "/play";
        }
      } else {
        window.alert("Failed to register player!");
      }
    } catch (err) {
      console.error("Error posting player:", err);
      window.alert("Server error!");
    }
  }
  
  return (
    <>
        <section className="page">
        <h1>Sign In</h1>
        <form onSubmit={comeIn}>
            <span style={{ color: 'red' }}>*  </span>
            <label htmlFor="username">Enter UserName:</label>
            <br />
            <input type="text" name="username" placeholder="example: israel israeli" required/>
            <br />
            <br />
            <span style={{ color: 'red' }}>*  </span>
            <label htmlFor="password">Enter Password:</label>
            <br />
            <input type="text" name="password" placeholder="example: 1234" required/>
            <br />
            <br />
            <button type="submit">Come In</button>
        </form>
        </section>
    </>
  )
}
