import React from "react";
import Main from "./component/MainComponent/MainComponent";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
    <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
