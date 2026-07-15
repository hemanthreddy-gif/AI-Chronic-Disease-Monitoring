# 🩺 AI-Assisted Chronic Disease Management Platform

> An AI-powered healthcare platform for monitoring **Diabetes** and **Hypertension**, built using **React**, **FastAPI**, **MongoDB Atlas**, **IBM Granite Foundation Models**, and **IBM watsonx.ai**.

<p align="center">

![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?logo=fastapi)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)
![IBM Granite](https://img.shields.io/badge/AI-IBM%20Granite-1261FE)
![watsonx.ai](https://img.shields.io/badge/IBM-watsonx.ai-052FAD)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7)
![IBM Cloud Object Storage](https://img.shields.io/badge/Frontend-IBM%20Cloud%20Object%20Storage-1261FE)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# 📖 Project Overview

The **AI-Assisted Chronic Disease Management Platform** is an intelligent healthcare application developed as part of the **IBM Edunet Foundation, IBM SkillsBuild, and AICTE Virtual Internship**.

The platform is designed to assist individuals living with **Type 2 Diabetes** and **Hypertension** by enabling daily health monitoring, visualizing health trends, assessing health risks through a rule-based engine, and generating AI-powered health insights using **IBM Granite Foundation Models** through **IBM watsonx.ai**.

Patients can securely record vital health parameters such as blood pressure, blood glucose, body weight, medication adherence, and symptoms. The system analyzes these records to provide personalized health summaries, lifestyle recommendations, and explanations of identified health risks, helping users better understand their condition and encouraging proactive disease management.

---

# 🎯 Problem Statement

Chronic diseases such as **Diabetes** and **Hypertension** require continuous monitoring and timely intervention. However, many existing healthcare applications primarily function as data storage tools and offer limited support in helping patients understand their health trends or receive personalized guidance.

This project addresses these challenges by combining structured health data with Artificial Intelligence to:

- Monitor daily health records
- Assess patient risk using a rule-based engine
- Visualize health trends through interactive dashboards
- Generate AI-powered health summaries
- Provide personalized lifestyle recommendations
- Explain health risks in patient-friendly language
- Support proactive chronic disease management

---

# ✨ Key Features

## 🔐 Authentication
- Secure User Registration
- User Login using JWT Authentication
- Protected API Routes using HTTPBearer Authentication

## 📊 Health Monitoring
- Record Blood Pressure
- Record Blood Glucose
- Record Body Weight
- Track Medication Adherence
- Record Symptoms
- Automatic Timestamping of Health Records

## 📈 Dashboard & Analytics
- Patient Dashboard
- Health Summary Cards
- Latest Health Record Display
- Blood Pressure Trend Charts
- Blood Glucose Trend Charts
- Weight Trend Charts

## 🤖 AI-Powered Features
- AI Health Summary Generation
- AI Lifestyle Recommendations
- AI Risk Explanation
- IBM Granite Integration through IBM watsonx.ai

## ⚠️ Risk Assessment
- Rule-based Risk Classification
- Low / Medium / High Risk Detection
- Automated Risk Explanation

## ☁️ Deployment
- Backend deployed on Render
- Frontend hosted using IBM Cloud Object Storage Static Website Hosting
- MongoDB Atlas Cloud Database

---

# 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React, Vite, Bootstrap |
| Backend | FastAPI |
| Database | MongoDB Atlas |
| Authentication | JWT, HTTPBearer |
| AI Services | IBM Granite Foundation Models, IBM watsonx.ai |
| Charts | Chart.js, react-chartjs-2 |
| HTTP Client | Axios |
| Deployment (Frontend) | IBM Cloud Object Storage |
| Deployment (Backend) | Render |
| Version Control | Git & GitHub |

---

# 🚀 Highlights

- ✅ Full Stack Healthcare Application
- ✅ AI-powered Patient Assistance
- ✅ IBM Granite Integration
- ✅ IBM watsonx.ai Integration
- ✅ MongoDB Atlas Cloud Database
- ✅ JWT-based Authentication
- ✅ Interactive Health Trend Visualization
- ✅ Cloud Deployment using Render and IBM Cloud Object Storage
- ✅ Built as part of the IBM Edunet Foundation + IBM SkillsBuild + AICTE Internship

- ---

# 🏗️ System Architecture

The platform follows a modular full-stack architecture where the React frontend communicates with a FastAPI backend through secure REST APIs. The backend stores patient health records in MongoDB Atlas, performs rule-based risk assessment, and integrates with IBM Granite Foundation Models through IBM watsonx.ai to generate AI-powered health insights.

```text
                        +---------------------------+
                        |        Patient User       |
                        +-------------+-------------+
                                      |
                                      |
                           React + Vite Frontend
                                      |
                                      |
                              Axios REST API Calls
                                      |
                                      |
                      FastAPI Backend (Render Deployment)
                                      |
          +---------------------------+----------------------------+
          |                            |                           |
          |                            |                           |
   MongoDB Atlas              Rule-Based Risk Engine     IBM watsonx.ai
          |                            |                           |
          |                            |                           |
          +----------------------------+---------------------------+
                                       |
                                       |
                          IBM Granite Foundation Model
                                       |
                                       |
                         AI Health Recommendations
```

---

# 📂 Project Structure

```text
AI-Chronic-Disease-Monitoring/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── auth/
│   │   ├── database/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── utils/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── docs/
├── diagrams/
├── README.md
└── .gitignore
```

---

# ⚙️ Prerequisites

Before running the project locally, install the following software:

- Python 3.11 or later
- Node.js 20 or later
- npm
- Git
- MongoDB Atlas Account
- IBM Cloud Lite Account
- IBM watsonx.ai Project

---

# 🔧 Backend Installation

Clone the repository:

```bash
git clone https://github.com/<your-github-username>/AI-Chronic-Disease-Monitoring.git
```

Move into the project:

```bash
cd AI-Chronic-Disease-Monitoring
```

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment:

**Windows**

```bash
python -m venv venv
venv\Scripts\activate
```

**Linux / macOS**

```bash
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the backend server:

```bash
uvicorn app.main:app --reload
```

Backend will be available at:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

# 💻 Frontend Installation

Open another terminal.

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Frontend will be available at:

```text
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
# MongoDB Atlas
MONGODB_URL=<YOUR_MONGODB_ATLAS_CONNECTION_STRING>

# JWT
SECRET_KEY=<YOUR_SECRET_KEY>
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60

# IBM watsonx.ai
IBM_API_KEY=<YOUR_IBM_API_KEY>
IBM_PROJECT_ID=<YOUR_PROJECT_ID>
IBM_URL=https://us-south.ml.cloud.ibm.com

# IBM Granite Model
IBM_MODEL_ID=<YOUR_GRANITE_MODEL_ID>
```

> **Note:** Never commit the `.env` file or sensitive credentials to GitHub.

---

# 🚀 Running the Application

Start the backend:

```bash
uvicorn app.main:app --reload
```

Start the frontend:

```bash
npm run dev
```

Open the application:

```text
http://localhost:5173
```

---

# ☁️ Deployment

## Frontend

Hosted using **IBM Cloud Object Storage (Static Website Hosting)**.

## Backend

Deployed on **Render**.

## Database

Hosted on **MongoDB Atlas**.

## AI

Integrated with **IBM Granite Foundation Models** using **IBM watsonx.ai**.

---

# 🌐 Live Deployment

## Frontend

```
https://<your-frontend-url>
```

## Backend API

```
https://ai-chronic-backend.onrender.com
```

## Swagger API Documentation

```
https://ai-chronic-backend.onrender.com/docs
```
---

# 📡 API Documentation

The backend exposes RESTful APIs for user authentication, health record management, dashboard analytics, and AI-powered health insights.

## Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | Authenticate user and generate JWT |
| GET | `/api/v1/auth/me` | Retrieve current authenticated user |

---

## Health Record APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/health-records` | Add a new health record |
| GET | `/api/v1/health-records` | Retrieve all health records *(Known issue under production testing)* |

---

## Dashboard APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/dashboard/summary` | Dashboard summary statistics |
| GET | `/api/v1/dashboard/trends` | Health trend data for charts |
| GET | `/api/v1/dashboard/statistics` | Overall patient statistics |

---

## AI APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/ai/summary` | Generate AI health summary |
| POST | `/api/v1/ai/recommendation` | Generate personalized lifestyle recommendations |
| POST | `/api/v1/ai/risk-explanation` | Explain calculated health risk |

---

## API Documentation (Swagger)

Interactive API documentation is available at:

```
https://ai-chronic-backend.onrender.com/docs
```

---

# 🤖 IBM Granite Integration

This project integrates **IBM Granite Foundation Models** through **IBM watsonx.ai** to provide natural language health insights based on patient data.

Unlike traditional healthcare dashboards that only display numerical values, IBM Granite converts structured health information into clear, patient-friendly explanations.

### AI Capabilities

- AI-generated health summaries
- Personalized lifestyle recommendations
- Rule-based risk explanations
- Easy-to-understand clinical language
- Evidence-oriented health guidance

The AI component supports patient education and encourages proactive management of chronic diseases. It is designed to assist users and does **not** replace professional medical advice or diagnosis.

---

# 🧠 AI Workflow

```text
Patient Health Data
          │
          ▼
Input Validation
          │
          ▼
Health Record Stored
          │
          ▼
Rule-Based Risk Engine
          │
          ▼
Risk Classification
(Low / Medium / High)
          │
          ▼
Prompt Construction
          │
          ▼
IBM watsonx.ai
          │
          ▼
IBM Granite Foundation Model
          │
          ▼
AI Health Summary
Lifestyle Recommendation
Risk Explanation
          │
          ▼
Patient Dashboard
```

---

# ⚠️ Rule-Based Risk Assessment

The application includes a lightweight rule-based engine to estimate patient risk using commonly monitored health parameters.

Example factors considered include:

- Elevated blood pressure
- Elevated blood glucose
- Medication adherence
- Body weight trends
- Reported symptoms

The calculated risk is categorized as:

- 🟢 Low Risk
- 🟡 Medium Risk
- 🔴 High Risk

IBM Granite then generates a natural-language explanation describing why the patient falls into the identified risk category.

---

# 🔒 Security Features

The platform implements several security mechanisms to protect user information.

- JWT-based authentication
- HTTPBearer protected endpoints
- Password hashing
- Secure REST API communication
- MongoDB Atlas cloud database
- Environment variable configuration for sensitive credentials

No API keys or secrets are stored within the source code repository.

---

# 🔄 Application Workflow

```text
User Registration / Login
            │
            ▼
JWT Authentication
            │
            ▼
Patient Dashboard
            │
            ▼
Health Data Entry
            │
            ▼
MongoDB Atlas
            │
            ▼
Risk Assessment
            │
            ▼
IBM Granite Analysis
            │
            ▼
AI Summary &
Lifestyle Recommendation
            │
            ▼
Dashboard Charts Updated
```

---

# 📊 Data Flow

```text
Patient
   │
   ▼
React Frontend
   │
   ▼
Axios HTTP Requests
   │
   ▼
FastAPI Backend
   │
   ├──────────────► MongoDB Atlas
   │
   ├──────────────► Rule-Based Risk Engine
   │
   └──────────────► IBM watsonx.ai
                           │
                           ▼
                 IBM Granite Foundation Model
                           │
                           ▼
                 AI Health Insights
                           │
                           ▼
                    React Dashboard
```

---

# 💡 Design Highlights

- Modular FastAPI backend
- Component-based React frontend
- Secure JWT authentication
- MongoDB Atlas cloud database
- Interactive Chart.js visualizations
- AI-powered patient assistance using IBM Granite
- Cloud deployment using Render and IBM Cloud Object Storage
- Scalable architecture suitable for future healthcare enhancements

---

# 🧪 Testing

The application was tested throughout development to ensure the core modules function correctly and integrate seamlessly.

## Backend Testing

| Test Case | Status |
|-----------|:------:|
| FastAPI Server Startup | ✅ Passed |
| MongoDB Atlas Connection | ✅ Passed |
| User Registration API | ✅ Passed |
| User Login API | ✅ Passed |
| JWT Authentication | ✅ Passed |
| Protected API Access | ✅ Passed |
| Health Record Submission | ✅ Passed |
| Dashboard Summary API | ✅ Passed |
| Dashboard Statistics API | ✅ Passed |
| Dashboard Trends API | ✅ Passed |
| IBM Granite AI Summary | ✅ Passed |
| AI Lifestyle Recommendation | ✅ Passed |
| AI Risk Explanation | ✅ Passed |

---

## Frontend Testing

| Test Case | Status |
|-----------|:------:|
| React Application Loads | ✅ Passed |
| User Registration | ✅ Passed |
| User Login | ✅ Passed |
| Dashboard Loading | ✅ Passed |
| Health Data Entry Form | ✅ Passed |
| Latest Health Record Display | ✅ Passed |
| Blood Pressure Chart | ✅ Passed |
| Blood Glucose Chart | ✅ Passed |
| Weight Chart | ✅ Passed |
| AI Summary Widget | ✅ Passed |
| AI Recommendation Widget | ✅ Passed |
| Responsive UI | ✅ Passed |

---

# ☁️ Deployment Testing

| Component | Platform | Status |
|-----------|----------|:------:|
| Backend | Render | ✅ Running |
| Frontend | IBM Cloud Object Storage | ✅ Running |
| Database | MongoDB Atlas | ✅ Connected |
| AI Services | IBM watsonx.ai | ✅ Connected |
| IBM Granite | Foundation Model | ✅ Working |

---

# 📸 Application Screenshots

> **Note:** Replace the placeholders below with screenshots from your application before final submission.

## Login Page

```
docs/screenshots/login.png
```

---

## Registration Page

```
docs/screenshots/register.png
```

---

## Dashboard

```
docs/screenshots/dashboard.png
```

---

## Health Entry Form

```
docs/screenshots/health-entry.png
```

---

## Trend Charts

```
docs/screenshots/charts.png
```

---

## AI Health Summary

```
docs/screenshots/ai-summary.png
```

---

# 📈 Project Outcomes

The developed platform successfully demonstrates how Artificial Intelligence can enhance chronic disease monitoring by combining structured health data with explainable AI-generated insights.

### Successfully Implemented

- Secure JWT-based authentication
- Cloud-hosted MongoDB Atlas database
- Daily health record management
- Rule-based health risk assessment
- Interactive health trend visualization
- AI-generated health summaries
- AI lifestyle recommendations
- AI-generated risk explanations
- IBM Granite integration through IBM watsonx.ai
- Cloud deployment using Render and IBM Cloud Object Storage

---

# ⚠️ Known Limitations

The current implementation is an internship MVP and has a few limitations.

- No doctor portal (future enhancement)
- No medication reminder scheduler
- No wearable device integration
- No appointment scheduling
- No PDF report generation
- No multilingual support
- No notification service

Additionally:

- `GET /api/v1/health-records` currently requires further production debugging and may return an internal server error under certain scenarios. This does not affect the primary workflow of patient registration, login, dashboard analytics, health data submission, or AI-generated recommendations.

---

# 🚀 Future Enhancements

The platform can be extended with several advanced healthcare features.

- Doctor Dashboard
- Medication Reminder Scheduler
- Appointment Management
- Patient Report Export (PDF)
- Email Notifications
- SMS Alerts
- Wearable Device Integration
- Continuous Glucose Monitoring (CGM) Support
- Electronic Health Record (EHR/FHIR) Integration
- Voice-enabled AI Assistant
- Multilingual Patient Support
- Predictive Risk Analytics using Machine Learning
- Population Health Analytics
- Administrative Dashboard

---

# 📊 Project Summary

| Module | Status |
|---------|:------:|
| Authentication | ✅ Completed |
| Health Record Management | ✅ Completed |
| Dashboard | ✅ Completed |
| Data Visualization | ✅ Completed |
| Rule-Based Risk Assessment | ✅ Completed |
| IBM Granite Integration | ✅ Completed |
| AI Health Summary | ✅ Completed |
| AI Lifestyle Recommendation | ✅ Completed |
| AI Risk Explanation | ✅ Completed |
| MongoDB Atlas Integration | ✅ Completed |
| Frontend Deployment | ✅ Completed |
| Backend Deployment | ✅ Completed |
| End-to-End Testing | ✅ Completed |

---

# 👨‍💻 Author

**P. J. Hemanth Reddy**

Pharm.D Graduate | Health Informatics Enthusiast | Full Stack Developer | AI Healthcare Developer

- GitHub: https://github.com/hemanthreddy-gif
- LinkedIn: *(Add your LinkedIn profile URL here)*

---

# 🤝 Acknowledgements

This project was developed as part of the:

- IBM Edunet Foundation Virtual Internship
- IBM SkillsBuild
- AICTE Internship Program

Special thanks to:

- IBM for providing IBM Cloud Lite and watsonx.ai services
- Edunet Foundation for organizing the internship
- AICTE for supporting industry-oriented learning
- MongoDB Atlas for cloud database services
- Render for backend hosting
- IBM Cloud Object Storage for frontend hosting

---

# 📚 References

The following resources were referred to during the development of this project.

### IBM

- IBM Cloud Documentation
- IBM watsonx.ai Documentation
- IBM Granite Foundation Models Documentation

### FastAPI

- https://fastapi.tiangolo.com/

### React

- https://react.dev/

### MongoDB

- https://www.mongodb.com/docs/

### Chart.js

- https://www.chartjs.org/docs/

### JWT

- https://jwt.io/

---

# 📜 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project for educational and non-commercial purposes.

See the `LICENSE` file for additional information.

---

# 🌟 Project Highlights

✔ Full Stack Healthcare Application

✔ AI-Powered Health Monitoring

✔ IBM Granite Integration

✔ IBM watsonx.ai Integration

✔ MongoDB Atlas Cloud Database

✔ JWT Authentication

✔ Interactive Data Visualization

✔ Cloud Deployment

✔ Production-Ready Modular Architecture

✔ Developed for IBM Edunet Foundation Internship

---

# 🎯 Learning Outcomes

Through this project, the following technologies and concepts were explored and implemented:

- React Frontend Development
- FastAPI REST API Development
- MongoDB Atlas Integration
- JWT-Based Authentication
- Secure API Design
- IBM Granite Foundation Models
- IBM watsonx.ai Integration
- AI Prompt Engineering
- Rule-Based Clinical Risk Assessment
- Interactive Health Data Visualization
- Cloud Deployment using Render
- Static Website Hosting using IBM Cloud Object Storage
- Git and GitHub Version Control

---

# 🚀 Future Scope

Potential future enhancements include:

- Doctor Dashboard
- Medication Reminder Notifications
- AI Chat Assistant
- PDF Health Report Generation
- Email & SMS Notifications
- Wearable Device Integration
- FHIR / ABDM Integration
- Voice-Based Patient Assistant
- Predictive Machine Learning Models
- Multi-language Support
- Administrative Dashboard

---

# 📬 Contact

For questions, suggestions, or collaboration opportunities:

**P. J. Hemanth Reddy**

GitHub:
https://github.com/hemanthreddy-gif

LinkedIn:
*(Add your LinkedIn URL)*

Email:
*(Add your Email Address)*

---

# ⭐ Support

If you found this project useful or interesting:

⭐ Star this repository

🍴 Fork the repository

🛠️ Contribute through pull requests

💡 Share feedback and suggestions

---

# 📌 Disclaimer

This application is intended for **educational and demonstration purposes only**.

The AI-generated recommendations and summaries are designed to assist users in understanding health trends and **must not be considered medical advice, diagnosis, or treatment**.

Users should always consult qualified healthcare professionals before making clinical decisions based on the information provided by this application.

---

<div align="center">

## ❤️ Thank You for Visiting This Repository

### AI-Assisted Chronic Disease Management Platform

**Built with React • FastAPI • MongoDB Atlas • IBM Granite • IBM watsonx.ai**

**Developed as part of the IBM Edunet Foundation + IBM SkillsBuild + AICTE Virtual Internship**

</div>
