function DashboardCard({
    title,
    value,
    unit,
    color = "primary",
}) {
    return (
        <div className="col-md-3 mb-4">
            <div className={`card border-${color} shadow-sm h-100`}>
                <div className="card-body">

                    <h6 className="text-muted">
                        {title}
                    </h6>

                    <h2 className={`text-${color} mt-3`}>
                        {value}
                    </h2>

                    <small className="text-secondary">
                        {unit}
                    </small>

                </div>
            </div>
        </div>
    );
}

export default DashboardCard;