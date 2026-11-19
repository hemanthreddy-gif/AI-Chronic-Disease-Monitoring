import { useEffect, useState } from "react";
import { getHealthRecords } from "../api/healthRecordServices";

function HealthRecordsTable({ refresh }) {

    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadRecords = async () => {

        setLoading(true);
        setError("");

        try {

            const response = await getHealthRecords();

            setRecords(response);

        } catch (err) {

            setError(
                err?.response?.data?.detail ||
                "Unable to load health records."
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadRecords();

    }, [refresh]);

    if (loading) {

        return (

            <div className="card shadow-sm mt-4">

                <div className="card-body">

                    Loading health records...

                </div>

            </div>

        );

    }

    if (error) {

        return (

            <div className="alert alert-danger mt-4">

                {error}

            </div>

        );

    }

    return (

        <div className="card shadow-sm mt-4">

            <div className="card-header d-flex justify-content-between align-items-center">

                <h5 className="mb-0">

                    Health Records History

                </h5>

                <span className="badge bg-primary">

                    {records.length} Records

                </span>

            </div>

            <div className="card-body p-0">

                {records.length === 0 ? (

                    <div className="p-4 text-center text-muted">

                        No health records available.

                    </div>

                ) : (

                    <div className="table-responsive">

                        <table className="table table-striped table-hover mb-0">

                            <thead className="table-light">

                                <tr>

                                    <th>Date</th>

                                    <th>BP</th>

                                    <th>Glucose</th>

                                    <th>Weight</th>

                                    <th>Risk</th>

                                    <th>Medication</th>

                                    <th>Exercise</th>

                                    <th>Sleep</th>

                                </tr>

                            </thead>

                            <tbody>

                                {records.map((record) => (

                                    <tr key={record.id}>

                                        <td>

                                            {new Date(
                                                record.recorded_at
                                            ).toLocaleDateString()}

                                        </td>

                                        <td>

                                            {record.systolic_bp}/
                                            {record.diastolic_bp}

                                        </td>

                                        <td>

                                            {record.blood_glucose}

                                        </td>

                                        <td>

                                            {record.weight} kg

                                        </td>

                                        <td>

                                            <span
                                                className={`badge bg-${
                                                    record.risk_level === "High"
                                                        ? "danger"
                                                        : record.risk_level === "Medium"
                                                        ? "warning"
                                                        : "success"
                                                }`}
                                            >

                                                {record.risk_level}

                                            </span>

                                        </td>

                                        <td>

                                            {record.medication_taken
                                                ? "✅"
                                                : "❌"}

                                        </td>

                                        <td>

                                            {record.exercise_minutes} min

                                        </td>

                                        <td>

                                            {record.sleep_hours} hrs

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>

    );

}

export default HealthRecordsTable;