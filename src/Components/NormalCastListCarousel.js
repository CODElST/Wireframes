import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@material-ui/core";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import characterDetail from "../Data/characterDetail.json";

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

export default function CastListCarousel(props) {
  const [open, setOpen] = React.useState(false);
  // const [details, setDetails] = React.useState([]);

  const handleOpen = (Detail, event) => {
    // console.log(Detail);
    // setDetails(Detail);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  let desc = characterDetail.about.replace(/<br>/g, "\n");
  desc = desc.replace(/<span class="spoiler">/g, "");
  desc = desc.replaceAll("</span>", "");

  return (
    // <Grid className={classes.grid} container spacing={1} justifyContent='center'>
    // <Grid item xs={10} sm={10}>
    <>
      <Carousel
        className={classes.carousel}
        responsive={responsive}
        infinite={true}
        showDots={true}
        ssr
      >
        {props.data.map((item) => {
          {
            /* let Detail = [item.name, item.Summary]; */
          }
          return (
            <>
              <Card
                className={classes.card}
                // onClick={(event) => handleOpen(Detail, event)}
                onClick={(event) => handleOpen(event)}
              >
                <CardMedia
                  className={classes.media}
                  // details={item.details}
                  image="https://media.kitsu.io/characters/images/411/original.jpg?1483096805"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </>
          );
        })}
      </Carousel>

      <Modal
        aria-labelledby="transition-modal-details"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Card style={{ height: "75vh", overflowY: "scroll" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {characterDetail.name}
                </Typography>

                <Typography gutterBottom variant="body1">
                  Other Names : {characterDetail.other_names}
                </Typography>

                <Typography
                  style={{ whiteSpace: "pre-wrap" }}
                  gutterBottom
                  variant="body1"
                >
                  {desc}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Fade>
      </Modal>
    </>
    // </Grid>
    // </Grid>
  );
}
