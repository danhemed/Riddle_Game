import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <div id="header">
        <img src="/public/logo.svg" alt="logo riddle game" />
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/play'>Play</Link>
            <Link to='/leaderboard'>Leaderboard</Link>
            <Link to='/about'>About</Link>
        </nav>
        <div>
            <button>Sign up</button>
            <button>Sign in</button>
        </div>
    </div>
  )
}
