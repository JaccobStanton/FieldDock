import { Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Dashboard from "./scenes/dashboard";
import Plug_Play from "./scenes/dashboard/plug_play";
import Drone from "./scenes/dashboard/drone.jsx";
import Images from "./scenes/dashboard/images.jsx";
import Settings from "./scenes/dashboard/settings.jsx";
import Imager_Settings from "./scenes/dashboard/imager_settings.jsx";
import RealTime_Settings from "./scenes/dashboard/realtime_settings";
import Diagnostics from "./scenes/dashboard/diagnostics.jsx";
import Users from "./scenes/dashboard/users.jsx";
import Download_data from "./scenes/dashboard/download_data.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material"; //cssbaseline resets the css to default and theme provider provides the ability to pass into the themes into material ui
import { ColorModeContext, useMode } from "./theme"; //importing everything just coded from theme .js
import Calendar from "./components/Mission Planner/calendar";

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
              <Route path="/" element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Plug_Play" element={<Plug_Play />} />
              <Route path="/drone" element={<Drone />} />
              <Route path="/images" element={<Images />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/realtime_settings"
                element={<RealTime_Settings />}
              />
              <Route path="/diagnostics" element={<Diagnostics />} />
              <Route path="/imager_settings" element={<Imager_Settings />} />
              <Route path="/users" element={<Users />} />
              <Route path="/download_data" element={<Download_data />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
