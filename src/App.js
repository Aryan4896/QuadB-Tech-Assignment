import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ShowListScreen from "./ShowListScreen";
import ShowSummaryScreen from "./ShowSummaryScreen";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ShowListScreen />} />
        <Route path="/show/:id" element={<ShowSummaryScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
