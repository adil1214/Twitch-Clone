import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

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

// TODO: move store to its own file later
// FIXME: the store and actions dispatched are exposed via redux-devtools and redux-logger!
const store1 = createStore(
	TwitchApp,
	composeWithDevTools(
		applyMiddleware(thunk, logger)
		),
);

const jsx = (
	<Provider store={store1}>
		<App />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
