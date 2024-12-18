import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "rgba(0,0,0,0.85)",
      paper: "#505050",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/projects" element={<Project />}></Route>
          {/* <Route path="/users">
              <Users />
            </Route> */}
          <Route path="/" element={<App />}></Route>
          <Route path="/home" element={<App />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
