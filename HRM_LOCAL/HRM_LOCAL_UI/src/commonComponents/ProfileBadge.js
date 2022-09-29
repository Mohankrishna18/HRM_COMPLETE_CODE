import React from "react";
import ReactDOM from "react-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import Badge from "@material-ui/core/Badge";
import InfoIcon from "@material-ui/icons/Info";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { connect } from "react-redux";
function mapStateToProps(state) {
  return {};
}
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  
  
  
  
  // necessary for content to be below app bar
  
  
}));


const App = () => {
  const classes = useStyles();
  const dummy = "Active now";
  return (
    <div className={classes.root}>
    

      
        <div className={classes.toolbar} />
        
        <List>
          <ListItem>
            <ListItemAvatar>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                >
                <Avatar alt="Avatar img" src="/static/images/avatar/1.jpg">
                  <PersonIcon />
                </Avatar>
              </Badge>
            </ListItemAvatar>

            <ListItemText primary="Photos" secondary={dummy} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                
              >
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </Badge>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary={dummy} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
               
              >
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </Badge>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary={dummy} />
          </ListItem>
        </List>

    </div>
  );
};
