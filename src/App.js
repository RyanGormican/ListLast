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
     
 }
   
 const removeTask = (taskId) => {
     
 }
 
  const taskDone = (taskId) => {
     
 }
  const taskIncomplete = () => {
     
 }
  const switchTask = (e) => {
     
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
    
    {taskList && taskList.length ? '' : 'Nothing on the To do list!"
    {taskList && taskList.map( (task, index) => {
    return(
      <React.Fragment key={task.taskId}>
      <div className="col taskBackground"> 
        <div className={task.taskDone ? 'isDone' : ''}>
          <span className="taskText" {index + 1}</span>
          <span className="taskText" {task.taskTesk} </span>
          </div>
        
        </div>
      
    }
    </div>
  );
}

export default App;
