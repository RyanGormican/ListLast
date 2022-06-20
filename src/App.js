import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
imoprt { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import {nanoid} from 'nanoid';
import React, {useState} from 'react';
function App() {
  
  const [taskList, settaskList] = useState( [{taskId: nanoid(), taskText:'update the list with your tasks!', taskDone: false}]);
  return (
    <div className="container App">
    <br /><br />
    <h2> ListLast </h2>
    <br /><br />
    </div>
  );
}

export default App;
