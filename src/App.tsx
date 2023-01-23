import React from "react";
import { isMobile } from "react-device-detect";
import DesktopWrapper from "./components/deviceWrapper/DesktopWraaper";
import MobileWrapper from "./components/deviceWrapper/MobileWrapper";

import Home from "./routes/Home";

const App: React.FC = () => {
  return (
    <div>
      {isMobile ? (
        <MobileWrapper>
          <Home />
        </MobileWrapper>
      ) : (
        <DesktopWrapper>
          <Home />
        </DesktopWrapper>
      )}
    </div>
  );
};

export default App;
