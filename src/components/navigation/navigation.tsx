import React, { useContext, FunctionComponent } from "react";
import { Store } from "store";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Theme,
  Button,
} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import TrySession from "./session";
import MoreIcon from "@material-ui/icons/MoreVert";
import { ToggleShowChat, ClsSession } from "store/actions";

const useStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    height: 50,
    paddingTop: 1,
    paddingLeft: 1,
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Navigation: FunctionComponent = (props) => {
  const classes = useStyles();

  const { state, dispatch } = useContext(Store);
  const session = localStorage.getItem("session");

  if (session !== "active" || !state.session.email) {
    return <TrySession />;
  }

  const mobileMenuId = "mobile_menu";

  const handleMobileMenuOpen = () => {};

  const handleToggleShowChat = () => dispatch(ToggleShowChat());

  const handleLogout = () => {
    localStorage.setItem("session", "inactive");
    dispatch(ClsSession());
  };

  return (
    <AppBar position='relative' className={classes.appBar}>
      <Toolbar variant='dense'>
        {state.showChat || (
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleToggleShowChat}
          >
            <ChatIcon />
          </IconButton>
        )}
        <div className={classes.grow} />
        <Button onClick={handleLogout}>Logout</Button>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label='show more'
            aria-controls={mobileMenuId}
            aria-haspopup='true'
            onClick={handleMobileMenuOpen}
            color='inherit'
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
