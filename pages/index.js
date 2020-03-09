import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import hooks from '../hooks';
import LeftComponent from '../components/LeftComponent';
import RightComponent from '../components/RightComponent';

import { socialNetwork, name, subName, describle } from '../src/data';

const { useScrollProgressbar } = hooks;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  transparentPaper: {
    backgroundColor: 'transparent',
  }
}));

const Home = (props) => {
  const classes = useStyles();
  useScrollProgressbar();
  return (
    <div className="container animated fadeIn" style={{ marginTop: 25 }}>
      <Grid container className="spacing-container-grid">
        <Grid item xs={12} sm={12} md={3}>
          <Paper classes={{ root: classes.transparentPaper }} elevation={0} square className={classes.paper}>
            <LeftComponent
              name={name}
              subName={subName}
              describle={describle}
              socialNetwork={socialNetwork}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <Paper square className={classes.paper}>
            <RightComponent />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;
