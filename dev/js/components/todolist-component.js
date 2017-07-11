import React from 'react';

export default class TodolistComponent extends React.Component{


	render(){
		return (
				<ul>
					{
						
						this.props.todolist.map(function(object){
							return (
								<li key={object.id}>
									{object.description}
								</li>
								);
						}.bind(this))
					}
			
				</ul>
					
			);
	}
}