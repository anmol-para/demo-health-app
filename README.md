# Demo Health API - Docker Local Registry Simulation

## Overview

This project demonstrates the complete Docker image lifecycle by building a simple Health API, containerizing it using Docker, storing the image in a Local Docker Registry, and pulling it back to simulate the workflow used with Amazon Elastic Container Registry (ECR).

## Project Structure

```
demo-health-app/
│── Dockerfile
│── app.js
│── package.json
│── README.md
```

## Prerequisites

- Docker Desktop
- Node.js (for local testing)
- Git

## Health Endpoint

**Endpoint**

```
GET /health
```

**Response**

```json
{
  "status": "ok"
}
```

## Build the Docker Image

```bash
docker build -t demo-health-app .
```

## Run the Docker Container

```bash
docker run -p 8080:8080 demo-health-app
```

## Test the Application

```bash
curl http://localhost:8080/health
```

Expected Output:

```json
{
  "status": "ok"
}
```

## Start a Local Docker Registry

```bash
docker pull registry:2

docker run -d -p 5000:5000 --name local-registry registry:2
```

Verify the registry:

```bash
docker ps
```

## Tag the Docker Image

```bash
docker tag demo-health-app localhost:5000/demo-health-app
```

## Push the Image to the Local Registry

```bash
docker push localhost:5000/demo-health-app
```

## Remove the Local Image

```bash
docker rmi demo-health-app
docker rmi localhost:5000/demo-health-app
```

## Pull the Image from the Registry

```bash
docker pull localhost:5000/demo-health-app
```

## Run the Pulled Image

```bash
docker run -p 8080:8080 localhost:5000/demo-health-app
```

## Test Again

```bash
curl http://localhost:8080/health
```

Expected Output:

```json
{
  "status": "ok"
}
```

## Workflow

```
Application Code
        ↓
Docker Build
        ↓
Docker Image
        ↓
Local Docker Registry
        ↓
Docker Pull
        ↓
Run Container
```

## Learning Outcome

- Built and Dockerized a Node.js Health API.
- Learned how Docker images are tagged.
- Created and used a Local Docker Registry.
- Pushed and pulled Docker images.
- Understood how the Local Registry simulates Amazon ECR.