from typing import Dict, List


class RiskEngine:
    """
    Rule-based risk assessment engine for chronic disease monitoring.
    """

    @staticmethod
    def calculate_risk(data: Dict) -> Dict:
        score = 0
        reasons: List[str] = []

        # Blood Pressure
        if data["systolic_bp"] >= 160 or data["diastolic_bp"] >= 100:
            score += 3
            reasons.append("Very high blood pressure.")
        elif data["systolic_bp"] >= 140 or data["diastolic_bp"] >= 90:
            score += 2
            reasons.append("High blood pressure.")

        # Blood Glucose
        if data["blood_glucose"] >= 250:
            score += 3
            reasons.append("Very high blood glucose.")
        elif data["blood_glucose"] >= 180:
            score += 2
            reasons.append("High blood glucose.")

        # Medication
        if not data["medication_taken"]:
            score += 2
            reasons.append("Medication was missed.")

        # Exercise
        if data["exercise_minutes"] < 30:
            score += 1
            reasons.append("Insufficient physical activity.")

        # Sleep
        if data["sleep_hours"] < 6:
            score += 1
            reasons.append("Insufficient sleep.")

        # Water Intake
        if data["water_intake_liters"] < 2:
            score += 1
            reasons.append("Low water intake.")

        # Risk Level
        if score >= 7:
            level = "High"
        elif score >= 4:
            level = "Medium"
        else:
            level = "Low"

        return {
            "risk_score": score,
            "risk_level": level,
            "reasons": reasons,
        }