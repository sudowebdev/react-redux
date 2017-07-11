import React from 'react';

import TodolistComponent from '../components/todolist-component';
import { connect } from 'react-redux';

class Todolist extends React.Component{

	render(){
		return (<TodolistComponent />);
	}

}


function mapStateToProps(state){

	return {
		todolist: state.todolist
	}
}


export default connect(mapStateToProps)(TodolistComponent);
