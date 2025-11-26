import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage.jsx'
import { useState } from 'react';
import { DoneTasksPage } from './components/DoneTasksPage.jsx';


function App() {
  const [ theme , setTheme ] = useState("dark");
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [ language , setLanguage ] = useState('en');

  
  function toggleTheme() {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  }

  return(
  <BrowserRouter>
    <Routes>
        <Route index element={ <HomePage tasks={tasks} setTasks={setTasks} doneTasks={doneTasks} setDoneTasks={setDoneTasks} toggleTheme={toggleTheme} theme={theme} language={language} setLanguage={setLanguage}/>} />
        <Route path='/done-tasks' element={<DoneTasksPage doneTasks={doneTasks} setDoneTasks={setDoneTasks} setTasks={setTasks} toggleTheme={toggleTheme} theme={theme} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App
