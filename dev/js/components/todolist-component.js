import React from 'react';

export default class TodolistComponent extends React.Component{


	render(){
		return (
				<ul>
					{
						
						this.props.todolist.map(function(object){
							return (
								<li key={object.id} onClick={function(){ this.props.selectTodo(object) }.bind(this)}>
									{object.description}
								</li>
								);
						}.bind(this))
					}
			
				</ul>
					
			);
	}
}