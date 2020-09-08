import React from "react";
import logo from "./logo.svg";
import "./App.css";
import QRCode from "qrcode.react";

function App() {
  return (
    <div className="App">
      <QRCode value="http://facebook.github.io/react/" />
    </div>
  );
}

export default App;
