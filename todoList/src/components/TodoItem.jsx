import { useState } from 'react';
import './TodoItem.css'

export function TodoItem({task , tasks , setTasks , doneTasks , setDoneTasks}) {
    const [ isEditting , setIsediiting ] = useState(false);
    const [ editText , setEditText ] = useState(task.title);
    const [ editTime , setEditTime ] = useState(task.time);
    const [ editDate , setEditDate ] = useState(task.date);
    function saveEdit() {
        const updateedTasks = tasks.map( t => t.id === task.id ? { ...t , title: editText , date: editDate , time: editTime } : t);
        setTasks(updateedTasks);
        setIsediiting(false);
    }
    
    function handleDone(){
        setTasks(tasks.filter(t => t.id !== task.id));

        setDoneTasks([...doneTasks, task])
    }
    function deletTask() {
        setTasks(tasks.filter(t => t.id !== task.id))
    }
    return (
            <li className='TodoItem'>
                <div className='into-li'>
                <input type="checkbox" onChange={handleDone} />
                {isEditting ? (
                    <div className='con-inputs-edit'>
                        <input type='text' value={editText} onChange={e => setEditText(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && saveEdit()} />
                        <input type='date' value={editDate} onChange={e => setEditDate(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && saveEdit()} />
                        <input type='time' value={editTime} onChange={e => setEditTime(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && saveEdit()} />
                    </div>
                ) : (  
                <>  
                    <label>{task.title}</label>
                    <label>{task.date} </label>
                    <label>{task.time} </label>
                </>
                )}
                </div>
                <div className='de-ed'>
                    <button onClick={deletTask}>Delete</button>
                    <button onClick={() => setIsediiting(!isEditting)}>
                        {isEditting ? 'Cancel' : 'Edit'}
                    </button>
                    {isEditting && <button onClick={saveEdit}>save</button>}
                </div>
            </li>
    );
}