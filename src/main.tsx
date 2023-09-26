import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import TextTypingAnimation from "./pages/typingAnimation/index";

// import TextTypingAnimation  from './pages/typingAnimation/index.tsx'
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TextTypingAnimation/> */}
    <TextTypingAnimation/>
  </React.StrictMode>
);
