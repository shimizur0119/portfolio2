import React from "react";

import { Box } from "@material-ui/core";
import MediaQuery from "react-responsive";

//my
import { PcHeader, MobileHeader, MenuButton } from "./components/header/index";
import { Pengin } from "./components/main/index";
import { Service } from "./components/main/service";
import { Work } from "./components/main/work";
import { About } from "./components/main/about";
import { Technology } from "./components/main/technology";

function App() {
  return (
    <>
      <MediaQuery query="(max-width: 767px)">
        <MobileHeader />
        <MenuButton />
      </MediaQuery>
      <MediaQuery query="(min-width: 767px)">
        <PcHeader />
        <MenuButton />
      </MediaQuery>
      <Box component="main">
        <Pengin />
        <Service />
        <Work />
        <About />
        <Technology />
      </Box>
    </>
  );
}

export default App;
