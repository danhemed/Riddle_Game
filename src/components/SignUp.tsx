export default function SignUp() {
  const createPlayer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputUsername = e.currentTarget.username.value;
    const inputPassword = e.currentTarget.password.value;
    const inputEmail = e.currentTarget.email.value;

    console.log(`input`, inputUsername);
    console.log(`input`, inputPassword);
    console.log(`input`, inputEmail);

    if (inputUsername.trim() === "" || inputPassword.trim() === "" || inputEmail.trim() === "") {
      return window.alert("You didn't enter anything!");
    }

    const newPlayer = { username: inputUsername, password: inputPassword, email: inputEmail }
    
    try {
      const res = await fetch(`http://localhost:3005/players`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPlayer),
        });
      if (res.ok) {
        window.alert("User created successfully!\nYou are moving to another page.")
        window.location.href = "/play";
      } else {
        window.alert("Failed to register player!");
      }
    } catch (err) {
      console.error("Error posting player:", err);
      window.alert("Server error!");
    }
  };


  return (
    <>
      <section className="page">
        <h1>Sign Up</h1>
        <form onSubmit={createPlayer}>
          <span style={{ color: 'red' }}>*  </span>
          <label htmlFor="username">Enter User Name:</label>
          <br />
          <input type="text" name="username" placeholder="example: israel israeli" required />
          <br />
          <br />
          <span style={{ color: 'red' }}>*  </span>
          <label htmlFor="password">Enter Password:</label>
          <br />
          <input type="text" name="password" placeholder="example: 1234" required />
          <br />
          <br />
          <label htmlFor="email">Enter Email:</label>
          <br />
          <input type="email" name="email" placeholder="example: israel@gmail.com" required/>
          <br />
          <br />
          <button type="submit">Register</button>
        </form>
      </section>
    </>
  )
}
