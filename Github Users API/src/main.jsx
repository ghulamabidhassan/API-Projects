import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const elem = document.getElementById("root");

const root = createRoot(elem);

root.render(<App />);
