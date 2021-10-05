import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@material-ui/core";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
    paddingTop: "120%", // 16:9
    [theme.breakpoints.down("sm")]: {
      paddingTop: "150%",
    },
  },
  card: {
    margin: "0 10px 0 0",
    height: "100%",
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

export default function ListCarousel(props) {
  const classes = useStyles();
  return (
    // <Grid className={classes.grid} container spacing={1} justifyContent='center'>
    // <Grid item xs={10} sm={10}>
    <Carousel
      className={classes.carousel}
      responsive={responsive}
      infinite={true}
      showDots={true}
      ssr
    >
      {props.data.map(
        (item) => (
          console.log(item[1]),
          (
            <>
              <Link to={`/anime-about/${item[1].slug}`}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    title={item[1].name_en}
                    image={item[1].poster_image}
                  />
                  <CardContent style={{ padding: "5px 5px 0 5px" }}>
                    <Typography gutterBottom variant="body2">
                      {item[1].name_en}
                    </Typography>
                    <Typography
                      display={"inline"}
                      noWrap={true}
                      variant="body2"
                      color="textSecondary"
                    ></Typography>
                  </CardContent>
                </Card>
              </Link>
            </>
          )
        )
      )}
    </Carousel>
    // </Grid>
    // </Grid>
  );
}
