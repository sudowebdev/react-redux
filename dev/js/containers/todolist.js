import React from 'react';

import TodolistComponent from '../components/todolist-component';
import { connect } from 'react-redux';
import { selectTodo } from '../actions';
import { bindActionCreators } from 'redux';


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

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectTodo: selectTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodolistComponent);
