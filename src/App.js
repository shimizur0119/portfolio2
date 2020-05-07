import React from "react";

import { Box } from "@material-ui/core";
import MediaQuery from "react-responsive";

//my
import { PcHeader, MobileHeader, MenuButton } from "./components/header/index";
import { PcPengin, MoPengin } from "./components/main/index";
import { PcService, MoService } from "./components/main/service";
import { PcWork, MoWork } from "./components/main/work";
import { PcAbout, MoAbout } from "./components/main/about";
import { PcTechnology, MoTechnology } from "./components/main/technology";
import { PcReversi, MoReversi } from "./components/main/reversi";

function App() {
  return (
    <>
      {/* mobile用 */}
      <MediaQuery query="(max-width: 767px)">
        <MobileHeader />
        <MenuButton />
        <Box component="main">
          <MoPengin />
          <MoService />
          <MoWork />
          <MoReversi />
          <MoAbout />
          <MoTechnology />
        </Box>
      </MediaQuery>
      {/* PC用 */}
      <MediaQuery query="(min-width: 767px)">
        <PcHeader />
        <MenuButton />
        <Box component="main">
          <PcPengin />
          <PcService />
          <PcWork />
          <PcReversi />
          <PcAbout />
          <PcTechnology />
        </Box>
      </MediaQuery>
    </>
  );
}

export default App;
