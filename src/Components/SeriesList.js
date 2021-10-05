import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@material-ui/core";
import {Card, CardContent, CardMedia} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  grid:{
    // padding: '0 12px'
  },
  carousel:{
    margin: '10px 0px',
    padding: '0 0 30px 0',
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    [theme.breakpoints.down('sm')]:{
      paddingTop: '90%',
    }
  },
  card:{
    margin: '0 10px 0 0',
  }
}));


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function SeriesList(){
  const classes = useStyles();
  return(
    // <Grid className={classes.grid} container spacing={1} justifyContent='center'> 
      // <Grid item xs={10} sm={10}>
        <Carousel className={classes.carousel}
          responsive={responsive} 
          showDots={false}
          ssr
          centerMode
        >
        
         <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              title="Hello World"
              image= "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent >
              <Typography gutterBottom variant="h5">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" >
                Ongoing
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              title="Hello World"
              image= "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent >
              <Typography gutterBottom variant="h5">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" >
                Ongoing
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              title="Hello World"
              image= "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent >
              <Typography gutterBottom variant="h5">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" >
                Ongoing
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              title="Hello World"
              image= "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent >
              <Typography gutterBottom variant="h5">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" >
                Ongoing
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              title="Hello World"
              image= "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent >
              <Typography gutterBottom variant="h5">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" >
                Ongoing
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              title="Hello World"
              image= "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent >
              <Typography gutterBottom variant="h5">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" >
                Ongoing
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              title="Hello World"
              image= "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent >
              <Typography gutterBottom variant="h5">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" >
                Ongoing
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              title="Hello World"
              image= "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent >
              <Typography gutterBottom variant="h5">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" >
                Ongoing
              </Typography>
            </CardContent>
          </Card>
          
        
        </Carousel>
      // </Grid>
    // </Grid> 
  )
};