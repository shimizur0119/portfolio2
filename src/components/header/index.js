import React, { useState } from "react";
import useStyles from "../../style/style";
import { Button, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
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
    setOpen(true);
  };
  const closeFunc = () => {
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
            <Button>
              <AnchorLink className={classes.f_2} href="#top" style={linkStyle}>
                top
              </AnchorLink>
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <AnchorLink
                className={classes.f_2}
                href="#service"
                style={linkStyle}
              >
                できること
              </AnchorLink>
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <AnchorLink
                className={classes.f_2}
                href="#work"
                style={linkStyle}
              >
                やってきたこと
              </AnchorLink>
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <AnchorLink
                className={classes.f_2}
                href="#about"
                style={linkStyle}
              >
                about me
              </AnchorLink>
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <AnchorLink
                className={classes.f_2}
                href="#technology"
                style={linkStyle}
              >
                テクノロジー
              </AnchorLink>
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
