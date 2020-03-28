import React from "react";
import useStyles from "../../style/style";
import { Box, Grid } from "@material-ui/core";

import WebpageIcon from "../../pic/webpage.svg";
import ServerIcon from "../../pic/server.png";
import SecurityIcon from "../../pic/security.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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

const text1 =
  "フロントエンドのコーディングが可能です。おしゃれなページが構築できるように日々精進しています。";
const text2 =
  "webページを公開するサーバを構築することができます。クラウドや仮想化など、最新技術のキャッチアップにも努めています。";
const text3 =
  "APIの作成、DBの構築ができます。OAuth 2.0の認証機能なども知見があります。";

export const Service = () => {
  const classes = useStyles();
  return (
    <Box pb={10}>
      <Box
        pb={2}
        fontSize="h3.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        できること
      </Box>
      <ServiceItem pic={WebpageIcon} title="フロントエンド" text={text1} />
      <ServiceItem pic={ServerIcon} title="デプロイ" text={text2} />
      <ServiceItem pic={SecurityIcon} title="バックエンド" text={text3} />
    </Box>
  );
};
