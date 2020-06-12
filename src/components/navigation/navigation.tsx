import React, { useContext, FunctionComponent } from "react";
import { Store } from "store";
import { ToggleShowChat, ClsSession } from "store/actions";

import { MessageIcon } from "components/icons";
import Menu from "components/navigation/menu";
import Notifications from "components/navigation/notifications";
import TrySession from "components/session/session";

import { makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import ForumIcon from "@material-ui/icons/Forum";

const useStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    height: 65,
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

const currentUser = {
  name: "Joselyn Pretty",
  avatar: "",
  caption: "",
  online: true,
};

const Navigation: FunctionComponent = (props) => {
  const classes = useStyles();

  const mobileMenuId = "mobile_menu";
  const handleMobileMenuOpen = () => {};

  const { state, dispatch } = useContext(Store);
  const handleToggleShowChat = () => dispatch(ToggleShowChat());

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        {state.showChat || (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggleShowChat}
          >
            <ForumIcon />
          </IconButton>
        )}
        <div className={classes.grow} />

        <Notifications count={100} />
        <Menu user={currentUser} />

        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
