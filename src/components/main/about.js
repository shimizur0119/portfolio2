import React from "react";
import useStyles from "../../style/style";
import { Box, Grid } from "@material-ui/core";

import PenginIcon from "../../pic/pengin.svg";
import Soccer2Icon from "../../pic/soccer2.svg";

export const PcAboutItem = props => {
  const classes = useStyles();
  return (
    <Box mb={2} data-aos="zoom-in">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Box
            fontSize="h3.fontSize"
            className={classes.f_2}
            children={props.title}
          />
        </Grid>
        <Grid item>
          <Box className={classes.sb} display="flex" alignItems="center">
            <img className={classes.si} src={props.pic} alt={props.title} />
          </Box>
        </Grid>
        <Grid item>
          <Box width={500} fontSize="h6.fontSize" children={props.text} />
        </Grid>
      </Grid>
    </Box>
  );
};
export const MoAboutItem = props => {
  const classes = useStyles();
  return (
    <Box mb={2} data-aos="zoom-in">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Box
            fontSize="h6.fontSize"
            className={classes.f_2}
            children={props.title}
          />
        </Grid>
        <Grid item>
          <Box className={classes.sb} display="flex" alignItems="center">
            <img className={classes.si} src={props.pic} alt={props.title} />
          </Box>
        </Grid>
        <Grid item>
          <Box width={300} children={props.text} />
        </Grid>
      </Grid>
    </Box>
  );
};

const PcMeStatus = () => {
  const classes = useStyles();
  return (
    <Box fontSize="h6.fontSize" display="flex" justifyContent="center">
      <table>
        <tbody>
          <tr>
            <td className={`${classes.f_2} ${classes.td}`}>Name</td>
            <td className={`${classes.f_0} ${classes.td}`}>清水 僚太</td>
          </tr>
          <tr>
            <td className={`${classes.f_2} ${classes.td}`}>Age</td>
            <td className={`${classes.f_0} ${classes.td}`}>25</td>
          </tr>
          <tr>
            <td className={`${classes.f_2} ${classes.td}`}>From</td>
            <td className={`${classes.f_0} ${classes.td}`}>愛知県</td>
          </tr>
          <tr>
            <td className={`${classes.f_2} ${classes.td}`}>Live</td>
            <td className={`${classes.f_0} ${classes.td}`}>東京都　足立区</td>
          </tr>
          <tr>
            <td className={`${classes.f_2} ${classes.td}`}>DM</td>
            <td
              className={`${classes.f_0} ${classes.td}`}
              style={{ fontSize: "small" }}
            >
              otsukaresamannsatabasa@gmail.com
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};
const MoMeStatus = () => {
  const classes = useStyles();
  return (
    <Box fontSize="h6.fontSize" display="flex" justifyContent="center">
      <table>
        <tbody>
          <tr>
            <td className={`${classes.f_2} ${classes.td}`}>Name</td>
            <td className={`${classes.f_0} ${classes.td}`}>清水 僚太</td>
          </tr>
          <tr>
            <td className={`${classes.f_2} ${classes.td}`}>Age</td>
            <td className={`${classes.f_0} ${classes.td}`}>25</td>
          </tr>
          <tr>
            <td className={`${classes.f_2} ${classes.td}`}>From</td>
            <td className={`${classes.f_0} ${classes.td}`}>愛知県</td>
          </tr>
          <tr>
            <td className={`${classes.f_2} ${classes.td}`}>Live</td>
            <td className={`${classes.f_0} ${classes.td}`}>東京都　足立区</td>
          </tr>
          <tr>
            <td className={`${classes.f_2} ${classes.td}`}>DM</td>
            <td
              className={`${classes.f_0} ${classes.td}`}
              style={{ fontSize: "small" }}
            >
              otsukaresamannsatabasa@gmail.com
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

const PcOther = () => {
  const classes = useStyles();
  return (
    <Box className={classes.f_2}>
      <Box>
        サッカー、フットサルが好きです。見るよりやる派です。サークルっぽいのよりガチなほうが好きです。
      </Box>
      <Box>
        土日は基本家でごろごろしています。のんびり過ごすために平日は働いています。
      </Box>
    </Box>
  );
};
const MoOther = () => {
  const classes = useStyles();
  return (
    <Box className={classes.f_2}>
      <Box>
        サッカー、フットサルが好きです。見るよりやる派です。サークルっぽいのよりガチなほうが好きです。
      </Box>
      <Box>土日は基本家でごろごろしています。</Box>
      <Box>のんびり過ごすために平日は働いています。</Box>
    </Box>
  );
};

export const PcAbout = () => {
  const classes = useStyles();
  return (
    <Box pb={5} id="about">
      <Box
        pb={5}
        fontSize="h1.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        About Me
      </Box>
      <PcAboutItem pic={PenginIcon} title="基本情報" text={<PcMeStatus />} />
      <PcAboutItem
        pic={Soccer2Icon}
        title="好きなものとか"
        text={<PcOther />}
      />
    </Box>
  );
};

export const MoAbout = () => {
  const classes = useStyles();
  return (
    <Box pb={5} id="about">
      <Box
        pb={2}
        fontSize="h3.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        About Me
      </Box>
      <MoAboutItem pic={PenginIcon} title="基本情報" text={<MoMeStatus />} />
      <MoAboutItem
        pic={Soccer2Icon}
        title="好きなものとか"
        text={<MoOther />}
      />
    </Box>
  );
};
