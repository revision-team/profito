import React from "react";

import { CenteredHorizontal } from "components/styled/index";
import TabPanel from "components/tabpanel";

import Privacy from "views/home/privacy";
import Terms from "views/home/terms";
import Cookies from "./cookies";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
    width: "50%",
  },
  tabs: {
    padding: theme.spacing(2),
  },
  label: {
    fontSize: 18,
    padding: theme.spacing(0, 6, 0, 6),
  },
  panels: {
    backgroundColor: theme.palette.action.active,
    opacity: 0.8,
    borderRadius: "0 0 10px 10px",
  },
}));

export default function TermsAndPrivacy() {
  const classes = useStyles();

  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CenteredHorizontal className={classes.root}>
      <Paper elevation={3}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          centered
          variant="standard"
          classes={{ root: classes.tabs }}
          aria-label="info panel"
        >
          <Tab label="TERMS OF USE" className={classes.label} />
          <Tab label="PRIVACY POLICY" className={classes.label} />
          <Tab label="COOKIES POLICY" className={classes.label} />
        </Tabs>
      </Paper>
      <div className={classes.panels}>
        <TabPanel value={value} index={0}>
          <Terms />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Privacy />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Cookies />
        </TabPanel>
      </div>
    </CenteredHorizontal>
  );
}
