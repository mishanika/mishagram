import React from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import Main from "./components/main/Main";
import Explore from "./components/explore/Explore";
import Reels from "./components/reels/Reels";
import Direct from "./components/direct/Direct";
import Profile from "./components/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Main />} />
            <Route path="explore" element={<Explore />} />
            <Route path="reels" element={<Reels />} />
            <Route path="direct" element={<Direct />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
