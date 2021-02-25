import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HomeScreen from '../components/HomeScreen';
import AddNewPost from '../components/ui/AddNewPost';
import Navbar from '../components/ui/Navbar';

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />

				<Switch>
					<Route exact path='/home' component={HomeScreen} />
					<Route exact path='/add' component={AddNewPost} />

					<Redirect to='/home' />
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
