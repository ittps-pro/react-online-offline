import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";


let store = sessionStorage.dataStore


  store = 1234
  
  
  //let s = await Navigator.isOnline()

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <App />

    
        {store}
  </StrictMode>
);