const AddTask = ({addTask, setAddTask,  newTask })=> {
  return (
      <>
    <div className="row">
    <div className="col">
    <input value={addTask} onChange={ (e) => setAddTask(e.target.value)}
    
    className="form-control form-control-lg" />
    </div>
    <div className="col-auto">
    <button onClick={newTask} className="btn btn-lg btn-success"> New Task</button>
    </div>
    </div>
    <br />    
  </>
    )
}

export default AddTask;
