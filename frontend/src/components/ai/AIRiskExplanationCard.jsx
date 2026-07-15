import { useEffect, useState } from "react";

import {
    getAIRiskExplanation,
} from "../../api/dashboardServices";

function AIRiskExplanationCard() {

    const [explanation, setExplanation] = useState("");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadExplanation = async () => {

        try {

            setLoading(true);
            setError("");

            const response =
                await getAIRiskExplanation();

            setExplanation(

                response.explanation ??

                response.ai_risk_explanation ??

                response.message ??

                "No explanation available."

            );

        } catch (err) {

            console.error(err);

            setError(
                "Unable to load AI Risk Explanation."
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadExplanation();

    }, []);

    return (

        <div className="card shadow-sm border-0 h-100">

            <div className="card-header bg-danger text-white">

                <h5 className="mb-0">

                    AI Risk Explanation

                </h5>

            </div>

            <div className="card-body">

                {loading && (

                    <div className="text-center py-3">

                        <div
                            className="spinner-border text-danger"
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
                            className="btn btn-outline-danger btn-sm"
                            onClick={loadExplanation}
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
                        {explanation}
                    </p>

                )}

            </div>

        </div>

    );

}

export default AIRiskExplanationCard;