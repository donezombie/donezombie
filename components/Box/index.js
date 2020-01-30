import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
  rootBox: {
    marginBottom: '32px'
  },
  title: {
    display: 'block',
    borderBottom: '4px solid #2196F3',
    fontSize: 'large',
    textTransform: 'uppercase',
  }
}));

const Box = (props) => {
  const classes = useStyles();
  const { children, title } = props;

  return (
    <Grid container spacing={3} className={classes.rootBox}>
      <Grid item xs={12} md={3}>
        <h3 className={classes.title}>{title}</h3>
      </Grid>
      <Grid item xs={12} md={9}>
        {children}
      </Grid>
    </Grid>
  )
}

Box.defaultProps = {
  title: 'Default Title',
}

export default Box;
