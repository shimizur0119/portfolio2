import React from "react";
import useStyles from "../../style/style";
import { Box } from "@material-ui/core";

import Reversi from "../reversi";

export const PcReversi = () => {
  const classes = useStyles();
  return (
    <Box pb={10} id="reversi">
      <Box
        pb={5}
        fontSize="h1.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        StayHomeオセロ
      </Box>
      <div　style={{textAlign:"center"}}>
        <Reversi size={500}/>
      </div>
    </Box>
  );
};

export const MoReversi = () => {
  const classes = useStyles();
  return (
    <Box pb={10} id="reversi">
      <Box
        pb={2}
        fontSize="h3.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        オセロ
      </Box>
      <div>
        <Reversi size={400}/>
      </div>
    </Box>
  );
};
