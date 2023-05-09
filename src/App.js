import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Plug_Play from "./scenes/Plug_Play";
import Drone from "./scenes/drone.jsx";
import Images from "./scenes/images.jsx";
import Settings from "./scenes/settings.jsx";
import Imager_Settings from "./scenes/imager_settings.jsx";
import RealTime_Settings from "./scenes/RealTime_Settings.jsx";
import Diagnostics from "./scenes/diagnostics.jsx";
import Users from "./scenes/users.jsx";
import Download_data from "./scenes/download_data.jsx";
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
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/RealTime_Settings"
                element={<RealTime_Settings />}
              />
              <Route path="/diagnostics" element={<Diagnostics />} />
              <Route path="/imager_settings" element={<Imager_Settings />} />
              <Route path="/users" element={<Users />} />
              <Route path="/download_data" element={<Download_data />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
