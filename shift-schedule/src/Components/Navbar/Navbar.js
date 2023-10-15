import React from 'react'
import './Navbar.css'
import logo from '../../newoncall.png'
import button1 from '../../schedule button.png'
import button2 from '../../about button.png'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  // NavBtnLink,
} from './NavbarElements'
import { useState, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth } from './firebaseConfig'
import '../react-big-calendar.css';


const Navbar = () => {
  const user = useAuthentication()
  return (
    <div>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            <div class="button2-image">
              <img src={button2} class="About-logo" alt="button2logo" />
            </div>
          </NavLink>
          <NavLink to="/schedule" activeStyle>
            <div class="button1-image">
              <img src={button1} class="Schedule-logo" alt="button1logo" />
            </div>
          </NavLink>
          <NavLink to="/welcome" activeStyle>
            <a class="navbar-brand" href="/">
              {/* insert real logo here */}
              <div class="logo-image">
                <img src={logo} class="App-logo" alt="logo" />
              </div>
            </a>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <header>{!user ? <SignIn /> : <SignOut />}</header>
        </NavBtn>
      </Nav>
    </div>
  )
}
export function SignIn() {
  return (
    <NavBtn>
      <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</button>
      {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
    </NavBtn>
  )
}

export function SignOut() {
  return (
    <div>
      <img src={auth.currentUser.photoURL} style={{ height: 50 }} alt="profile" />
      <div className='rbc-toolbar'>
				<span className="rbc-btn-group">
      <button onClick={() => signOut(auth)}>Sign Out</button>
      </span></div>
    </div>
  )
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}

export default Navbar
