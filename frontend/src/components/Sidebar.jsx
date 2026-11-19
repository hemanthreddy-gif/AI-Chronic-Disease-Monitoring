function Sidebar() {
    return (
        <aside className="dashboard-sidebar">
            <div className="brand-title"><span>+</span> ChronicCareAI</div>
            <div className="nav flex-column">
                <a href="#dashboard" className="nav-link active">Overview</a>
                <a href="#health-entry" className="nav-link">Add health record</a>
                <a href="#health-trends" className="nav-link">Health trends</a>
                <a href="#ai-insights" className="nav-link">AI insights</a>
                <a href="#records" className="nav-link">Record history</a>
            </div>
        </aside>
    );
}

export default Sidebar;