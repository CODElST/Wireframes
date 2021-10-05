import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    color: 'black',
    border: '1px solid black',
    width: 150,
  },
}))


export default function MenuPopularAnime() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("All");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, title) => {
    setValue(title);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className={classes.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {value}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={(event) => handleMenuItemClick(event, "All")}>All</MenuItem>
        <MenuItem onClick={(event) => handleMenuItemClick(event, "Top Airing")}>Top Airing</MenuItem>
        <MenuItem onClick={(event) => handleMenuItemClick(event, "Most Favourite")}>Most Favourite</MenuItem>
        <MenuItem onClick={(event) => handleMenuItemClick(event, "Lorem Ipsum")}>Lorem Ipsum</MenuItem>
        <MenuItem onClick={(event) => handleMenuItemClick(event, "Lorem Ipsum")}>Lorem Ipsum</MenuItem>
        <MenuItem onClick={(event) => handleMenuItemClick(event, "Lorem Ipsum")}>Lorem Ipsum</MenuItem>
      </Menu>
    </div>
  );
}
