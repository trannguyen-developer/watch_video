import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import classes from "./styles.module.scss";
import Header from "../../Layout/Header";
import SliderBar from "../../Layout/SliderBar";
import Watch from "../../Layout/Watch";
import ShowProduct from "../../Layout/ShowProduct";
import TopProduct from "../../Layout/TopProduct";
import KeyPopular from "../../Layout/KeyPopular";
import Footer from "../../Layout/Footer";

class Home extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <div className={classes.home}>
        <Header />
        <main>
          <Container className="container" fixed maxWidth="lg">
            <SliderBar />
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <ShowProduct />
              </Grid>
              <Grid item xs={12} md={4}>
                <TopProduct />
                <KeyPopular style={{ marginTop: "20px" }} />
              </Grid>
            </Grid>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
