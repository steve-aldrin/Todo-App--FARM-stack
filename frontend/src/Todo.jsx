import { useEffect, useState } from "react";
import './todo.css'
import axios from "axios";
import Task from "./Task";

const Todo = () => {
    const[title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [todolist,setTodolist]=useState('');

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/todo')
        .then(res=>{
            setTodolist(res.data)
        })
    },[])
   async function addtask(ev){
            ev.preventDefault();
           axios.post('http://127.0.0.1:8000/api/todo',{
               title:title,
               description:description
           })
        
      
    }
    console.log(todolist);
    return (
        <>

            <div className="Title">An Elegeant Todo App</div>
            <div className="wrapper">
                <div className="registercard">

                    <h1>Add your Task</h1>
                    <p>Make your Task Description crisp.</p>
                    <form action="" className="form" onSubmit={addtask}>
                        <input type="text" placeholder="Enter Task Title" value={title} onChange={ev => setTitle(ev.target.value)}></input>
                        <input type="text" placeholder="Task Description" value={description} onChange={ev => setDescription(ev.target.value)}></input>
                        <button className="buttonsign">Add Task</button>
                    </form>
                </div>

                <div className="registercard">

                    <h1>Your  Tasks</h1>
                    <p>
                    {todolist.length>0 && todolist.map(details=>{
                       return <Task {...details}/>
                    })}</p>
                 
                </div>
            </div>


</>
      );
}
 
export default Todo;    