//App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// src/pages/index.js를 통해서 한번에 import 할 수 있도록 함
import Chap4 from "./pages/Chap4";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pages/Chap4" component={Chap4} />
        {/* <Route exact path="/login" component={Login} /> */}
        {/* //전달할 props가 있는 경우 아래와 같이
        <Route exact path="/info" render={() => <Info userInfo={userInfo} />} /> */}
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
