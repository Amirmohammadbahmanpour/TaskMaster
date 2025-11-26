import { useState } from 'react';
import './TodoInput.css'
export function TodoInput({addTask}) {
    const [ text , setText ] = useState("");
    const [ date , setDate ] = useState("");
    const [ time , setTime ] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (!text && !date && !time ) return;
        addTask(text,date,time);
        setText("");
        setDate("");
        setTime("");

    }
    return (
        <div className="TodoInput">
            <form onSubmit={handleSubmit}>
            <input className='input-text' type="text" value={text} 
                    onChange={e => setText(e.target.value)} placeholder='Add a new task'/>
                <div className='wrapper-input'>
                    <input className='input-t' type="date" onChange={e => setDate(e.target.value)} value={date}/>
                    <input className='input-t' type="time" onChange={e => setTime(e.target.value)} value={time}/>
                    <button type="submit" className='add-button'>Add</button>
                </div>
            </form>
        </div>
    );
}