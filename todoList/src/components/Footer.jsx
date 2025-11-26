import './Footer.css'
export function Footer({doneTasks , tasks}) {
    return (
        <div className="Footer">
            <h2>{tasks.length}/{doneTasks.length} tasks do</h2>
        </div>
    );
}