"""Backend API tests for MediXcel NanoCura."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://medixcel-hospitals.preview.emergentagent.com").rstrip("/")
# fallback: read from /app/frontend/.env
if not BASE_URL or "emergentagent" not in BASE_URL:
    try:
        with open("/app/frontend/.env") as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                    break
    except Exception:
        pass

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
def test_health(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "MediXcel NanoCura" in data.get("message", "")
    assert data.get("service") == "Plus91 HIMS"


# ---------- Demo Requests ----------
valid_payload = {
    "hospital_name": "TEST_ NanoCura Hospital",
    "contact_person": "Test Contact",
    "mobile": "9999999999",
    "email": "test_nanocura@example.com",
    "beds_size": "50-100",
    "state": "Maharashtra",
    "preferred_demo_date": "2026-03-15",
    "message": "TEST message",
}


def test_create_demo_request_valid(session):
    r = session.post(f"{API}/demo-requests", json=valid_payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str)
    assert data["hospital_name"] == valid_payload["hospital_name"]
    assert data["email"] == valid_payload["email"]
    assert "created_at" in data
    # ISO datetime parseable
    from datetime import datetime
    datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))


def test_create_demo_request_invalid_email(session):
    p = dict(valid_payload, email="not-an-email")
    r = session.post(f"{API}/demo-requests", json=p)
    assert r.status_code == 422


def test_create_demo_request_short_hospital(session):
    p = dict(valid_payload, hospital_name="A")
    r = session.post(f"{API}/demo-requests", json=p)
    assert r.status_code == 422


def test_list_demo_requests(session):
    r = session.get(f"{API}/demo-requests")
    assert r.status_code == 200
    rows = r.json()
    assert isinstance(rows, list)
    assert len(rows) >= 1
    for row in rows:
        assert "_id" not in row
        assert "id" in row
        assert "hospital_name" in row


# ---------- Newsletter ----------
def test_newsletter_valid(session):
    r = session.post(f"{API}/newsletter", json={"email": "test_nl_nanocura@example.com"})
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["email"] == "test_nl_nanocura@example.com"
    assert "id" in data


def test_newsletter_invalid_email(session):
    r = session.post(f"{API}/newsletter", json={"email": "nope"})
    assert r.status_code == 422


# ---------- Legacy status ----------
def test_status_create_and_list(session):
    r = session.post(f"{API}/status", json={"client_name": "TEST_legacy_client"})
    assert r.status_code == 200, r.text
    assert r.json().get("client_name") == "TEST_legacy_client"

    r2 = session.get(f"{API}/status")
    assert r2.status_code == 200
    assert isinstance(r2.json(), list)
