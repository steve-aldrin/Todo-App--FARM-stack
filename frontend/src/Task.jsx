import "./task.css"
const Task = ({title,description}) => {
   
    return (  

        <div className="container">
            <div className="secondcontainer">
            <h2> {title}</h2>
            <div>{description} </div>
            </div>
               
               <button className="buttonsign">Done</button>
        </div>
    );
}
 
export default Task;