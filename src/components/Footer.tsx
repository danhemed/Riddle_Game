import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer>
      <Link to='/Terms_and_Conditions'>Terms and Conditions</Link>
      <p>Created by 'Dan Hemed'</p>
      <Link to='/admin'>admin system</Link>
    </footer>
  )
}
