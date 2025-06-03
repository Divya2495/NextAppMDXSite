---
title: "Docker"
weight: 4
---

# 🐳 Docker (Containerization)

We use **Docker** to containerize our backend, frontend, and database environments.

### 🧱 What Docker Helps With
- Consistent environments across local/dev/staging/production
- Easy setup with `docker-compose`
- Isolated services (e.g., backend runs in its own container)

---

### 🧠 For New Developers
If you're unfamiliar with Docker, think of it as a "container" that holds your app and all its dependencies.

To start all services locally:

```bash
docker-compose up --build