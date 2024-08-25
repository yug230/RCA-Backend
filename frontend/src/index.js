import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter> {/* Add BrowserRouter here */}
        <ChatProvider>
          <App />
        </ChatProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
