import React from "react";
import useStyles from "../../style/style";
import { Button, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export const PcHeader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.ht}>
      <Button>
        <Box className={classes.htt} fontSize="h4.fontSize">
          シミズのポートフォリオ
        </Box>
      </Button>
    </Box>
  );
};

export const MobileHeader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.ht}>
      <Button>
        <Box className={classes.f_1} fontSize="h6.fontSize">
          シミズのポートフォリオ
        </Box>
      </Button>
    </Box>
  );
};

export const MenuButton = () => {
  const classes = useStyles();
  return (
    <Box className={classes.hm}>
      <Button>
        <MenuIcon fontSize="large" />
      </Button>
    </Box>
  );
};
