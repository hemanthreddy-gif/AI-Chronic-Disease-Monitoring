import { useEffect, useState } from "react";

import { getAIHealthSummary } from "../../api/dashboardServices";

function AIHealthSummaryCard() {

    const [summary, setSummary] = useState("");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadSummary = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await getAIHealthSummary();

            setSummary(
                response.summary ??
                response.ai_health_summary ??
                response.message ??
                "No summary available."
            );

        } catch (err) {

            console.error(err);

            setError("Unable to load AI Health Summary.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadSummary();

    }, []);

    return (

        <div className="card shadow-sm border-0 h-100">

            <div className="card-header bg-primary text-white">

                <h5 className="mb-0">
                    AI Health Summary
                </h5>

            </div>

            <div className="card-body">

                {loading && (

                    <div className="text-center py-3">

                        <div
                            className="spinner-border text-primary"
                            role="status"
                        />

                    </div>

                )}

                {!loading && error && (

                    <>

                        <div className="alert alert-danger">

                            {error}

                        </div>

                        <button
                            className="btn btn-outline-primary btn-sm"
                            onClick={loadSummary}
                        >
                            Retry
                        </button>

                    </>

                )}

                {!loading && !error && (

                    <p
                        className="mb-0"
                        style={{ whiteSpace: "pre-line" }}
                    >
                        {summary}
                    </p>

                )}

            </div>

        </div>

    );

}

export default AIHealthSummaryCard;