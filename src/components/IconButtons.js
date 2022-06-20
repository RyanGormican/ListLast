import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
const IconButtons = ({ taskList, taskDone, setUpdateTask, removeTask  }) => {
  return (
    <>
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
      </React.Fragment>
)
})
    }
    </>
    )
}

export default IconButtons;
