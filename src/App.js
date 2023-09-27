import { Routes, Route } from "react-router-dom";
import Login from "./scenes/login/login";
import Dashboard from "./scenes/dashboard/Index";
import Plug_Play from "./scenes/dashboard/PlugPlay";
import Drone from "./scenes/dashboard/Drone.jsx";
import Images from "./scenes/dashboard/Images.jsx";
import Settings from "./scenes/dashboard/Settings.jsx";
import Imager_Settings from "./scenes/dashboard/ImagerSettings.jsx";
import RealTime_Settings from "./scenes/dashboard/RealtimeSettings";
import Diagnostics from "./scenes/dashboard/Diagnostics";
import Users from "./scenes/dashboard/Users.jsx";
import Download_data from "./scenes/dashboard/DownloadData.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material"; //cssbaseline resets the css to default and theme provider provides the ability to pass into the themes into material ui
import { ColorModeContext, useMode } from "./theme"; //importing everything just coded from theme .js
import Mission_Planner from "./components/Missions/Mission Planning/Planner/Mission_Planner";
import Calendar from "./components/Missions/Mission Calendar/calendar";
import LiveStats from "./components/Missions/View Live/LivePage";

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
              <Route path="/date-mission" element={<Calendar />} />
              <Route path="/plan-mission" element={<Mission_Planner />} />
              <Route path="/live_stats" element={<LiveStats />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
