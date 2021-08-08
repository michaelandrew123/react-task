import logo from './logo.svg';
import { useState } from "react"
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
const name = "Michael Andrew";
const x = true

function App() {

  
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])

//Add Tasks
const addTask = (task) => {
  console.log(task)
}

//Delete Task
const deleteTask  = (id) =>{ 
   setTasks(tasks.filter((task)=>task.id !== id))
} 

//Toggle Reminder
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">

      <h2>Author:  {name} </h2>
      {/* <label>{x ? 'Yes' : 'No'}</label> */}
      <div className="first-title">
        <Header title="Hello"  />
        <AddTask />
        {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : "No Tasks Available"}
      </div>
    </div>
  );
}

export default App;
