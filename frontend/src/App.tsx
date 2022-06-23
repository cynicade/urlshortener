import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Main } from "./Main";

function App() {
  return (
    <Routes>
      <Route path="/urls" element={<Main />} />
      <Route path="/urls/404" element={<NotFound />} />
    </Routes>
  );
}

export default App;
