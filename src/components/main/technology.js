import React from "react";
import useStyles from "../../style/style";
import { Box, Grid } from "@material-ui/core";

import PenginIcon from "../../pic/pengin.svg";

import logo_1 from "../../pic/logo/html5.svg";
import logo_2 from "../../pic/logo/css-5.svg";
import logo_3 from "../../pic/logo/javascript.svg";
import logo_4 from "../../pic/logo/typescript.svg";
import logo_5 from "../../pic/logo/git-icon.svg";
import logo_6 from "../../pic/logo/gitlab.svg";
import logo_7 from "../../pic/logo/github-octocat.svg";
import logo_8 from "../../pic/logo/react.svg";
import logo_9 from "../../pic/logo/next-js.svg";
import logo_10 from "../../pic/logo/nodejs-icon.svg";
import logo_11 from "../../pic/logo/vue-9.svg";
import logo_12 from "../../pic/logo/jquery-1.svg";
import logo_13 from "../../pic/logo/bootstrap-4.svg";
import logo_14 from "../../pic/logo/storybook-1.svg";
import logo_15 from "../../pic/logo/nginx-1.svg";
import logo_16 from "../../pic/logo/python-5.svg";
import logo_17 from "../../pic/logo/django-logo-negative.svg";
import logo_18 from "../../pic/logo/linux-tux-1.svg";
import logo_19 from "../../pic/logo/vagrant.svg";
import logo_20 from "../../pic/logo/postgresql.svg";
import logo_21 from "../../pic/logo/couchdb.svg";
import logo_22 from "../../pic/logo/ibm-watson.svg";


const logos = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
  logo_8,
  logo_9,
  logo_10,
  logo_11,
  logo_12,
  logo_13,
  logo_14,
  logo_15,
  logo_16,
  logo_17,
  logo_18,
  logo_19,
  logo_20,
  logo_21,
  logo_22
];

export const PcTechItem = props => {
  const classes = useStyles();
  return (
    <Box mb={2} data-aos="zoom-in">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <Box
            fontSize="h5.fontSize"
            className={classes.f_2}
            children={props.title}
            display="flex"
            justifyContent="center"
          />
        </Grid>
        <Grid item>
          <Box px={1}>
            <Grid container direction="row" spacing={1}>
              {props.logos.map((e, i) => (
                <Grid item xs={2} key={i}>
                  <Box display="flex" justifyContent="center">
                    <img src={e} className={classes.logo} alt={`logo_${i}`} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export const MoTechItem = props => {
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
            width={300}
            className={classes.f_2}
            children={props.title}
            display="flex"
            justifyContent="center"
          />
        </Grid>
        <Grid item>
          <Box px={1}>
            <Grid container direction="row" spacing={1}>
              {props.logos.map((e, i) => (
                <Grid item xs={4} key={i}>
                  <Box display="flex" justifyContent="center">
                    <img src={e} className={classes.logo} alt={`logo_${i}`} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export const PcTechnology = () => {
  const classes = useStyles();
  return (
    <Box pb={10} id="technology">
      <Box
        pb={5}
        fontSize="h1.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        テクノロジー
      </Box>
      <PcTechItem
        pic={PenginIcon}
        title="とりあえずロゴを並べてみました。。。"
        logos={logos}
      />
    </Box>
  );
};

export const MoTechnology = () => {
  const classes = useStyles();
  return (
    <Box pb={10} id="technology">
      <Box
        pb={2}
        fontSize="h3.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        テクノロジー
      </Box>
      <MoTechItem
        pic={PenginIcon}
        title="とりあえずロゴを並べてみました。。。"
        logos={logos}
      />
    </Box>
  );
};
