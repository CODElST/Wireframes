import React from 'react';
import { Card, CardContent, Button, withStyles } from '@material-ui/core';
import { Hidden, Typography } from '@material-ui/core';
import { Grid, Avatar, Box } from '@material-ui/core';
import ListCarousel from '../Components/ListCarousel';


const useStyles = (theme) => ({

  picture:{
    width: '100%',
    height: 'auto',
    backgroundColor: '#272727',
  },
  
  bg:{
    maxHeight: 640,
    width: '100%'
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

})


const pass = () => {}


class ProfilePublic extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    (document.getElementById('six') === null)? pass() : (document.getElementById('six').style.backgroundColor = '#272727')
  }

  componentWillUnmount() {
    (document.getElementById('six') === null)? pass() : (document.getElementById('six').style.backgroundColor = '')
  }
  
  render(){
    const { classes } = this.props;
    return(
    <>
      <Grid style={{marginTop: 60,}} container spacing={0} justifyContent='center'> 
        <Grid item xs={0} md={3} />
        <Grid style={{}} item xs={12} md={8}>
        <Hidden smDown>
          <div className={classes.picture} >
            <img className={classes.bg} src="https://wallpaperaccess.com/download/your-name-anime-201322" alt="" />
            <Avatar className={classes.pfp} src="https://i.redd.it/pz2riusi3cc51.jpg" />
            <Box className={classes.box}>
              <Typography variant="subtitle1" style={{color: 'white'}}>Name: Lorem Ipsum</Typography>
              <Typography variant="subtitle1" style={{color: 'white'}}>Status: Lorem Ipsum Dolor Sit Amet</Typography>
            </Box>
          </div>
        </Hidden>
          <div className={classes.content}>
            <Typography id={'Mana'} className={classes.heading} variant='h4'>
              Mana
            </Typography>
            <Typography  variant='h6'>
              ####
            </Typography>
            <Typography  variant='subtitle1'>
              Click to see your recent transactions
            </Typography>
            <Typography  variant='subtitle1'>
              Know how to earn more Kata
            </Typography>
          </div>
          <div className={classes.content}>
            <Typography id={'Personal Info'} style={{margin:'-30px 0px 10px 0', paddingTop: 70}} variant='h4'>
              Personal Info
            </Typography>
            {[...Array(20)].map(() => (
              <Typography  variant='subtitle1'>
                Lorem: Lorem Ipsum
              </Typography>
            ))} 
          </div>
          <div className={classes.content}>
            <Typography id={'Awards'} style={{margin:'-30px 0px 10px 0', paddingTop: 70}} variant='h4'>
              Awards
            </Typography>
            <ListCarousel />
            <Typography id={'Badges'} style={{margin:'-30px 0px 10px 0', paddingTop: 70}} variant='h4'>
              Badges
            </Typography>
            <ListCarousel />
          </div>
          <div className={classes.content}>
            <Typography id={'Taste'} style={{margin:'-30px 0px 10px 0', paddingTop: 70}} variant='h4'>
              Taste
            </Typography>
            
            {[...Array(5)].map(() => (
              <Card style={{marginBottom: 10, backgroundColor: '#999999', marginRight: 7}}>
                <CardContent >
                  <Typography gutterBottom variant="h6">
                    Lorem Ipsum
                  </Typography>
                  <Typography variant="body1" color="textSecondary" >
                    Ongoing
                  </Typography>
                </CardContent>
              </Card>
            ))}

            <Button className={classes.button} variant='contained'>
              Add More
            </Button>
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

export default withStyles(useStyles)(ProfilePublic);
