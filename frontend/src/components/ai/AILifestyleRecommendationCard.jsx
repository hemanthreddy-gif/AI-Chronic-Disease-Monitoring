import { useEffect, useState } from "react";

import {
    getAILifestyleRecommendation
} from "../../api/dashboardServices";

function AILifestyleRecommendationCard() {

    const [recommendation, setRecommendation] = useState("");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadRecommendation = async () => {

        try {

            setLoading(true);
            setError("");

            const response =
                await getAILifestyleRecommendation();

            setRecommendation(

                response.recommendation ??

                response.ai_lifestyle_recommendation ??

                response.message ??

                "No recommendation available."

            );

        } catch (err) {

            console.error(err);

            setError(
                "Unable to load AI Lifestyle Recommendation."
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadRecommendation();

    }, []);

    return (

        <div className="card shadow-sm border-0 h-100">

            <div className="card-header bg-success text-white">

                <h5 className="mb-0">

                    AI Lifestyle Recommendation

                </h5>

            </div>

            <div className="card-body">

                {loading && (

                    <div className="text-center py-3">

                        <div
                            className="spinner-border text-success"
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
                            className="btn btn-outline-success btn-sm"
                            onClick={loadRecommendation}
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
                        {recommendation}
                    </p>

                )}

            </div>

        </div>

    );

}

export default AILifestyleRecommendationCard;