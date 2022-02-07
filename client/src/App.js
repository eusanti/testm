import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
var read = require('read-yaml');
var config = read.sync('data.yml');

function App() {
  return (
    <div className="App">
      <Routes>
        {routes({}).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
