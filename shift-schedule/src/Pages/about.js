import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

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
  cards: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'right',
  },

  scotty: {
    maxWidth: 'auto',
    maxHeight: 100,
    flex: 1,
  },
  joey: {
    maxWidth: 'auto',
    maxHeight: 100,
    flex: 1,
  },
  hayden: {
    flex: 1,
    maxWidth: 'auto',
    maxHeight: 100,
  },
  erika: {
    flex: 1,
    maxWidth: 'auto',
    maxHeight: 100,
  },
  jennifer: {
    flex: 1,
    maxWidth: 'auto',
    maxHeight: 100,
  },
}))

export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.title}>
      <div className={classes.heading}>
        <h3 style={{ fontSize: '150%' }}>About</h3>
        <p>
          OnCall was created in Spring 2022 to help Firehouses manage schedules easily and efficiently. OnCall allows
          firefighters to login into OnCall with a Google account and select the shifts they want to work for the week.
          It also displays a calendar overview for individual firefighters to see their schedule for the week. By making
          scheduling efficient it allows firefighters to spend more times with their families and makes it easier for
          Firehouses to check and manage those on call.
        </p>
        <h3 style={{ fontSize: '150%' }}>Team</h3>
        <div className={classes.cards}>
          <div className={classes.Scotty}>
            <Card>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Scott
                </Typography>
                <Typography>
                  Scott is pursuing a Bachelor of Arts in Psychology and a double minor in Statistics & Data Science and
                  computer science. Scott enjoys playing the guitar and playing chess. He loves reading about history
                  and painting.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <br />
          <div className={classes.joey}>
            <Card>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Joseph
                </Typography>
                <Typography>
                  Joseph is pursuing a Bachelor of Arts in Film Production and a minor in Computer Science. In his free
                  time he jumps out of planes and builds homemade drones to be used in commercial film projects.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <br />
          <div className={classes.hayden}>
            <Card>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Hayden
                </Typography>
                <Typography>
                  Hayden is pursuing a Bachelor of Science in Electrical Engineering. Hayden enjoys cooking and hanging
                  with his friends.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <br />
          <div className={classes.erika}>
            <Card>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Erika
                </Typography>
                <Typography>
                  Erika is pursuing a Bachelor of Science in Computer Science. In her free time she enjoys hanging out
                  with friends, dancing and trying new foods.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <br />
          <div className={classes.jennifer}>
            <Card>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Jennifer
                </Typography>
                <Typography>
                  Jennifer is pursuing a Bachelor of Science in Computer Science and a minor in Environmental Studies at
                  Loyola Marymount University. In her free time, she enjoys spending time with her family, hanging out
                  with her friends, and doing puzzles.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
