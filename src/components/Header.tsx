import { Link } from 'react-router'

export default function Header() {
  return (
    <div id="header">
        <Link to='/'>
        <img src="/logo.svg" alt="logo riddle game" />
        </Link>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/play'>Play</Link>
            <Link to='/leaderboard'>Leaderboard</Link>
            <Link to='/about'>About</Link>
        </nav>
        <div id='header-sign'>
            <button>Sign up</button>
            <button>Sign in</button>
        </div>
    </div>
  )
}
