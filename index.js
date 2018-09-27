import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import { FetchFailure, FetchRequest, FetchSuccess } from './actions/Fetch';
import TwitchApp from './reducers/TwitchApp';
import Streams from './components/containers/Streams';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Streams />
			</div>
		);
	};
}

const store1 = createStore(
	TwitchApp,
	composeWithDevTools(
		applyMiddleware(thunk, logger)
		),
);

// store1.dispatch(FetchRequest());
// store1.dispatch(FetchSuccess([ 'a', 'b', 'c' ]));
// store1.dispatch(FetchFailure('just an error'));

// const unsub = store1.subscribe(() => {
// 	console.log("store status: \n", store1.getState());
// });

const jsx = (
	<Provider store={store1}>
		<App />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
