import './Header.css'
export function Header({texts , toggleTheme , theme , language}) {
    return (
        <div className="Header">
            <h1 className='h1'>{texts[language].headerTitle}</h1>
            <button onClick={toggleTheme} className='mode'>{theme === "dark" ? "Light mode" : "Dark mode"}</button>
        </div>
    );
}