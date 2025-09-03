import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer'
import Leaderboard from './pages/Leaderboard'
import About from './pages/About'
import Login from './pages/Login'
import Play from './pages/Play'
import Admin from './pages/Admin'
import TermsAndConditions from './pages/TermsAndConditions'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/login" element={<Login />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path='/Terms_and_Conditions' element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
