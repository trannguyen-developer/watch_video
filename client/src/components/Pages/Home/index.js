import React, { Component } from 'react';
import {Container, Grid, Box } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import classes from './styles.module.scss'
import Header from '../../Layout/Header'
import SliderBar from '../../Layout/SliderBar'
import Watch from '../../Layout/Watch'
import ShowProduct from '../../Layout/ShowProduct'
import TopProduct from '../../Layout/TopProduct'
import KeyPopular from '../../Layout/KeyPopular'
import Footer from '../../Layout/Footer'

class Home extends Component {
  state = {
    message: ''
  };

  render() {
    return(
    <Router>
		<div className={classes.home}>
			<header >
			<Container maxWidth='lg' fixed>
				<Header />
			</Container>
			</header>
			<main>
			<Container fixed>
					<Route exact path='/' component={SliderBar} />
					<Grid container spacing={3}>
						<Grid item xs={12} sm={8}>
							<Route path='/detail' component={Watch} />
							<ShowProduct/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TopProduct />
							<KeyPopular style={{marginTop: '20px'}} />
						</Grid>
					</Grid>
			</Container>
			</main>
			<footer style={{marginTop: '30px'}}>
				<Container fixed>
					<Footer />
				</Container>
			</footer>
      	</div>
	  </Router>
    )
  };
};

export default Home;