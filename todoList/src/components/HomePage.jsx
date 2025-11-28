import { Header } from './Header';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { Footer } from './Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import lightHamburger from "../assets/light.svg";
import darkHamburger from "../assets/dark.svg";
import filterLight from "../assets/filter-light.svg";
import filterDark from "../assets/filter-dark.svg";
import closeLight from "../assets/light-close.svg";
import closeDark from "../assets/dark-close.svg";
import './HomePage.css';


export function HomePage({toggleTheme , theme , doneTasks , setDoneTasks , setTasks , tasks , setLanguage , language}) {
    const [ isOpen , setIsOpen ] = useState(false);
    const [ selecteDate , setSelectedDate ] = useState("");
    const [ isFilterOpen , setIsFilterOpen] = useState(false);
    const texts = {
        en: {
          headerTitle: "Todo List",
          doneTasks: "Done Tasks",
          addTask: "Add Task",
          undo: "Undo",
          filterByDate: "Filter by date"
        },
        fa: {
          headerTitle: "لیست کارها",
          doneTasks: "تسک‌های انجام شده",
          addTask: "اضافه کردن تسک",
          undo: "بازگرداندن",
          filterByDate: "فیلتر بر اساس تاریخ"
        }
    };

    function addTask(title  , date , time) {

        const newTask = {
            id: Date.now() , 
            title ,
            date ,
            time ,
            createdAt: new Date().toLocaleDateString()

        };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className={theme}>
            <img onClick={() => setIsOpen(!isOpen)} className='hamburger' src={ theme === 'dark'? lightHamburger : darkHamburger} alt="" />
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                <div className='top-side'> 
                <h2>Todo List</h2>
                <img onClick={() => {setIsOpen(false)}} src={ theme === 'dark' ? closeLight : closeDark} alt="" className='close-button' />
                </div>
            )}
            <div className='wrap-items'>
                <Link to="/done-tasks" onClick={() => setIsOpen(false)} rel="stylesheet" className='menu-item'>done tasks</Link>
                <div className='language-change'>
                    <p>Persian</p>
                    <label className='switch'>
                        <input type="checkbox" 
                        onChange={() => 
                        setLanguage(prev => prev === 'en' ? 'fa' : 'en')} 
                        checked={language === 'fa'}/>
                        <span className='slider'></span>
                    </label>
                </div>
            </div>
            </div> 
            <div className='container'>
                <Header language={language} setlanguage={setLanguage} texts={texts} toggleTheme={toggleTheme} theme={theme}/>
                <TodoInput addTask={addTask}/>
                <div className='inf'>
                    <div className='title-task-item'>
                        <h3>Task</h3>
                        <h3>Date</h3>
                        <h3>Time</h3>
                    </div>
                    <div className='filter-con'>
                    <img src={ theme === 'dark'? filterLight : filterDark} alt="" className='filter-img' onClick={() => setIsFilterOpen(!isFilterOpen)}/>
                    {isFilterOpen ?
                        <div className='con-date-filter'>
                            <div className='top-fil'>
                                <p>filter by date:</p>
                                <img src="/src/assets/light-close.svg" alt="" className='close-filter' 
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                />
                            </div>
                            <div className='inp-cl'>
                                <input type="date" className='date-filter' value={selecteDate} onChange={(e) => setSelectedDate(e.target.value)}/>
                                <button onClick={() => {if (selecteDate && selecteDate.length > 0)  {setSelectedDate("")}}}>clear</button>
                            </div>
                        </div>
                        :   
                        null
                    }

                    </div>
                </div>
                <div className='con-input'>
                {tasks.filter(task => {
                    if (!selecteDate) return true;
                    return task.date === selecteDate;
                })
                .map(task => (
                <TodoItem 
                    key={task.id} 
                    task={task} 
                    tasks={tasks} 
                    setTasks={setTasks} 
                    doneTasks={doneTasks} 
                    setDoneTasks={setDoneTasks}
                />
                ))}
                
                </div>
                <Footer doneTasks={doneTasks} tasks={tasks}/>
            </div>
        </div>
    );
    
}
