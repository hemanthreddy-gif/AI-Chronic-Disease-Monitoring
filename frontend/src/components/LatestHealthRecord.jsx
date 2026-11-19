import { useEffect, useState } from "react";
import { getLatestHealthRecord } from "../api/healthRecordServices";

function LatestHealthRecord({ refresh }) {

    const [record, setRecord] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadLatestRecord = async () => {

        setLoading(true);
        setError("");

        try {

            const response = await getLatestHealthRecord();

            setRecord(response);

        } catch (err) {

            if (err?.response?.status === 404) {

                setRecord(null);

            } else {

                setError("Unable to load latest health record.");

            }

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadLatestRecord();

    }, [refresh]);

    if (loading) {

        return (
            <div className="card shadow-sm">
                <div className="card-body">
                    Loading latest health record...
                </div>
            </div>
        );

    }

    if (error) {

        return (
            <div className="alert alert-danger">
                {error}
            </div>
        );

    }

    if (!record) {

        return (
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5>No Health Records Found</h5>
                    <p className="text-muted mb-0">
                        Submit your first health record using the form above.
                    </p>
                </div>
            </div>
        );

    }

    return (

        <div className="card shadow-sm">

            <div className="card-header">

                <h5 className="mb-0">
                    Latest Health Record
                </h5>

            </div>

            <div className="card-body">

                <div className="row">

                    <div className="col-md-6 mb-3">
                        <strong>Blood Pressure</strong>
                        <br />
                        {record.systolic_bp} / {record.diastolic_bp} mmHg
                    </div>

                    <div className="col-md-6 mb-3">
                        <strong>Blood Glucose</strong>
                        <br />
                        {record.blood_glucose} mg/dL
                    </div>

                    <div className="col-md-6 mb-3">
                        <strong>Weight</strong>
                        <br />
                        {record.weight} kg
                    </div>

                    <div className="col-md-6 mb-3">
                        <strong>Medication</strong>
                        <br />
                        {record.medication_taken ? "Taken" : "Not Taken"}
                    </div>

                    <div className="col-md-6 mb-3">
                        <strong>Exercise</strong>
                        <br />
                        {record.exercise_minutes} minutes
                    </div>

                    <div className="col-md-6 mb-3">
                        <strong>Sleep</strong>
                        <br />
                        {record.sleep_hours} hours
                    </div>

                    <div className="col-md-6 mb-3">
                        <strong>Water Intake</strong>
                        <br />
                        {record.water_intake_liters} L
                    </div>

                    <div className="col-md-6 mb-3">
                        <strong>Risk Level</strong>
                        <br />
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
                    </div>

                </div>

                {record.symptoms && (

                    <div className="mt-3">

                        <strong>Symptoms</strong>

                        <p className="mb-0">
                            {record.symptoms}
                        </p>

                    </div>

                )}

                {record.notes && (

                    <div className="mt-3">

                        <strong>Notes</strong>

                        <p className="mb-0">
                            {record.notes}
                        </p>

                    </div>

                )}

                <hr />

                <small className="text-muted">

                    Recorded At:
                    {" "}
                    {new Date(record.recorded_at).toLocaleString()}

                </small>

            </div>

        </div>

    );

}

export default LatestHealthRecord;