import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
// import Admin from "./pages/Admin";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const getData = useSelector((state) => state);

  useEffect(() => {
    axios.get("/api/get-data").then((response) => {
      dispatch({ type: "ALL_VIDEO", data: response.data });
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:slug" component={Detail} />
          {/* <Route path="/admin" component={Admin} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
