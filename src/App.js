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
   useEffect(() => {
      const getTasks = JSON.parse(localStorage.getItem('listlast-data'));
    if (getTasks){
     setTaskList(getTasks);   
    }
  },[]);
   useEffect(() => {
      localStorage.setItem('listlast-data', JSON.stringify(taskList));
  }, [taskList]);
  
  return (
    <div className="container App">
    <br /><br />
    <h2> ListLast </h2>
    <br /><br />
    </div>
  );
}

export default App;
