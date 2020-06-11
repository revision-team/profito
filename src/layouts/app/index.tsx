import React, { FunctionComponent, useContext } from "react";
import Navigation from "components/navigation/navigation";
import { Scrollbars } from "react-custom-scrollbars";
import ScrollVertical from "components/scroll/vertical";
import { makeStyles } from "@material-ui/core";
import { Store } from "store";
import clsx from "clsx";
import Chats from "./chats";
import NavIcons from "./navIcons";
import WithSession from "components/session/session";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
  },
  icons: {
    flex: "0 0 80px",
    backgroundColor: theme.palette.background.paper,
  },
  chatHide: {
    "flex-grow": "0",
    transition: "flex-grow .5s",
    backgroundColor: theme.palette.background.paper,
  },
  chatShow: {
    "flex-grow": "0.3",
    transition: "flex-grow .5s",
    backgroundColor: theme.palette.background.paper,
    opacity: 0.8,
  },
  content: {
    flex: "1 1 auto",
    overflow: "auto" /* for fixed side bar*/,
  },
  board: {
    width: "100%",
    height: "calc(100% - 50px)",
  },
  boardContent: {
    padding: theme.spacing(4),
  },
}));

export const App: FunctionComponent = (props) => {
  const { state } = useContext(Store);
  const classes = useStyles();

  return (
    <WithSession redirect="/session">
      <div className={classes.container}>
        {/* ICONS */}
        <div className={classes.icons}>
          <Scrollbars autoHide universal renderThumbVertical={ScrollVertical}>
            <NavIcons />
          </Scrollbars>
        </div>
        {/* CHAT */}
        <div
          className={clsx({
            [classes.chatHide]: !state.showChat,
            [classes.chatShow]: state.showChat,
          })}
        >
          <Chats />
        </div>
        {/* MAIN BOARD */}
        <div className={classes.content}>
          <Navigation />
          <div className={classes.board}>
            <Scrollbars autoHide universal renderThumbVertical={ScrollVertical}>
              <div className={classes.boardContent}>{props.children}</div>
            </Scrollbars>
          </div>
        </div>
      </div>
    </WithSession>
  );
};
