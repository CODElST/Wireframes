import React from 'react';
import { withStyles } from '@material-ui/core';
import { Hidden, Typography } from '@material-ui/core';
import { Grid, Avatar, Box } from '@material-ui/core';
import ListTopAnime from '../Components/ListTopAnime'


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

})


const pass = () => {}


class ProfileBucketList extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    (document.getElementById('five') === null)? pass() : (document.getElementById('five').style.backgroundColor = '#272727')
  }

  componentWillUnmount() {
    (document.getElementById('five') === null)? pass() : (document.getElementById('five').style.backgroundColor = '')
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
              <Typography id={'Anime Bucket List'} className={classes.heading}  variant='h4'>
                My Anime List
              </Typography>
              <ListTopAnime />
              <Typography id={'Manga Bucket List'} style={{margin:'-30px 0px 10px 0', paddingTop: 70}} variant='h4'>
                My Manga List
              </Typography>
              <ListTopAnime />
              <Typography id={'Manhwa Bucket List'} style={{margin:'-30px 0px 10px 0', paddingTop: 70}} variant='h4'>
                My Manhwa List
              </Typography>
              <ListTopAnime />
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

export default withStyles(useStyles)(ProfileBucketList);
