// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import LoginPage from './pages/LoginPage'
// import './App.css'

// function App() {
  

//   return (
//     <>
//       <LoginPage/>
//     </>
//   )
// }

// export default App

// import { RouterProvider } from "react-router-dom";
// import router from "./routers/router";

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

// src/App.jsx

// App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import { ChatProvider } from "./context/chatContext";
import ChatWindow from "./components/ChatComponent/ChatWindow"; // Import the ChatWindow component

function App() {
  return (
    <ChatProvider> {/* Wrap your app with the ChatProvider */}
      <RouterProvider router={router} />
    </ChatProvider>
  );
}

export default App;

