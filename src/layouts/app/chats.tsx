import React, { useContext } from "react";
import { makeStyles, IconButton, Divider } from "@material-ui/core";
import ScrollVertical from "components/scroll/vertical";
import { Scrollbars } from "react-custom-scrollbars";
import CloseIcon from "@material-ui/icons/Close";
import { Store } from "store";
import { ToggleShowChat } from "store/actions";

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
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleToggleShowChat}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.board}>
            <Scrollbars autoHide universal renderThumbVertical={ScrollVertical}>
              {[...new Array(50)].map((e, k) => (
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore omnis harum esse iure totam deleniti? Nostrum,
                  repellat, veritatis aut officia ipsam pariatur commodi natus
                  blanditiis repellendus eaque distinctio, est dicta!
                </p>
              ))}
            </Scrollbars>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
