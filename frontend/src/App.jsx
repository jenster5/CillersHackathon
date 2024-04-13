import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInCallbackPage from "./pages/SignInCallbackPage";
import PrivateRoute from "./pages/PrivateRoute";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
//import GameHomePage from "./pages/GameHomePage";
import GameComponent from "./kaboom/gameComponent";

const isDev = process.env.NODE_ENV === "development";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/callback" element={<SignInCallbackPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/game" element={<GameComponent />} />
        </Route>
      </Routes>
    </Router>
  );
};

if (isDev) {
  loadDevMessages();
  loadErrorMessages();
}

export default App;
