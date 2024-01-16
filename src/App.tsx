import React from "react";
import MainBoard from "./components/mainBoard/MainBoard";

import "./App.css";

import Menu from "./components/menu/Menu";

export default function App() {
  return (
    <div className="app">
      <MainBoard />
      <Menu />
    </div>
  );
}
