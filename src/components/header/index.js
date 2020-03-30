import React, { useState } from "react";
import useStyles from "../../style/style";
import {
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const PcHeader = () => {
  const classes = useStyles();
  const linkStyle = { textDecoration: "none", color: "initial" };
  return (
    <Box className={classes.ht}>
      <Button>
        <AnchorLink href="#top" style={linkStyle}>
          <Box className={classes.f_1} fontSize="h4.fontSize">
            シミズのポートフォリオ
          </Box>
        </AnchorLink>
      </Button>
    </Box>
  );
};

export const MobileHeader = () => {
  const classes = useStyles();
  const linkStyle = { textDecoration: "none", color: "initial" };
  return (
    <Box className={classes.ht}>
      <Button>
        <AnchorLink href="#top" style={linkStyle}>
          <Box className={classes.f_1} fontSize="h6.fontSize">
            シミズのポートフォリオ
          </Box>
        </AnchorLink>
      </Button>
    </Box>
  );
};

export const MenuButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const clickFunc = () => {
    console.log("hello!!!");
    setOpen(true);
  };
  const closeFunc = () => {
    console.log("close!!!");
    setOpen(false);
  };
  const linkStyle = { textDecoration: "none", color: "initial" };
  return (
    <Box className={classes.hm}>
      <Button onClick={clickFunc}>
        <MenuIcon fontSize="large" />
      </Button>
      <Drawer anchor="right" open={open} onClose={closeFunc}>
        <List>
          <ListItem>
            <span className={classes.f_2}>以下、ページ内リンクです。</span>
          </ListItem>
          <ListItem>
            <Button className={classes.f_2}>
              <AnchorLink href="#top" style={linkStyle}>
                top
              </AnchorLink>
            </Button>
          </ListItem>
          <ListItem>
            <Button className={classes.f_2}>
              <AnchorLink href="#service" style={linkStyle}>
                できること
              </AnchorLink>
            </Button>
          </ListItem>
          <ListItem>
            <Button className={classes.f_2}>
              <AnchorLink href="#work" style={linkStyle}>
                やってきたこと
              </AnchorLink>
            </Button>
          </ListItem>
          <ListItem>
            <Button className={classes.f_2}>
              <AnchorLink href="#about" style={linkStyle}>
                about me
              </AnchorLink>
            </Button>
          </ListItem>
          <ListItem>
            <Button className={classes.f_2}>
              <AnchorLink href="#technology" style={linkStyle}>
                テクノロジー
              </AnchorLink>
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
