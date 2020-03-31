import React from "react";
import useStyles from "../../style/style";
import { Box, Grid } from "@material-ui/core";

import TalkIcon from "../../pic/talk.svg";
import WebappIcon from "../../pic/webapp.svg";

//my
import { PcServiceItem, MoServiceItem } from "./service";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const text1 =
  "お客様先の社内QA対応を行うチャットボットをLINE風のデザインで作成しました。管理画面を実装して、ログインできるアカウントを管理したり、回答データをグラフで表示したり、設定ファイルで回答内容を編集できたりする機能を実装しました。";
const text2 =
  "様々なシステムを構築しました。内容はセキュリティの関係でお伝えできませんが、様々な作業を自動化し、それを管理するものでした。";

export const PcWork = () => {
  const classes = useStyles();
  return (
    <Box pb={10} id="work">
      <Box
        pb={5}
        fontSize="h1.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        やってきたこと
      </Box>
      <Grid container direction="row" justify="center" spacing={10}>
        <Grid item>
          <PcServiceItem pic={TalkIcon} title="チャットボット" text={text1} />
        </Grid>
        <Grid item>
          <PcServiceItem
            pic={WebappIcon}
            title="webアプリケーション"
            text={text2}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export const MoWork = () => {
  const classes = useStyles();
  return (
    <Box pb={10} id="work">
      <Box
        pb={2}
        fontSize="h3.fontSize"
        className={classes.f_2}
        display="flex"
        justifyContent="center"
      >
        やってきたこと
      </Box>
      <MoServiceItem pic={TalkIcon} title="チャットボット" text={text1} />
      <MoServiceItem
        pic={WebappIcon}
        title="webアプリケーション"
        text={text2}
      />
    </Box>
  );
};
