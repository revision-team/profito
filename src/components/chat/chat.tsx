import React from "react";
import BadgeAvatar from "components/chat/badgeavatar";

import { Theme, makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardHeader, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 350,
    borderColor: "transparent",
    boxShadow: "none",
  },
  action: {
    marginTop: 0,
  },
}));

export interface User {
  name: string;
  avatar: string;
  caption: string;
  online: boolean;
}

interface ChatProps {
  user: User;
}

export default function Chat(props: ChatProps) {
  const classes = useStyles();

  const truncate = (s: string, n: number) => {
    if (s.length <= n) {
      return s;
    }
    return s.substring(0, 20) + "...";
  };

  const { user } = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <BadgeAvatar src={user.avatar} alt={user.name} online={user.online} />
        }
        action={
          <IconButton aria-label="settings" className={classes.action}>
            <MoreVertIcon />
          </IconButton>
        }
        title={user.name}
        subheader={truncate(user.caption, 20)}
      />
    </Card>
  );
}
