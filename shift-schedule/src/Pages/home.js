import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { auth } from '../Components/Navbar/firebaseConfig'
const useStyles = makeStyles(theme => ({
  title: {
    background: 'linear-gradient(360deg, #d75142 30%, #FFA91D  90%)',
    width: 'auto',
    length: 'auto',
    fontWeight: 600,
    fontSize: 25,
  },

  heading: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 60,
    marginLeft: 60,
  },
}))
export default function Home() {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.title}>
        <div className={classes.heading}>
          <h1>🔥 Welcome to OnCall, {auth.currentUser.displayName}! 🔥</h1>
          <h3 style={{ fontSize: '150%' }}>How to Use OnCall</h3>
          <p>
            1. Login with your Google email and password
            <br />
            2. Click "Schedule"
            <br />
            3. Select the timeslot you want to work
            <br />
            4. Click "Submit"
          </p>
          <h3 style={{ fontSize: '150%' }}>Contact Us</h3>
          <p>Do you have any questions or ideas for how we can make OnCall better?</p>
          <p>Contact us at team@oncall.com</p>
        </div>
      </div>
    </div>
  )
}
