import React from "react";
import useStyles from "../../style/style";
import { Box } from "@material-ui/core";

import TalkIcon from "../../pic/talk.svg";
import WebappIcon from "../../pic/webapp.svg";

//my
import { ServiceItem } from "./service";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const text1 =
  "お客様先の社内QA対応を行うチャットボットをLINE風のデザインで作成しました。管理画面を実装して、ログインできるアカウントを管理したり、回答データをグラフで表示したり、設定ファイルで回答内容を編集できたりする機能を実装しました。";
  const text2 =
  "様々なシステムを構築しました。内容はセキュリティの関係でお伝えできませんが、様々な作業を自動化し、それを管理するものでした。";


export const Work = () => {
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
        やってきたこと
      </Box>
      <ServiceItem pic={TalkIcon} title="チャットボット" text={text1}/>
      <ServiceItem pic={WebappIcon} title="webアプリケーション" text={text2}/>
    </Box>
  );
};
