import { Navigate, useNavigate } from 'react-router-dom'
import './DoneTasksPage.css'
export function DoneTasksPage({setDoneTasks , doneTasks , setTasks , theme})
{
    const navigate = useNavigate();

    function undoTask(taskId) {
        const taskToUndo = doneTasks.find((t) => t.id === taskId);
        if (!taskToUndo) return;

        setDoneTasks(doneTasks.filter((t) => t.id !== taskId));
        setTasks((prev) => [...prev , taskToUndo]);
    }
    return(
        
        <div className={theme}>
            <div className='DoneTasksPage'>
            <img src={ theme === 'dark' ? "/src/assets/light-arrow.svg" : "/src/assets/dark-arrow.svg"} className="arrow-img" onClick={() => navigate("/")}/>
            <div className="header">
                <h1>done tasks</h1>
            </div>
            <div className='title-items'>
                <h3>created At</h3>
                <h3>Task</h3>
                <h3>Date</h3>
                <h3>Time</h3>
            </div>
            <div className='doneTasks'>
                {doneTasks.map((doneTask) => (
                    <div className="doneTask">
                        <li key={doneTask.id} className="done-task-item"> 
                            <label>{doneTask.createdAt}</label>
                            <label>{doneTask.title}</label>
                            <label>{doneTask.date} </label>
                            <label>{doneTask.time} </label>
                            <p onClick={() => undoTask(doneTask.id)}>back to tasks</p>
                        </li>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}