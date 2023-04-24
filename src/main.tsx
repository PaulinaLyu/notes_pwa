import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./provider/noteProvider";
import { AuthProvider } from "./provider/authProvider";
import ErrorBoundary from "./provider/ErrorBoundary";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <AuthProvider>
      <NoteProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </NoteProvider>
    </AuthProvider>
  </BrowserRouter>
);
