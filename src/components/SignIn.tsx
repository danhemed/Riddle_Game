
export default function SignIn() {
  return (
    <>
        <section className="page">
        <h1>Sign In</h1>
        <form action="">
            <label htmlFor="username">Enter your UserName:</label>
            <br />
            <input type="text" id="username" name="username"/>
            <br />
            <br />
            <button type="submit">Come In</button>
        </form>
        </section>
    </>
  )
}
