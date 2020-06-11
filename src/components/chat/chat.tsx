import React from "react";
import clsx from "clsx";

import BadgeAvatar from "components/chat/badgeavatar";

import { Theme, makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  IconButton,
  Collapse,
  Slide,
  CardContent,
  CardActions,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 350,
    boxShadow: "none",
    transition: "opacity 0.2s linear",
  },
  cardHeader: {
    padding: theme.spacing(1),
  },
  cardAction: {
    marginTop: 0,
  },
  cardExpand: {
    opacity: 0.1,
  },
  expandIcon: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpenIcon: {
    transform: "rotate(180deg)",
  },
  slide: {
    maxWidth: 350,
    width: "100%",
    paddingRight: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  actions: {
    // paddingRight: theme.spacing(3),
    boxShadow: "none",
    textAlign: "center",
    marginTop: "-55px",
    backgroundColor: "transparent",
    // transition: "visibility 3s linear",
    // overflow: "hidden",
  },
  actionsExpand: {
    // visibility: "visible",
  },
  actionIcon: {
    margin: theme.spacing(0, 1),
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

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const truncate = (caption: string, n: number) => {
    if (caption.length <= n) {
      return caption;
    }
    return caption.substring(0, 20) + "...";
  };

  const { user } = props;
  return (
    <div className={classes.card}>
      <Card
        className={clsx(classes.card, {
          [classes.cardExpand]: expanded,
        })}
      >
        <CardHeader
          avatar={
            <BadgeAvatar
              src={user.avatar}
              alt={user.name}
              online={user.online}
            />
          }
          action={
            <IconButton
              className={clsx(classes.expandIcon, {
                [classes.expandOpenIcon]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={user.name}
          subheader={truncate(user.caption, 20)}
          classes={{
            root: classes.cardHeader,
            action: classes.cardAction,
          }}
        />
      </Card>
      {/* <div className={classes.slide}> */}
      <Slide in={expanded} timeout={700} unmountOnExit direction="right">
        <Card
          className={clsx(classes.actions, {
            [classes.actionsExpand]: expanded,
          })}
        >
          <IconButton aria-label="call friend" className={classes.actionIcon}>
            <PhoneIcon />
          </IconButton>
          <IconButton
            aria-label="chat with friend"
            className={classes.actionIcon}
          >
            <ChatBubbleIcon />
          </IconButton>
        </Card>
      </Slide>
      {/* </div> */}
    </div>
  );
}
