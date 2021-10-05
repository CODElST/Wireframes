import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@material-ui/core";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    // padding: '0 12px'
  },
  carousel: {
    margin: "10px 0px",
    padding: "0 0 30px 0",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    [theme.breakpoints.down("sm")]: {
      paddingTop: "90%",
    },
  },
  card: {
    margin: "0 10px 0 0",
    height: "100%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
}));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

export default function NewListCarousel(props) {
  const classes = useStyles();
  return (
    <>
      <Carousel
        className={classes.carousel}
        responsive={responsive}
        infinite={true}
        showDots={true}
        ssr
      >
        {props.data.map((item) => {
          return (
            <>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={item.poster_image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {item.name_en}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.is_completed ? "Completed" : "OnGoing"}
                  </Typography>
                </CardContent>
              </Card>
            </>
          );
        })}
      </Carousel>
    </>
  );
}
