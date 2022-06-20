import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
imoprt { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import {nanoid} from 'nanoid';
import React, {useState, useEffect} from 'react';
function App() {
  
  const [taskList, setTaskList] = useState( [{taskId: nanoid(), taskText:'update the list with your tasks!', taskDone: false}]);
  const [addTask, setAddTask] = useState('');
  const [updateTask, setUpdateTask] = usetState('');
  
 const newTask = () => {
     if (taskList)
     {
       const newTask = {
         taskId: nanoid(),
         taskText: addTask,
         taskDone: false 
       };
       const newList = [...taskList, newTask];
       setTaskList(newList);
       setAddTask('');
     }
 };
   
 const removeTask = (taskId) => {
const newList = taskList.filter((task)=> task.taskId !== taskId);   
    setTaskList(newList);
 }
 
  const taskDone = (taskId) => {
     let newList = taskList.map( task => { 
       if( task.taskId === taskId) {
         return ({ ...task, taskDone: !task.taskDone })
       }
       return task;
     })
     setTaskList(newList);
 }
  const clearTask = () => {
     setUpdateTask('');
 }
  const switchTask = (e) => {
     let newTask = {
      taskId: updateTask.taskId,
      taskText: e.target.value,
      taskDone: updateTask.taskDone ? true : false
     }
     setUpdateTask(newTask);
 }
   const changeTask = (e) => {
     
 }
  //  Retrieve from Local Storage 
  useEffect(() => {
      const getTasks = JSON.parse(localStorage.getItem('listlast-data'));
    if (getTasks){
     setTaskList(getTasks);   
    }
  },[]);
  // Update to Local Storage 
  useEffect(() => {
      localStorage.setItem('listlast-data', JSON.stringify(taskList));
  }, [taskList]);
  
  return (
    <div className="container App">
    <br /><br />
    <h2> ListLast </h2>
    <br /><br />
  // Update Task
      <div className="row>
    <div className="col">
    <input 
    value={ updateTask && updateTask.taskText }
    onChange={ (e) => switchTask(e)}
    className="form-control form-control-lg" />
    /div>
    <div className="col-auto">
    <button 
    onClick={changeTask}
className="btn btn-lg btn-success"> Update Task</button>
        <button className="btn btn-lg btn-success"> Cancel</button>
    </div>
    </div>
    <br />
    
  // New Task
    <div className="row>
    <div className="col">
    <input value={addTask} onChange={ (e) => setAddTask(e.target.value)}
    
    className="form-control form-control-lg" />
    /div>
    <div className="col-auto">
    <button onClick={newTask} className="btn btn-lg btn-success"> New Task</button>
    </div>
    </div>
    <br />
  
    {taskList && taskList.length ? '' : 'Nothing on the To do list!"
    {taskList && taskList.map( (task, index) => {
    return(
      <React.Fragment key={task.taskId}>
      <div className="col taskBackground"> 
        <div className={task.taskDone ? 'isDone' : ''}>
          <span className="taskRank" >{index + 1} </span>
          <span className="taskText" >{task.taskTesk} </span>
          </div>
        <div className = "icons">
           <span title="Change Status"
          onClick={ (e) => taskDone(task.taskId) }
            >
          <FontAwesomeIcon icon={faCircleCheck} />
          </span>

{task.taskDone ? null : (
          <span title="Update"
          onClick={ () => setUpdateTask({
            taskId: task.taskId,
            taskText: task.taskText,
            taskDone: task.taskDone ? true : false
            }) } 
          >
          <FontAwesomeIcon icon={faPen} />
          </span>
)}
          <span title="Remove"
          onClick={() =>removeTask(task.taskId)}
          >
         <FontAwesomeIcon icon={faTrashCan} />
          </span>
         </div>
        </div>
      
    }
    </div>
  );
}

export default App;
