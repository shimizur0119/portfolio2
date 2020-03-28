import { makeStyles } from "@material-ui/styles";
import Pic1Icon from "../pic/hukidashi1.png";
// import Pic1Icon from "../pic/hukidashi1.svg";

const useStyles = makeStyles(() => ({
  ht: {
    zIndex: 100,
    position: "fixed",
    top: 10,
    left: 10
  },
  htt: {
    fontFamily: "komadori"
  },
  f_0: {
    fontFamily: "M PLUS 1p"
  },
  f_1: {
    fontFamily: "komadori"
  },
  f_2: {
    fontFamily: "bananaslip"
  },
  f_3: {
    fontFamily: "BANBAN"
  },
  f_4: {
    fontFamily: "canary"
  },
  f_5: {
    fontFamily: "GAGAGAGA"
  },
  f_6: {
    fontFamily: "kinari-gothic"
  },
  f_7: {
    fontFamily: "MISHIMISHI-BLOCK"
  },
  f_8: {
    fontFamily: "pugnomincho"
  },
  f_9: {
    fontFamily: "pupupu"
  },
  hm: {
    zIndex: 100,
    position: "fixed",
    top: 10,
    right: 10
  },
  pi: {
    width: "auto",
    height: 100,
    display: "block"
  },
  picbox: {
    position: "relative"
  },
  hukidashi1: {
    fontFamily: "komadori",
    width: 100,
    height: 100,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "-50%",
    right: "100%",
    backgroundImage: `url(${Pic1Icon})`
  },
  pic2: {
    position: "absolute",
    top: "-50%",
    right: "100%"
  },
  bgimg1: {
    backgroundImage: `url(${Pic1Icon})`
  },
  si: {
    height: "auto",
    width: 100
  },
  sb: {
    width: 100,
    height: 100
  },
  td: {
    padding: 10
  },
  logo:{
    width:100,
    height:100
  }
}));

export default useStyles;
