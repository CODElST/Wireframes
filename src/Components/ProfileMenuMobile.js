import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import {  Grid, Button, Avatar, Box, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';



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

  menu:{
    width: '100%',
    overflowX: 'scroll',
    backgroundColor: '#555555',
    marginBottom: -10,
    position: 'sticky',
    top: 56,
    zIndex: 2
  },

  Button:{
    color: 'white',
  },

})

class ProfileMenuMobile extends React.Component{
  scroll(id, e){
    const section = document.getElementById( id );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  render(){
  const { classes } = this.props;
  return(
    <>
      <Grid style={{marginTop: 60,}} container spacing={0} justifyContent='center'> 
        
        <Grid style={{}} item xs={12}>
          <div className={classes.picture} >
            <img className={classes.bg} src="https://wallpaperaccess.com/download/your-name-anime-201322" alt="" />
            <Avatar className={classes.pfp} src="https://i.redd.it/pz2riusi3cc51.jpg" />
            <Box className={classes.box}>
              <Typography variant="subtitle1" style={{color: 'white'}}>Name: Lorem Ipsum</Typography>
              <Typography variant="subtitle1" style={{color: 'white'}}>Status: Lorem Ipsum Dolor Sit Amet</Typography>
            </Box>
          </div>
        </Grid>
      </Grid>

      <Grid direction= 'row' className={classes.menu} style={{display: 'flex', flexDirection: 'row'}} item xs={12}>
      
              
        <NavLink  style={{textDecoration: 'none', color: 'white',}} activeStyle={{backgroundColor: '#272727'}} to='/' exact>
          <Button id={'one'} className={classes.Button}>
            Info
          </Button>
        </NavLink>

        <NavLink id={'two'} style={{textDecoration: 'none', color: 'white'}} to='/medal' >
          <Button className={classes.Button}>
            Medals
          </Button>
        </NavLink>
                
        <NavLink id={'three'} style={{textDecoration: 'none', color: 'white'}} to='/content'>
          <Button className={classes.Button}>
            Content
          </Button>
        </NavLink>

        <NavLink id={'four'} style={{textDecoration: 'none', color: 'white'}} to='/mylist'>
          <Button style={{whiteSpace:'nowrap'}} className={classes.Button}>
            My List
          </Button>
        </NavLink>

        <NavLink id={'five'} style={{textDecoration: 'none', color: 'white'}} to='/bucketlist'>
          <Button style={{whiteSpace:'nowrap'}} className={classes.Button}>
            Bucket List
          </Button>
        </NavLink>

        <NavLink id={'six'} style={{textDecoration: 'none', color: 'white'}} to='/public'>
          <Button className={classes.Button}>
            Public
          </Button>
        </NavLink>
      
      </Grid>
    </>
  )
  }
};

export default withStyles(useStyles)(ProfileMenuMobile)