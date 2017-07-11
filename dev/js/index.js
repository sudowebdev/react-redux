import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import { createStore } from 'redux';
import AllReducers from './reducers';
import { Provider } from 'react-redux';
import App from './components/app';

const store = createStore(AllReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>	, document.getElementById('root'));
