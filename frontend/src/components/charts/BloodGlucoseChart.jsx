import { useEffect, useState } from "react";

import {
    Line
} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";

import {
    getDashboardTrends,
} from "../../api/dashboardServices";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title
);

function BloodGlucoseChart() {

    const [chartData, setChartData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const loadChart = async () => {

            try {

                const trends =
                    await getDashboardTrends();

                setChartData({

                    labels: trends.labels.map((date) =>
                        new Date(date).toLocaleDateString()
                    ),

                    datasets: [

                        {

                            label: "Blood Glucose",

                            data: trends.blood_glucose,

                            borderWidth: 2,

                            tension: 0.3,

                        },

                    ],

                });

            } catch (err) {

                setError(
                    err?.response?.data?.detail ||
                    "Unable to load chart."
                );

            } finally {

                setLoading(false);

            }

        };

        loadChart();

    }, []);

    if (loading) {

        return (
            <div className="card shadow-sm">
                <div className="card-body">
                    Loading Blood Glucose Chart...
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

    return (

        <div className="card shadow-sm mt-4">

            <div className="card-header">

                <h5 className="mb-0">

                    Blood Glucose Trend

                </h5>

            </div>

            <div className="card-body">

                <Line

                    data={chartData}

                    options={{

                        responsive: true,

                        maintainAspectRatio: false,

                        plugins: {

                            legend: {

                                display: true,

                            },

                        },

                    }}

                    height={300}

                />

            </div>

        </div>

    );

}

export default BloodGlucoseChart;