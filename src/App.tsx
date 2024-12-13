import React from "react";

import "./App.css";

// components
import Menu from "./components/menu/Menu";
import Competition from "./components/competition/Competition";
import MainBoard from "./components/mainBoard/MainBoard";

export default function App() {
  return (
    <div className="app">
      <MainBoard />
      <Menu />
      <Competition />
    </div>
  );
}
