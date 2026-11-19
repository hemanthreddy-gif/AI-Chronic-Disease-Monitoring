import { useState } from "react";
import { createHealthRecord } from "../api/healthRecordServices";

function HealthEntryForm({ onRecordCreated }) {

    const initialForm = {
        systolic_bp: "",
        diastolic_bp: "",
        blood_glucose: "",
        weight: "",
        medication_taken: false,
        exercise_minutes: 0,
        sleep_hours: 0,
        water_intake_liters: 0,
        symptoms: "",
        notes: "",
    };

    const [formData, setFormData] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");

        try {

            const payload = {

                systolic_bp: Number(formData.systolic_bp),
                diastolic_bp: Number(formData.diastolic_bp),
                blood_glucose: Number(formData.blood_glucose),
                weight: Number(formData.weight),

                medication_taken: formData.medication_taken,

                exercise_minutes: Number(formData.exercise_minutes),

                sleep_hours: Number(formData.sleep_hours),

                water_intake_liters: Number(formData.water_intake_liters),

                symptoms: formData.symptoms,

                notes: formData.notes,

            };

            const createdRecord = await createHealthRecord(payload);

            setSuccess("Health record saved successfully.");

            setFormData(initialForm);

            if (onRecordCreated) {
                onRecordCreated(createdRecord);
            }

        } catch (err) {

            setError(

                err?.response?.data?.detail ||

                "Unable to save health record."

            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-header">

                <h5 className="mb-0">

                    Daily Health Entry

                </h5>

            </div>

            <div className="card-body">

                {success &&

                    <div className="alert alert-success">

                        {success}

                    </div>

                }

                {error &&

                    <div className="alert alert-danger">

                        {error}

                    </div>

                }

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <label className="form-label">

                                Systolic BP

                            </label>

                            <input
                                type="number"
                                className="form-control"
                                name="systolic_bp"
                                value={formData.systolic_bp}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">

                                Diastolic BP

                            </label>

                            <input
                                type="number"
                                className="form-control"
                                name="diastolic_bp"
                                value={formData.diastolic_bp}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <label className="form-label">

                                Blood Glucose

                            </label>

                            <input
                                type="number"
                                step="0.1"
                                className="form-control"
                                name="blood_glucose"
                                value={formData.blood_glucose}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">

                                Weight (kg)

                            </label>

                            <input
                                type="number"
                                step="0.1"
                                className="form-control"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-4 mb-3">

                            <label className="form-label">

                                Exercise (minutes)

                            </label>

                            <input
                                type="number"
                                className="form-control"
                                name="exercise_minutes"
                                value={formData.exercise_minutes}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">

                                Sleep (hours)

                            </label>

                            <input
                                type="number"
                                step="0.5"
                                className="form-control"
                                name="sleep_hours"
                                value={formData.sleep_hours}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">

                                Water Intake (L)

                            </label>

                            <input
                                type="number"
                                step="0.1"
                                className="form-control"
                                name="water_intake_liters"
                                value={formData.water_intake_liters}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    <div className="mb-3">

                        <label className="form-label">

                            Symptoms

                        </label>

                        <textarea
                            className="form-control"
                            rows="2"
                            name="symptoms"
                            value={formData.symptoms}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">

                            Notes

                        </label>

                        <textarea
                            className="form-control"
                            rows="3"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-check mb-4">

                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="medication_taken"
                            name="medication_taken"
                            checked={formData.medication_taken}
                            onChange={handleChange}
                        />

                        <label
                            className="form-check-label"
                            htmlFor="medication_taken"
                        >
                            Medication Taken Today
                        </label>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >

                        {loading
                            ? "Saving..."
                            : "Save Health Record"}

                    </button>

                </form>

            </div>

        </div>

    );

}

export default HealthEntryForm;