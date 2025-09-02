import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <div id="footer">
      <Link to='/Terms_and_Conditions'>Terms and Conditions</Link>
      <p>Created by 'Dan Hemed'</p>
      <button>admin login</button>
    </div>
  )
}
