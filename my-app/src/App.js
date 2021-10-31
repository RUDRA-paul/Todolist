import React from "react";
import Header from "./Components/Header";
import Addtodo from "./Components/Addtodo";
import Footer from "./Components/Footer";
import {Todos} from "./Components/Todos";

import { useState,useEffect } from 'react';



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);
  const onDelete= (todo)=>{
    settodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  };
  const addTodo=(title,des)=>{
    console.log("add Todd", title, des);
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    
    const myTodo={
      sno:sno,
      title:title,
      des:des,

    }
    settodos([...todos,myTodo]);
    console.log(myTodo);
    
  }
  
  return (
    <div className="App">
      <Header/>
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
