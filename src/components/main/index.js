import React, { useState } from "react";
import useStyles from "../../style/style";
import { Box, Grow } from "@material-ui/core";
import PenginIcon from "../../pic/pengin.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ once: true });

export const PcPengin = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const hoverFunc = () => {
    setOpen(!open);
    setCount(count + 1);
  };
  return (
    <Box pt={20} pb={10} id="top">
      <Box display="flex" justifyContent="center">
        <Box className={classes.picbox} onMouseOver={hoverFunc} id="hover">
          <img src={PenginIcon} className={classes.pcpi} alt="popup" />
          <Grow in={!open}>
            <Box
              p={2}
              className={classes.pchukidashi1}
              whiteSpace="nowrap"
              fontSize="h5.fontSize"
            >
              <Box pt={2}>
                <Box display="flex" justifyContent="center">
                  見ていただいて、ありがとうございます。
                </Box>
                <Box display="flex" justifyContent="center">
                  こちらはPC版ページです。
                </Box>
              </Box>
            </Box>
          </Grow>
          <Grow in={open}>
            <Box
              p={2}
              className={classes.pchukidashi2}
              whiteSpace="nowrap"
              // data-aos="zoom-in"
              fontSize="h5.fontSize"
            >
              <Box pt={3}>
                <Box display="flex" justifyContent="center">
                  Done is better than perfect!
                </Box>
                <Box display="flex" justifyContent="center">
                  完ぺきを目指すよりまず完成させろ
                </Box>
              </Box>
            </Box>
          </Grow>
          <Grow in={count > 5}>
            <Box
              className={classes.pcaudience}
              whiteSpace="nowrap"
              fontSize="h5.fontSize"
            ></Box>
          </Grow>
        </Box>
      </Box>
      <Box
        textAlign="center"
        className={classes.htt}
        fontSize="h2.fontSize"
        component="h1"
      >
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
