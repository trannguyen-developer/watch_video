import React from "react";
import { Container, Grid } from "@material-ui/core";

// import classes from "./styles.module.scss";
import Watch from "components/Watch";
import ShowProduct from "components/ShowProduct";
import TopProduct from "components/TopProduct";
import KeyPopular from "components/KeyPopular";

const Detail = () => {
  return (
    <main>
      <Container className="container" fixed maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Watch />
            <ShowProduct />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopProduct />
            <KeyPopular style={{ marginTop: "20px" }} />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Detail;
