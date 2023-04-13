import React,{useState} from 'react'
import Todolist from './Todolist';
// import Todo from './Todo';


const App = () => {
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);
  const changeHandler=(e)=>{
    setTask(e.target.value);
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask("")
  }
 
  const deleteHandler=(indexValue)=>{
    const newTodos= todos.filter((todo,index)=> index !== indexValue);
    setTodos(newTodos);
  }

  const editHandler=(indexValue)=>{
    
    setTask(todos[indexValue]);
    deleteHandler(indexValue);
  }

  return (
    <div>
      <center>
        <div style={{marginTop:"200px"}}  className='card'>
          <div className='card-body'>
            <h3 className='card-title' style={{color:"skyblue"}}>Todo Management</h3> 
            <form onSubmit={submitHandler}>
            <input type='text' name='task' style={{height:"40px",width:"250px",borderColor:"skyblue",borderRadius:"20px"}} value={task} onChange={changeHandler}/>&nbsp;&nbsp;
            <input type='submit' value="Add" style={{color:"white",backgroundColor:"skyblue",borderColor:"skyblue",borderRadius:"10px"}}/>
            </form>
            <Todolist todolist={todos} deleteHandler={deleteHandler} editHandler={editHandler}/>
            {/* <Todo/> */}
          </div>

        </div>
      </center>
    </div>
  )
}

export default App