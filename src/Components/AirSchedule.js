import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root:{
    width: '100%',
  },
  griditem:{
    backgroundColor: '#757575',
    width: '14.28%',
    border: '1px solid white',
    
  },
  thumbnail: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 'auto',
    width: '100%',
    
    [theme.breakpoints.down('xs')]:{
      height: '50px',
    }
  },
  caption:{
    color: 'white',
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]:{
      fontSize: '0.7rem',
    }
    
  }
  
}))

export default function MenuPopularAnime() {
  const classes = useStyles();
  return(
    <Grid className={classes.root}
      container
      spacing={1}
      direction="row"
      justifyContent='space-around'
      alignItems='stretch'
      // alignContent="space-around"
      // wrap="nowrap" 
    >
      <Grid className={classes.griditem} item direction='column'>
        <Avatar style={{left: '50%', transform: 'translateX(-50%)'}}>
          Mon
        </Avatar>
        
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>

      </Grid>


      <Grid className={classes.griditem} item >
        <Avatar style={{left: '50%', transform: 'translateX(-50%)'}}>
          Tue
        </Avatar>

        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>

      </Grid>


      <Grid className={classes.griditem} item >
        <Avatar style={{left: '50%', transform: 'translateX(-50%)'}}>
          Wed
        </Avatar>

        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>

      </Grid>


      <Grid className={classes.griditem} item >
        <Avatar style={{left: '50%', transform: 'translateX(-50%)'}}>
          Thu
        </Avatar>

        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>

      </Grid>


      <Grid className={classes.griditem} item >
        <Avatar style={{left: '50%', transform: 'translateX(-50%)'}}>
          Fri
        </Avatar>

        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>

      </Grid>


      <Grid className={classes.griditem} item >
        <Avatar style={{left: '50%', transform: 'translateX(-50%)'}}>
          Sat
        </Avatar>

        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>

      </Grid>


      <Grid className={classes.griditem} item >
        <Avatar style={{left: '50%', transform: 'translateX(-50%)'}}>
          Sun
        </Avatar>

        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
        <div className={classes.thumbnail}>
          <img className={classes.image} src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
          <Typography className={classes.caption} variant="caption" color="initial">
            Ep #
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}