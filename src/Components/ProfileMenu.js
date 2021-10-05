import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItem, Grid, Button } from "@material-ui/core";
import { Link, NavLink, matchPath } from "react-router-dom";

const useStyles = (theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    top: 5,
    direction: "column",
    backgroundColor: "#474747",
    overflowY: "scroll",
  },
  list: {
    marginTop: theme.spacing(10),
    color: "white",
    width: "60%",
    marginLeft: "auto",
    marginRight: "10",
  },
  ListItem: {
    padding: "2px 0",
    paddingLeft: theme.spacing(4),
  },
  Button: {
    width: "100%",
    borderRadius: 50,
    color: "white",
  },
});

const pass = () => {};

class ProfileMenu extends React.Component {
  scroll(id, e) {
    const section = document.getElementById(id);
    section === null
      ? pass()
      : section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  render() {
    let match = matchPath("/profile", {
      path: "/profile/",
      strict: true,
      sensitive: true,
    });
    const { classes } = this.props;
    return (
      <>
        <Grid container spacing={1}>
          <Grid className={classes.root} item sm={3}>
            <List className={classes.list}>
              <div>
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "white",
                    borderRadius: "50px",
                  }}
                  activeStyle={{
                    backgroundColor: "#272727",
                    padding: "10px 0 13px 0",
                  }}
                  to="/profile"
                  exact
                >
                  <Button
                    id={"one"}
                    style={{
                      justifyContent: "start",
                      textTransform: "capitalize",
                      fontSize: 17,
                      textIndent: 5,
                    }}
                    className={classes.Button}
                  >
                    Info
                  </Button>
                </NavLink>
                <div>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Mana", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Mana"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Personal Info", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Personal Info"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Awards", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Awards"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Badges", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Badges"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Taste", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Taste"
                    />
                  </ListItem>
                </div>
              </div>

              <div>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/profile/medal"
                  exact
                >
                  <ListItem id={"two"} style={{ borderRadius: 50 }} button>
                    <ListItemText primary="Medals" />
                  </ListItem>
                </NavLink>
                <div>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Rank", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Rank"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("All Awards", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="All Awards"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("All Badges", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="All Badges"
                    />
                  </ListItem>
                </div>
              </div>

              <div>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/profile/content"
                  exact
                >
                  <ListItem id={"three"} style={{ borderRadius: 50 }} button>
                    <ListItemText primary="Content" />
                  </ListItem>
                </NavLink>
                <div>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Personal Notes", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Personal Notes"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Reviews and Notes", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Reviews and Notes"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Your Chats", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Your Chats"
                    />
                  </ListItem>
                </div>
              </div>

              <div>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/profile/mylist"
                  exact
                >
                  <ListItem id={"four"} style={{ borderRadius: 50 }} button>
                    <ListItemText primary="My List" />
                  </ListItem>
                </NavLink>
                <div>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("My Anime List", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="My Anime List"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("My Manga List", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="My Manga List"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("My Manhwa List", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="My Manhwa List"
                    />
                  </ListItem>
                </div>
              </div>

              <div>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/profile/bucketlist"
                  exact
                >
                  <ListItem id={"five"} style={{ borderRadius: 50 }} button>
                    <ListItemText primary="My Bucket List" />
                  </ListItem>
                </NavLink>
                <div>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Anime Bucket List", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Anime Bucket List"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Manga Bucket List", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Manga Bucket List"
                    />
                  </ListItem>
                  <ListItem
                    className={classes.ListItem}
                    button
                    onClick={(e) => this.scroll("Manhwa Bucket List", e)}
                  >
                    <ListItemText
                      secondaryTypographyProps={{ style: { color: "white" } }}
                      secondary="Manhwa Bucket List"
                    />
                  </ListItem>
                </div>
              </div>

              <div>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/profile/public"
                  exact
                >
                  <ListItem id={"six"} style={{ borderRadius: 50 }} button>
                    <ListItemText primary="Public" />
                  </ListItem>
                </NavLink>
              </div>
            </List>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(ProfileMenu);
