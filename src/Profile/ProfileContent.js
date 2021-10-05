import React from 'react';
import { CardActionArea, withStyles } from '@material-ui/core';
import { Hidden, Typography, Button } from '@material-ui/core';
import { Grid, Avatar, Box } from '@material-ui/core';
import {Card, CardContent, IconButton} from '@material-ui/core'
import Carousel from 'react-multi-carousel';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SimpleList from '../Components/List';

const useStyles = (theme) => ({

  picture:{
    width: '100%',
    height: '100px',
    backgroundColor: '#272727',
    marginTop: 75,
  },
  

  pfp:{
    position: 'relative',
    top: theme.spacing(-7.5),
    left: theme.spacing(5),
    width: theme.spacing(15),
    height: theme.spacing(15),
    [theme.breakpoints.down('md')]:{
      width: theme.spacing(9),
      height: theme.spacing(9),
      top: theme.spacing(-4.5),
      left: theme.spacing(1),
    },
  },

  box:{
    position: 'relative',
    top: theme.spacing(-12),
    left: '35%',
    [theme.breakpoints.down('md')]:{
      width: '65%',
      top: theme.spacing(-8),
      left: '30%',
    },
  },

  content:{
    position: 'relative',
    left: theme.spacing(5),
    [theme.breakpoints.down('md')]:{
      left: theme.spacing(1),
      marginRight: theme.spacing(1),
      
    },
  },

  heading:{
    margin:'-50px 0px 10px 0', 
    paddingTop: 70,
    [theme.breakpoints.down('md')]:{
      margin:'-50px 0px 10px 0',
      paddingTop: 10,
    },
  },

  card:{
    backgroundColor: '#888888',
    height: '50vh',
    margin: '0 10px 0 0',
    [theme.breakpoints.down('sm')]:{
      overflowY: 'scroll',
    }
    
  },

  action:{
    position: 'absolute',
    top: 'auto',
    bottom: 0,
    textAlign: 'end',
    left: -10
  },

  button:{
    display: 'flex',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    textTransform: 'capitalize',
    padding: '3px 5px',
  },

})


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 300
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 200
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 100
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 50
  }
};


const pass = () => {}
class ProfileContent extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    (document.getElementById('three') === null)? pass() : (document.getElementById('three').style.backgroundColor = '#272727')
  }

  componentWillUnmount() {
    (document.getElementById('three') === null)? pass() : (document.getElementById('three').style.backgroundColor = '')
  }
  
  render(){
    const { classes } = this.props;
    return(
      <>
        <Grid style={{marginTop: 60,}} container spacing={0} justifyContent='center'> 
          <Grid item xs={0} sm={3} />
          <Grid style={{}} item xs={12} sm={8}>
            <Hidden smDown>
              <Typography variant="subtitle1" style={{color: 'black', position: 'absolute',top: 70, left: '50%', transform: 'translateX(-25%)'}}>
                Lorem Ipsum Dolor Sit Amet Consectutor Adipiscing Elit
              </Typography>
              <div className={classes.picture} >
                <Avatar className={classes.pfp} src="https://i.redd.it/pz2riusi3cc51.jpg" />
                <Box className={classes.box}>
                  <Typography variant="subtitle1" style={{color: 'white'}}>Name: Lorem Ipsum</Typography>
                  <Typography variant="subtitle1" style={{color: 'white'}}>Status: Lorem Ipsum Dolor Sit Amet</Typography>
                </Box>
              </div>
            </Hidden>
            <div className={classes.content}>
            <Typography id={'Personal Notes'} className={classes.heading}  variant='h4'>
              Personal Notes
            </Typography>
            <Carousel className={classes.carousel}
              responsive={responsive} 
              showDots={true}
              partialVisible={true}
            >
                <Card className={classes.card}>
                  <CardContent >
                    <Typography gutterBottom variant="h5">
                      Lorem Ipsum Dolor Sit
                    </Typography>
                    <Typography variant="body1" color="textSecondary" >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                      officia deserunt mollit anim id est laborum.
                    </Typography>
                  </CardContent>
                  <CardActionArea className={classes.action}>
                    <IconButton aria-label="" >
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="" >
                      <MoreVertIcon />
                    </IconButton>
                  </CardActionArea>
                  
                </Card>
                <Card className={classes.card}>
                  <CardContent >
                    <Typography gutterBottom variant="h5">
                      Lorem Ipsum Dolor Sit
                    </Typography>
                    <Typography variant="body1" color="textSecondary" >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                      officia deserunt mollit anim id est laborum.
                    </Typography>
                  </CardContent>
                  <CardActionArea className={classes.action}>
                    <IconButton aria-label="" >
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="" >
                      <MoreVertIcon />
                    </IconButton>
                  </CardActionArea>
                  
                </Card>
                
        
              </Carousel>
              <Button className={classes.button} variant='contained'>
                Add More
              </Button>
              <Typography id={'Reviews and Notes'} style={{margin:'-30px 0px 10px 0', paddingTop: 70}} variant='h4'>
                Your Reviews and Notes
              </Typography>
              <SimpleList />
              <Typography id={'Your Chats'} style={{margin:'-30px 0px 10px 0', paddingTop: 70}} variant='h4'>
                Your Chats
              </Typography>
              <SimpleList />
            </div>
          </Grid>
          <Grid item sm={1} />
        </Grid>
        <div style={{marginTop: 50, height: 300, width: '100%', backgroundColor: 'black', color: 'white', position: 'absolute'}}>
          <p style={{position: 'relative', top: '50%', textAlign: 'center', transform: 'translateY(-50%)'}}>Footer</p>
        </div>
      </>
    )
  }
};


export default withStyles(useStyles)(ProfileContent);