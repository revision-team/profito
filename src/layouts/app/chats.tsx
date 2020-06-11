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
    avatar: "/avatars/222.png",
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
  {
    name: "James Mars",
    avatar: "/avatars/13.png",
    caption: "Yep! I saw it!",
    online: true,
  },
  {
    name: "Susan Malebow",
    avatar: "/avatars/8.png",
    caption: "",
    online: false,
  },
  {
    name: "Tatiana Loops",
    avatar: "/avatars/12.png",
    caption: "Yep! I saw it!",
    online: true,
  },
  {
    name: "Fatima McMillan",
    avatar: "/avatars/1000.png",
    caption: "",
    online: true,
  },
  {
    name: "Luis Homt",
    avatar: "/avatars/11.png",
    caption: "Yep! I saw it!",
    online: true,
  },
  {
    name: "Dave Atkins",
    avatar: "/avatars/9.png",
    caption: "",
    online: false,
  },
  {
    name: "Jessica Reainks",
    avatar: "/avatars/7.png",
    caption: "Yep! I saw it!",
    online: true,
  },
  {
    name: "Sue Fidalgo",
    avatar: "/avatars/14.png",
    caption: "",
    online: false,
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
    marginTop: theme.spacing(2),
  },
  search: {
    height: 49,
    width: "100%",
    textAlign: "right",
  },
  chats: {
    marginRight: theme.spacing(3),
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
            <SearchBar
              onChange={() => console.log("onChange")}
              onRequestSearch={() => console.log("onRequestSearch")}
              style={{
                margin: "0 auto",
                maxWidth: 800,
                width: "80%",
              }}
            />
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
              <div className={classes.chats}>
                {users.map((u) => (
                  <Chat user={u} />
                ))}
              </div>
            </Scrollbars>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
