import React from 'react'

export const TodoItem =({todo, onDelete}) =>{
    return(
       <div>
           
           <h5 className="mt-3">{todo.title}</h5>
           <p>{todo.des}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Detele</button>
       </div> 
    )
}
