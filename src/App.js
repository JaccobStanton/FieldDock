import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Plug_Play from "./scenes/Plug_Play";
import Drone from "./scenes/drone.jsx";
import Images from "./scenes/images.jsx";
import RealTime_Settings from "./scenes/RealTime_Settings.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material"; //cssbaseline resets the css to default and theme provider provides the ability to pass into the themes into material ui
import { ColorModeContext, useMode } from "./theme"; //importing everything just coded from theme .js

function App() {
  const [theme, colorMode] = useMode();

  return (
    //now have access to colorModeContext everywhere
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/*putting theme provider inside colormodecontext provider so that it has access as well*/}
        <CssBaseline />{" "}
        {/* will reset the CSS to baseline so we do not have to do too much work   */}
        <div className="app">
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Plug_Play" element={<Plug_Play />} />
              <Route path="/drone" element={<Drone />} />
              <Route path="/images" element={<Images />} />
              <Route
                path="/RealTime_Settings"
                element={<RealTime_Settings />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
