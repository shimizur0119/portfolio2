import React from "react";
import useStyles from "../../style/style";
import { Box } from "@material-ui/core";
import PenginIcon from "../../pic/pengin.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export const Pengin = () => {
  const classes = useStyles();
  return (
    <Box pt={15} pb={10}>
      <Box display="flex" justifyContent="center">
        <Box className={classes.picbox}>
          <img src={PenginIcon} className={classes.pi} alt="popup"/>
          <Box p={2} pt={4} className={classes.hukidashi1} whiteSpace="nowrap" data-aos="zoom-in">
            どーも、どーも
          </Box>
        </Box>
      </Box>
      <Box textAlign="center" className={classes.htt} component="h1">
        シミズ リョウタ
      </Box>
      <Box textAlign="center" className={classes.f_1} component="h5" data-aos="zoom-in">
        どうか、あたたかい目でごらんください。
      </Box>
    </Box>
  );
};
