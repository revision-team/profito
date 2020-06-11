import React from "react";

import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme: Theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

interface BadgeAvatarProps {
  src?: string;
  alt: string;
  online: boolean;
}

export default function BadgeAvatars(props: BadgeAvatarProps) {
  const classes = useStyles();

  const avatar = <Avatar alt={props.alt} src={props.src} />;

  return (
    <div className={classes.root}>
      {props.online ? (
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          {avatar}
        </StyledBadge>
      ) : (
        avatar
      )}
    </div>
  );
}
