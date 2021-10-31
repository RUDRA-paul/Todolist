import React from 'react';
import {TodoItem} from './TodoItem';



export const Todos = (props) =>{
    return(
        <div className="container">
            <h3 className=" my-3">Todos List</h3>
            {props.todos.length===0? <h4 className="warning text-center">No todos to show</h4> :
             props.todos.map(function (todo) {
                  return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>;
                  
                })}
        </div>
    )
}