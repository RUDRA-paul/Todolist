import React, {useState} from 'react'


export default function Addtodo(props) {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !des){
            alert("Plase fill all the fild");
        }
        else{
            props.addTodo(title,des);
            setTitle("");
            setDes("");
        }
        
        
    }

    return (
        


        <div className="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" value={title} id="title" onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter Title"/>
                </div>
                    <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" value={des} onChange={(e)=>{setDes(e.target.value)}} id="exampleInputPassword1" placeholder="Description"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
