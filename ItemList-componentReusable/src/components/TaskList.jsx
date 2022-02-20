import { tasks } from './../constants/sites';

function TaskList() {
  return (
    <div className='list'>
      <h4>Existing Tasks List</h4>

      {
        tasks.map((task) => { 
          return (
            <div
              className={`single-site ${task.isSelected === true ? 'checked' : ''}`}
            >
              {task.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskList;
