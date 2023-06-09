import { useEffect, useState } from "react";
import './todo.css'
import axios from "axios";

const Todo = () => {
    const[username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [todolist,setTodolist]=useState('');

    useEffect(()=>{
        axios.get('https://localhost:8000/api/todo')
        .then(res=>{
            setTodolist(req.data)
        })
    })
   async function addtask(ev){
            ev.preventDefault();
           
        
      
    }
    return (
        <>

            <div className="Title">An Elegeant Todo App</div>
            <div className="wrapper">
                <div className="registercard">

                    <h1>Add your Task</h1>
                    <p>Make your Task Description crisp.</p>
                    <form action="" className="form" onSubmit={register}>
                        <input type="text" placeholder="Enter Task Title" value={username} onChange={ev => setUsername(ev.target.value)}></input>
                        <input type="text" placeholder="Task Description" value={password} onChange={ev => setPassword(ev.target.value)}></input>
                        <button className="buttonsign">Add Task</button>
                    </form>
                </div>

                <div className="registercard">

                    <h1>Your  Tasks</h1>
                 
                </div>
            </div>



</>
      );
}
 
export default Todo;    