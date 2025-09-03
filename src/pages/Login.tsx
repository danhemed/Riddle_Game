import { Link, Outlet } from 'react-router'

export default function Login() {
  return (
    <div>
      <section>
        <nav>
          <Link to='signup'>sign up</Link>
          <Link to='signin'>sign in</Link>
        </nav>
        <Outlet />
      </section>
    </div>
  )
}
