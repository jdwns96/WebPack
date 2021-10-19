import ReactDOM from "react-dom";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "@assets/css/index.css";
import "@assets/scss/index.scss";

// import Home from "./components/Home";
import Home from "@components/Home";
import page1 from "@components/Page1";
import page2 from "@components/Page2";

ReactDOM.render(
  <BrowserRouter>
    <Link to="/"> HOME</Link>
    <Link to="/page1"> 1페이지</Link>
    <Link to="/page2"> 2페이지</Link>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/page1" component={page1} />
      <Route exact path="/page2" component={page2} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root"),
);
