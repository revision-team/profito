import React, { useContext } from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import ScrollVertical from "components/scroll/vertical";
import { Scrollbars } from "react-custom-scrollbars";
import CloseIcon from "@material-ui/icons/Close";
import { Store } from "store";
import { ToggleShowChat } from "store/actions";
import Chat from "components/chat/chat";
import SearchBar from "material-ui-search-bar";
import { User } from "components/chat/chat";

const users: User[] = [
  {
    name: "Emily Mars",
    avatar: "/avatars/1.png",
    caption: "Yep! I saw it!",
    online: true,
  },
  {
    name: "Sue Fidalgo",
    avatar: "/avatars/2.png",
    caption: "",
    online: false,
  },
  {
    name: "Karen Cats",
    avatar: "/avatars/3.png",
    caption: "Maybe, what do you think about it?",
    online: false,
  },
  {
    name: "Daniel Hans",
    avatar: "/avatars/4.png",
    caption: "Somewhere, I don't know",
    online: true,
  },
  {
    name: "Trin Mabble",
    avatar: "/avatars/5.png",
    caption: "",
    online: false,
  },
  {
    name: "Paula Jacobs",
    avatar: "/avatars/6.png",
    caption: "You are doing well, congratulations!",
    online: true,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
  },
  board: {
    height: "calc(100% - 50px)",
    width: "100%",
  },
  search: {
    height: 49,
    width: "100%",
    textAlign: "right",
  },
}));

export default function Chats() {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);

  const handleToggleShowChat = () => dispatch(ToggleShowChat());

  return (
    <React.Fragment>
      {state.showChat && (
        <div className={classes.container}>
          <div className={classes.search}>
            {/* <SearchBar
              onChange={() => console.log("onChange")}
              onRequestSearch={() => console.log("onRequestSearch")}
              style={{
                margin: "0 auto",
                maxWidth: 800,
                width: "80%",
              }}
            /> */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleToggleShowChat}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.board}>
            <Scrollbars autoHide universal renderThumbVertical={ScrollVertical}>
              {users.map((u) => (
                <Chat user={u} />
              ))}
            </Scrollbars>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
