import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > h3': {
      margin: 0,
      color: 'black',
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: '28px',
      wordWrap: 'break-word',
    },
    '& > span': {
      display: 'inline-block',
      textDecoration: 'none',
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: 13,
      marginBottom: theme.marginBetweenText,
    },
    '& p': {
      color: theme.palette.secondary.main,
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '20px',
      wordWrap: 'break-word',
    },
    '& .objective': {
      marginTop: theme.marginBetweenText,
      fontSize: 14,
      lineHeight: '1.5',
    },
    '& ul': {
      padding: 0,
      listStyle: 'none',
      marginTop: theme.marginBetweenText,
    },
    '& > ul > li': {
      paddingBottom: theme.marginBetweenText,
      display: 'flex',
      alignItems: 'center',
    },
    '& > ul > li > a': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
      marginLeft: 8,
      '&:hover': {
        color: theme.palette.primary.hover,
      },
    },
    '& ul svg': {
      maxWidth: 20,
      color: '#000',
      fontSize: 18,
    }
  }
}))

export default ({ name, subName, describle, socialNetwork}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>{name}</h3>
      <span>{subName}</span>
      <div dangerouslySetInnerHTML={{ __html: describle }} />
      <ul>
        {
          socialNetwork.map(el => (
            <li key={el.name}>
              {/* <img src={`/static/assets/icon/${el.name}.svg`} alt="logo" /> */}
              <el.icon />
              <a target="_blank" href={el.path}>{el.label}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}