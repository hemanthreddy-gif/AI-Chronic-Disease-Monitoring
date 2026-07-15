import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import HealthEntryForm from "../components/HealthEntryForm";
import LatestHealthRecord from "../components/LatestHealthRecord";
import HealthRecordsTable from "../components/HealthRecordsTable";

import BloodPressureChart from "../components/charts/BloodPressureChart";
import BloodGlucoseChart from "../components/charts/BloodGlucoseChart";
import WeightChart from "../components/charts/WeightChart";

import AIHealthSummaryCard from "../components/ai/AIHealthSummaryCard";
import AILifestyleRecommendationCard from "../components/ai/AILifestyleRecommendationCard";
import AIRiskExplanationCard from "../components/ai/AIRiskExplanationCard";

import {
    getDashboardSummary,
    getDashboardStatistics,
    getDashboardTrends,
} from "../api/dashboardServices";

import "../styles/dashboard.css";

function Dashboard() {

    const [refreshLatest, setRefreshLatest] = useState(0);

    const [summary, setSummary] = useState({});
    const [statistics, setStatistics] = useState({});
    const [trends, setTrends] = useState([]);

    const loadDashboardData = async () => {

        try {

            const [
                summaryResponse,
                statisticsResponse,
                trendsResponse,
            ] = await Promise.all([
                getDashboardSummary(),
                getDashboardStatistics(),
                getDashboardTrends(),
            ]);

            setSummary(summaryResponse);
            setStatistics(statisticsResponse);
            setTrends(trendsResponse);

        } catch (error) {

            console.error("Failed to load dashboard", error);

        }

    };

    useEffect(() => {

        loadDashboardData();

    }, []);

    const handleRecordCreated = () => {

        setRefreshLatest(previous => previous + 1);

        loadDashboardData();

    };

    return (

        <DashboardLayout>

            <h2 className="mb-4 fw-bold">

                Patient Dashboard

            </h2>

            {/* Dashboard Cards */}

            <div className="row">

                <DashboardCard
                    title="Blood Pressure"
                    value={
                        summary.latest_blood_pressure ??
                        "--"
                    }
                    unit="mmHg"
                    color="success"
                />

                <DashboardCard
                    title="Blood Glucose"
                    value={
                        summary.latest_blood_glucose ??
                        "--"
                    }
                    unit="mg/dL"
                    color="primary"
                />

                <DashboardCard
                    title="Weight"
                    value={
                        summary.latest_weight ??
                        "--"
                    }
                    unit="kg"
                    color="warning"
                />

                <DashboardCard
                    title="Risk Level"
                    value={
                        summary.current_risk_level ??
                        "--"
                    }
                    unit="Current Status"
                    color="danger"
                />

            </div>

            {/* Entry Form + Latest Record */}

            <div className="row mt-4">

                <div className="col-lg-7">

                    <HealthEntryForm
                        onRecordCreated={handleRecordCreated}
                    />

                </div>

                <div className="col-lg-5">

                    <LatestHealthRecord
                        refresh={refreshLatest}
                    />

                </div>

            </div>

            {/* Charts */}

            <div className="row mt-4">

                <div className="col-lg-12">

                    <BloodPressureChart />

                </div>

            </div>

            <div className="row mt-4">

                <div className="col-lg-6">

                    <BloodGlucoseChart />

                </div>

                <div className="col-lg-6">

                    <WeightChart />

                </div>

            </div>

            {/* Statistics */}

            <div className="row mt-4">

                <div className="col-md-4">

                    <DashboardCard
                        title="Total Records"
                        value={
                            statistics.total_records ?? 0
                        }
                        unit="Entries"
                        color="info"
                    />

                </div>

                <div className="col-md-4">

                    <DashboardCard
                        title="Average Glucose"
                        value={
                            statistics.average_blood_glucose ?? "--"
                        }
                        unit="mg/dL"
                        color="primary"
                    />

                </div>

                <div className="col-md-4">

                    <DashboardCard
                        title="Average Weight"
                        value={
                            statistics.average_weight ?? "--"
                        }
                        unit="kg"
                        color="warning"
                    />

                </div>

            </div>

            {/* IBM Granite AI Insights */}

            <div className="mt-5">

                <h3 className="fw-bold mb-4">

                    IBM Granite AI Insights

                </h3>

                <div className="row g-4">

                    <div className="col-lg-4">

                        <AIHealthSummaryCard />

                    </div>

                    <div className="col-lg-4">

                        <AILifestyleRecommendationCard />

                    </div>

                    <div className="col-lg-4">

                        <AIRiskExplanationCard />

                    </div>

                </div>

            </div>

            {/* Records Table */}

            <div className="mt-4">

                <HealthRecordsTable
                    refresh={refreshLatest}
                />

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;