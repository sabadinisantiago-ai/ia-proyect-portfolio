"""
Portfolio API — Santiago Sabadini
FastAPI backend serving portfolio data.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from data import profile, projects, skills, experience, goals, contact

app = FastAPI(
    title="Santiago Sabadini Portfolio API",
    version="1.0.0",
)

# CORS — allow frontend dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/profile")
def get_profile():
    """Return personal profile information."""
    return profile


@app.get("/api/projects")
def get_projects():
    """Return list of projects."""
    return projects


@app.get("/api/skills")
def get_skills():
    """Return skills grouped by category."""
    return skills


@app.get("/api/experience")
def get_experience():
    """Return work experience timeline."""
    return experience


@app.get("/api/goals")
def get_goals():
    """Return professional goals."""
    return goals


@app.get("/api/contact")
def get_contact():
    """Return contact information."""
    return contact


@app.get("/api/all")
def get_all():
    """Return all portfolio data in a single request."""
    return {
        "profile": profile,
        "projects": projects,
        "skills": skills,
        "experience": experience,
        "goals": goals,
        "contact": contact,
    }
