import React from "react";
import useStyles from "../../style/style";
import { Box, Grid } from "@material-ui/core";

import WebpageIcon from "../../pic/webpage.svg";
import ServerIcon from "../../pic/server.png";
import SecurityIcon from "../../pic/security.png";

export const ServiceItem = props => {
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
          <Box width={300} className={classes.f_2} children={props.text} />
        </Grid>
      </Grid>
    </Box>
  );
};
export const MoServiceItem = props => {
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
          <Box width={300} className={classes.f_2} children={props.text} />
        </Grid>
      </Grid>
    </Box>
  );
};
export const PcServiceItem = props => {
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
            fontSize="h3.fontSize"
            className={classes.f_2}
            children={props.title}
          />
        </Grid>
        <Grid item>
          <Box className={classes.pcsb} display="flex" alignItems="center">
            <img className={classes.pcsi} src={props.pic} alt={props.title} />
          </Box>
        </Grid>
        <Grid item>
          <Box width={400} fontSize="h5.fontSize" className={classes.f_2} children={props.text} />
        </Grid>
      </Grid>
    </Box>
  );
};

const text1 =
  "フロントエンドのコーディングが可能です。おしゃれなページが構築できるように日々精進しています。";
const text2 =
  "webページを公開するサーバを構築することができます。クラウドや仮想化など、最新技術のキャッチアップにも努めています。";
const text3 =
  "APIの作成、DBの構築ができます。OAuth 2.0の認証機能なども知見があります。";

export const MoService = () => {
  const classes = useStyles();
  return (
    <Box pb={10} id="service">
      <Box
        pb={2}
        fontSize="h3.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        できること
      </Box>
      <MoServiceItem pic={WebpageIcon} title="フロントエンド" text={text1} />
      <MoServiceItem pic={ServerIcon} title="デプロイ" text={text2} />
      <MoServiceItem pic={SecurityIcon} title="バックエンド" text={text3} />
    </Box>
  );
};

export const PcService = () => {
  const classes = useStyles();
  return (
    <Box pb={10} id="service">
      <Box
        pb={5}
        fontSize="h1.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        できること
      </Box>
      <Grid container direction="row" justify="center" spacing={10}>
        <Grid item>
          <PcServiceItem
            pic={WebpageIcon}
            title="フロントエンド"
            text={text1}
          />
        </Grid>
        <Grid item>
          <PcServiceItem pic={ServerIcon} title="デプロイ" text={text2} />
        </Grid>
        <Grid item>
          <PcServiceItem pic={SecurityIcon} title="バックエンド" text={text3} />
        </Grid>
      </Grid>
    </Box>
  );
};
