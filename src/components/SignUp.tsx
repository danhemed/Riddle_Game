
export default function SignUp() {
  return (
    <>
        <section className="page">
        <h1>Sign Un</h1>
        <form action="">
            <label htmlFor="username">Enter User Name:</label>
            <br />
            <input type="text" id="username" name="username"/>
            <br />
            <br />
            <label htmlFor="email">Enter Email:</label>
            <br />
            <input type="email" id="email" name="email"/>
            <br />
            <br />
            <button type="submit">Register</button>
        </form>
        </section>
    </>
  )
}
