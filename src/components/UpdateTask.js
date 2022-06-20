const UpdateTask = ({updateTask, switchTask, changeTask, clearTask })=> {
  return (
      <>
      <div className="row">
    <div className="col">
    <input 
    value={ updateTask && updateTask.taskText }
    onChange={ (e) => switchTask(e)}
    className="form-control form-control-lg" />
    </div>
    <div className="col-auto">
    <button 
    onClick={changeTask}
className="btn btn-lg btn-success"> Update Task</button>
        <button 
 onClick={clearTask}
className="btn btn-lg btn-success"> Cancel</button>
    </div>
    </div>
    <br />
  </>
    )
}

export default UpdateTask;
