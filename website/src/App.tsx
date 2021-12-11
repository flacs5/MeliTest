import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Puff } from "react-loading-icons";
import Topbar from "./components/Topbar";
import Router from "./Router";

const spinner = (
  <div className="panel__refresh">
    <Puff stroke="#009ef7" strokeOpacity={1} />
  </div>
);

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={spinner}>
      <Topbar />
      <Router />
    </Suspense>
  </BrowserRouter>
);

export default App;
