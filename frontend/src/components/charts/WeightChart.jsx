import { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";

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

import { getDashboardTrends } from "../../api/dashboardServices";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title
);

function WeightChart() {

    const [chartData, setChartData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const loadChart = async () => {

            try {

                const trends = await getDashboardTrends();

                setChartData({

                    labels: trends.labels.map((date) =>
                        new Date(date).toLocaleDateString()
                    ),

                    datasets: [

                        {

                            label: "Weight (kg)",

                            data: trends.weight,

                            borderWidth: 2,

                            tension: 0.3,

                            fill: false,

                        },

                    ],

                });

            } catch (err) {

                setError(

                    err?.response?.data?.detail ||

                    "Unable to load weight chart."

                );

            } finally {

                setLoading(false);

            }

        };

        loadChart();

    }, []);

    if (loading) {

        return (

            <div className="card shadow-sm mt-4">

                <div className="card-body">

                    Loading Weight Chart...

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

            <div className="card-header">

                <h5 className="mb-0">

                    Weight Trend

                </h5>

            </div>

            <div
                className="card-body"
                style={{
                    height: "350px",
                }}
            >

                <Line
                    data={chartData}
                    options={{

                        responsive: true,

                        maintainAspectRatio: false,

                        plugins: {

                            legend: {

                                display: true,

                                position: "top",

                            },

                            title: {

                                display: false,

                            },

                        },

                        interaction: {

                            intersect: false,

                            mode: "index",

                        },

                        scales: {

                            y: {

                                beginAtZero: false,

                                title: {

                                    display: true,

                                    text: "Weight (kg)",

                                },

                            },

                        },

                    }}
                />

            </div>

        </div>

    );

}

export default WeightChart;