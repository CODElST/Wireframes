import React from 'react';
import { withStyles } from '@material-ui/core';
import { Hidden, Typography } from '@material-ui/core';
import { Grid, Avatar, Box } from '@material-ui/core';
import SeriesList from '../Components/SeriesList';
import {Card, CardContent, CardMedia} from '@material-ui/core'

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

  button:{
    display: 'flex',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    textTransform: 'capitalize',
    padding: '3px 5px',
  },

  heading:{
    margin:'-50px 0px 10px 0', 
    paddingTop: 70,
    [theme.breakpoints.down('md')]:{
      margin:'-50px 0px 10px 0',
      paddingTop: 10,
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    [theme.breakpoints.down('sm')]:{
      paddingTop: '90%',
    }
  },
  card:{
    width: '100%',
    margin: '0 10px 10px 0',
  },

  list:{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '1rem',
    width: '100%',
    height: 'auto',
  },


})


const pass = () => {}
class ProfileMedal extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    (document.getElementById('two') === null)? pass() : (document.getElementById('two').style.backgroundColor = '#272727')
  }

  componentWillUnmount() {
    (document.getElementById('two') === null)? pass() : (document.getElementById('two').style.backgroundColor = '')
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
            <Typography id={'Rank'} className={classes.heading} variant='h4'>
              Rank
            </Typography>
            <SeriesList />
            <Typography id={'All Awards'} style={{margin:'-30px 0px 10px 0', paddingTop: 70}} variant='h4'>
              All Awards
            </Typography>
            <div className={classes.list}>
              {[...Array(15)].map(() => (
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
                  </CardContent>
                </Card>
              ))} 
              </div>
                <Typography id={'All Badges'} style={{margin:'-30px 0px 10px 0', paddingTop: 70}} variant='h4'>
                  All Badges
                </Typography>
                <div className={classes.list}>
                  {[...Array(15)].map(() => (
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
                      </CardContent>
                     </Card>
                  ))} 
              </div>
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


export default withStyles(useStyles)(ProfileMedal);