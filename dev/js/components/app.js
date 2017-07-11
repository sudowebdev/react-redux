import React from 'react';

import Todolist from '../containers/todolist.js';

require('../../scss/style.scss');

export default class App extends React.Component{


	render(){

		return (
			<div>
				<h2>ToDo List</h2>
					<Todolist />
			</div>	
			);
	}
}