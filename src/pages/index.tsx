import React from "react";
import { GlobalStyle } from "../styles/global";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from "./Register";
import Error from "./Error";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Page() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/auth/register" element={<Register />} />
          {/* Error */}
          <Route path="/error" element={<Error />} />
          {/* Redirect to the error page for any other paths */}
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}
