import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.marginBetweenText,
    "& ul": {
      margin: 0,
      marginTop: 8,
    },
  },
  name: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000",
  },
  position: {
    fontStyle: "italic",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const EachBox = (props) => {
  const classes = useStyles();
  const { children, name, position, date } = props;

  return (
    <div className={classes.root}>
      <div className={classes.name}>
        <h3>{name}</h3>
      </div>
      <div className={classes.position}>
        <span>{position}</span>
        <span>{date}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default EachBox;
