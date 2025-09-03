import { Link } from 'react-router'

export default function Home() {
  return (
    <div id='home' className='pages'>
        <section className='page'>
        <h2>welcom to</h2>
        <h1>RIDDLE GAME</h1>
        <p>Answer the riddles and be smart</p>
        <div id="home-buttons">
          <Link to='/play'>
            <button>play</button>
          </Link>
          <Link to='/leaderboard'>
            <button>leaderboard</button>
          </Link>
            <button>sign in/ sign up</button>
        </div>
        </section>
    </div>
  )
}
