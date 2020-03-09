import React from 'react';
import Link from '../Link';
import parse from 'html-react-parser';
import { Paper } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles((theme) => ({
  root: {
    borderLeft: '5px solid #2196F3',
    display: 'flex',
    marginBottom: '3rem',
    '& > a': {
      maxWidth: '40%',
      flexBasis: '40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& > div': {
      maxWidth: '60%',
      flexBasis: '60%'
    },
    [theme.breakpoints.down('xs')]: {
      flexFlow: 'wrap',
      '& > a': {
        maxWidth: '100%',
        flexBasis: '100%',
      },
      '& > div': {
        maxWidth: '100%',
        flexBasis: '100%'
      }
    }
  },
  img: {
    objectPosition: 'center',
    objectFit: 'contain',
    width: '280px',
    height: '100%',
    paddingLeft: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  panel: {
    padding: '1rem',
    '& p': {
      marginTop: '0.5rem',
      lineHeight: 1.75,
      [theme.breakpoints.down('xs')]: {
        maxHeight: 100,
        display: 'block',
        overflow: 'scroll',
      },
    },
    '& h1': {
      color: 'black',
    },
    '& span': {
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: '13px',
    }
  }
}))

export default ({ img, name, url, describe }) => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <Link href={url} prefetch>
        <img src={img} alt="img-project" className={classes.img} />
      </Link>
      <div className={classes.panel}>
        <Link href={url} prefetch>
          <h1 className="is-hover">{name}</h1>
        </Link>
        <Link href={url} prefetch>
          <span className="is-hover">{url}</span>
        </Link>
        <p>{parse(describe)}</p>
      </div>
    </Paper>
  )
}
