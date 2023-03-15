import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {nanoid} from 'nanoid';
import AddTask from './components/AddTask.js';
import UpdateTask from './components/UpdateTask.js';
import IconButtons from './components/IconButtons.js';
import React, {useState, useEffect} from 'react';
function App() {
  
  const [taskList, setTaskList] = useState( [{taskId: nanoid(), taskText:'Update the list with your tasks!', taskDone: false}]);
  const [addTask, setAddTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');
  
 const newTask = () => {
     if (addTask)
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
   const changeTask = () => {
     let filterList = [...taskList].filter( task => task.taskId !== updateTask.taskId);
     let newList = [...filterList, updateTask];
   setTaskList(newList);
   setUpdateTask('');
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
    <span>
        <a href="https://www.linkedin.com/in/ryangormican/">
		    <Icon icon="mdi:linkedin" color="#0e76a8" width="40" />
	    </a>
	    <a href="https://github.com/RyanGormican/ListLast">
		    <Icon icon="mdi:github" color="#e8eaea" width="40" />
	    </a>
        <a href="https://ryangormicanportfoliohub.vercel.app/">
		    <Icon icon="teenyicons:computer-outline" color="#199c35" width="40" />
	    </a>
    </span>
    <br /><br />
    {updateTask && updateTask ? (
 <UpdateTask
    updateTask = {updateTask}
    switchTask = {switchTask}
    changeTask = {changeTask}
    clearTask = {clearTask}
    />
  ) : (
  <AddTask
    addTask={addTask}
  setAddTask={setAddTask}
newTask={newTask}
    />
  )}
    

  
    {taskList && taskList.length ? '' : 'Nothing on the To do list!'}
   <IconButtons
     taskList = {taskList}
     taskDone = {taskDone}
     setUpdateTask = {setUpdateTask}
     removeTask = {removeTask}
      
      />
    </div>
  );
}

export default App;
