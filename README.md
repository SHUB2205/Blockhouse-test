# Blockhouse-test

## Overview

This project is a web application built with **Next.js** on the frontend and **Django** API as the backend. The dashboard displays various charts, including Candlestick, Line, Bar, and Pie charts, with data fetched from the Django backend API.

### Features

- **Next.js**: Frontend framework for server-rendered React applications.
- **Django**: Backend framework providing a REST API to serve chart data.
- **Chart.js**: Used to create dynamic charts.
- **Axios**: For making API calls from the frontend to the Django API.

## Requirements

- **Node.js** (v14 or above)
- **npm** or **yarn**
- **Python** (v3.8 or above)
- **Django** and **Django REST Framework**

## Setup Instructions

### 1. Backend (Django API)

#### 1.1 Install Python Dependencies

Navigate to the `backend` folder and create a virtual environment:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate
pip install django djangorestframework
python manage.py migrate
python manage.py runserver



cd frontend
npm install
npm run dev
