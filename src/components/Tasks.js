import Task from "./Task"
const Tasks = ({tasks, onDelete, onToggle}) => {

    return (

        //setTasks([...Tasks, {}])
        <> 
            {
                tasks.map((task)=>(
                    <Task 
                        key={task.id} 
                        task={task} 
                        onDelete={onDelete} 
                        onToggle={onToggle}
                    />
                ))
            }
        </>
    )
}

export default Tasks
