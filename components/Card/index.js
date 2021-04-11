import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
});

const CardCommon = ({ title, desc, image, href }) => {
  const classes = useStyles();

  return (
    <Paper className="card-container">
      <Grid container>
        <Grid xs={4} md={4} className="card__img">
          <img alt="img-company" src={image} />
        </Grid>
        <Grid xs={8} md={8} className="card__content">
          <span className="card__content-title">{title}</span>
          <span dangerouslySetInnerHTML={{ __html: desc }}></span>
        </Grid>
        <div className="card__router-push">
          <Button color="primary">
            <Link href={href} passHref>
              <a target="__blank">Visit</a>
            </Link>
          </Button>
        </div>
      </Grid>
    </Paper>
    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       alt="Contemplative Reptile"
    //       height="180"
    //       image={image}
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {title}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         {desc}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       <Link href={href} passHref>
    //         <a target="__blank">Visit</a>
    //       </Link>
    //     </Button>
    //   </CardActions>
    // </Card>
  );
};

export default CardCommon;
