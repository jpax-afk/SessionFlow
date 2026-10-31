# Badminton Class Management System

A full-stack foundation for managing badminton classes, students, guardians,
coaches, enrollments, and payments. This repository currently contains the
frontend and backend scaffolding only; the application workflows described
below are planned and are not implemented yet.

## Planned user roles and features

- **Student:** view classes, update a profile, apply for classes, and opt out.
- **Parent/guardian:** manage one or more child profiles, manage a child's class
  participation, and view relevant payment information.
- **Coach:** view classes and rosters, manage students in classes, and view
  payments.

Authentication, role-specific dashboards, CRUD workflows, enrollment actions,
and payment features are all planned for later development.

## Tech stack

- Frontend: React, TypeScript, Vite, and Bootstrap
- Backend: Node.js, Express, TypeScript, and CORS
- Database: PostgreSQL with Prisma ORM
- Testing: Vitest and Supertest
- Planned infrastructure: GitHub Actions and Docker Compose

## Current project structure

```text
.
|-- frontend/
|   |-- src/
|   |   |-- App.tsx
|   |   |-- index.css
|   |   `-- main.tsx
|   |-- .env.example
|   |-- index.html
|   |-- package.json
|   |-- tsconfig.app.json
|   |-- tsconfig.json
|   |-- tsconfig.node.json
|   `-- vite.config.ts
|-- backend/
|   |-- prisma/
|   |   `-- schema.prisma
|   |-- src/
|   |   |-- controllers/
|   |   |   `-- healthController.ts
|   |   |-- routes/
|   |   |   `-- healthRoutes.ts
|   |   |-- app.ts
|   |   `-- server.ts
|   |-- tests/
|   |   `-- health.test.ts
|   |-- .env.example
|   |-- package.json
|   |-- prisma.config.ts
|   |-- tsconfig.json
|   `-- vitest.config.mts
|-- .gitignore
`-- README.md
```

Additional folders such as `components`, `pages`, `services`, `middleware`,
`lib`, and `types` should be added when they contain working code rather than
being committed empty.

## Prerequisites

- Node.js 22.12 or newer (Node.js 24 is supported)
- npm
- PostgreSQL for future database-backed features

## Local development

Install dependencies separately for the two applications:

```bash
cd frontend
npm install

cd ../backend
npm install
```

Copy each example environment file before local development:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

On PowerShell, use `Copy-Item` instead:

```powershell
Copy-Item frontend/.env.example frontend/.env
Copy-Item backend/.env.example backend/.env
```

Update `DATABASE_URL` in `backend/.env` with local PostgreSQL credentials. Do
not commit either `.env` file. A database is not required for the current
health endpoint or its automated test.

### Start the frontend

```bash
cd frontend
npm run dev
```

Vite serves the frontend at `http://localhost:5173` by default.

### Start the backend

```bash
cd backend
npm run dev
```

The API runs at `http://localhost:3000` by default. Check it at
`GET http://localhost:3000/api/health`.

### Build and test

```bash
cd frontend
npm run build

cd ../backend
npm run build
npm test
```

After building the backend, start the compiled server with:

```bash
cd backend
npm start
```

After configuring `DATABASE_URL`, generate the Prisma client with:

```bash
cd backend
npm run prisma:generate
```

## Environment variables

### Frontend

- `VITE_API_URL`: base URL of the backend API

### Backend

- `PORT`: backend HTTP port; defaults to `3000`
- `DATABASE_URL`: PostgreSQL connection string used by Prisma
- `FRONTEND_URL`: origin allowed by the backend CORS configuration; defaults to
  `http://localhost:5173`

## Next development steps

The next phase can add authentication and authorization, connect the existing
Prisma schema to application services, and then implement role-specific
features incrementally. Database migrations should only be created after a
valid `DATABASE_URL` has been configured and the existing schema has been
reviewed.
