import React from "react";
import useStyles from "../../style/style";
import { Box } from "@material-ui/core";
import PenginIcon from "../../pic/pengin.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const PcPengin = () => {
  const classes = useStyles();
  return (
    <Box pt={20} pb={10} id="top">
      <Box display="flex" justifyContent="center">
        <Box className={classes.picbox}>
          <img src={PenginIcon} className={classes.pcpi} alt="popup" />
          <Box
            p={2}
            className={classes.pchukidashi1}
            whiteSpace="nowrap"
            data-aos="zoom-in"
            fontSize="h5.fontSize"
          >
            <Box pt={3}>
              <Box display="flex" justifyContent="center">
                おつかれ様です。
              </Box>
              <Box display="flex" justifyContent="center">
                ※PC版ページ
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box textAlign="center" className={classes.htt} fontSize="h2.fontSize" component="h1">
        シミズ リョウタ
      </Box>
      <Box
        textAlign="center"
        className={classes.f_1}
        fontSize="h4.fontSize"
        component="h4"
        data-aos="zoom-in"
      >
        どうか、あたたかい目でごらんください。
      </Box>
    </Box>
  );
};

export const MoPengin = () => {
  const classes = useStyles();
  return (
    <Box pt={15} pb={10} id="top">
      <Box display="flex" justifyContent="center">
        <Box className={classes.picbox}>
          <img src={PenginIcon} className={classes.pi} alt="popup" />
          <Box
            p={2}
            pt={2.5}
            className={classes.hukidashi1}
            whiteSpace="nowrap"
            data-aos="zoom-in"
          >
            <div>お世話になります。</div>
            <div>※スマホ版ページ</div>
          </Box>
        </Box>
      </Box>
      <Box textAlign="center" className={classes.htt} component="h1">
        シミズ リョウタ
      </Box>
      <Box
        textAlign="center"
        className={classes.f_1}
        component="h5"
        data-aos="zoom-in"
      >
        どうか、あたたかい目でごらんください。
      </Box>
    </Box>
  );
};
