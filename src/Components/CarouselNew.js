import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#454545",
    // height: "75vh",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },

  carousel: {
    marginTop: 64,
    [theme.breakpoints.down("xs")]: {
      marginTop: 56,
    },
  },
  image: {
    maxHeight: "75vh",
    [theme.breakpoints.down("xs")]: {
      minHeight: 200,
      width: "auto",
    },
  },
}));

const data = [
  {
    src: "https://media.kitsu.io/anime/cover_images/30/original.jpg?1597702679=",
    Anime: "Anime 1",
    link: "aa-megami-sama-tv",
  },
  {
    src: "https://media.kitsu.io/anime/cover_images/31/original.jpg?1597701484=",
    Anime: "Anime 2",
    link: "aa-megami-sama-tv",
  },
  {
    src: "https://media.kitsu.io/anime/cover_images/48/original.jpg?1597703215=",
    Anime: "Anime 3",
    link: "aa-megami-sama-tv",
  },
];

export default function CarouselMain() {
  const classes = useStyles();
  return (
    <Carousel
      className={classes.carousel}
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
      centerMode={true}
      centerSlidePercentage={60}
      showStatus={false}
    >
      {data.map((item, id) => {
        return (
          <Link to={`/anime-about/${item.link}`}>
            <div key={id} className={classes.root}>
              <img className={classes.image} alt="" src={item.src} />
              <p className="legend">{item.Anime}</p>
            </div>
          </Link>
        );
      })}
    </Carousel>

    // {/* <div className={classes.root}>
    //   <img
    //     className={classes.image}
    //     alt=""
    //     src="https://media.kitsu.io/anime/cover_images/30/original.jpg?1597702679="
    //   />
    //   <p className="Anime">Anime 1</p>
    // </div>
    // <div className={classes.root}>
    //   <img
    //     className={classes.image}
    //     alt=""
    //     src="https://media.kitsu.io/anime/cover_images/31/original.jpg?1597701484="
    //   />
    //   <p className="Anime">Anime 2</p>
    // </div>
    // <div className={classes.root}>
    //   <img
    //     className={classes.image}
    //     alt=""
    //     src="https://media.kitsu.io/anime/cover_images/48/original.jpg?1597703215="
    //   />
    //   <p className="Anime">Anime 3</p>
    // </div> */}
  );
}
