import { Link } from 'react-router'

export default function Header() {
  return (
    <header>
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
            <Link to='/login/signup'>
            <button>Sign up</button>
            </Link>
            <Link to='/login/signin'>
            <button>Sign in</button>
            </Link>
        </div>
    </header>
  )
}
