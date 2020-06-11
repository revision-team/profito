import React, { useContext } from "react";
import { Store } from "store";
import { ClsSession } from "store/actions";

import { User } from "components/chat/chat";

import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Menu,
  MenuItem,
  Button,
  Typography,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import InboxIcon from "@material-ui/icons/Inbox";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    top: "50px !important",
    marginRight: theme.spacing(3),
  },
  menuIcon: {
    minWidth: 40,
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
}));

interface MenuProps {
  user: User;
}

export default function SimpleMenu(props: MenuProps) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { state, dispatch } = useContext(Store);
  const handleLogout = () => {
    localStorage.setItem("session", "inactive");
    dispatch(ClsSession());
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {props.user.name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{
          paper: classes.paper,
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon className={classes.menuIcon}>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon className={classes.menuIcon}>
            <AccountBalanceWalletIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">My account</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon className={classes.menuIcon}>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Inbox</Typography>
        </MenuItem>
        <Divider className={classes.divider} />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon className={classes.menuIcon}>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Logout</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
