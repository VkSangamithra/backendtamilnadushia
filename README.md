# Tamil Nadu Shia Muslim Jamaat - Backend API

A clean, scalable, modular Node.js + Express backend service for the Tamil Nadu Shia Muslim Jamaat web platform.

---

## 📁 Directory Structure

```text
backend/
├── config/
│   ├── cors.js                  # Secure CORS configuration and origin validation
│   └── index.js                 # Centralized environment variable loader and defaults
├── src/
│   ├── controllers/
│   │   └── health.controller.js # Health check & system diagnostics controllers
│   ├── middleware/
│   │   ├── errorHandler.js      # Global centralized error handling middleware
│   │   ├── notFoundHandler.js   # 404 handler for unmatched routes
│   │   └── requestLogger.js     # Morgan HTTP request logging middleware
│   ├── routes/
│   │   ├── health.routes.js     # Health check route definitions
│   │   └── index.js             # API version aggregator router
│   └── services/
│       └── health.service.js    # Health and diagnostic business logic
├── .env.example                 # Environment variables template
├── .gitignore                   # Backend Git ignore rules (node_modules, .env, logs)
├── package.json                 # Project dependencies and npm scripts
├── README.md                    # Backend documentation and guide
└── server.js                    # Server entry point and HTTP listener
```

---

## 🚀 Getting Started

### 1. Navigate to the backend directory
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Copy the example environment file to `.env`:
```bash
# Windows PowerShell
Copy-Item .env.example .env

# Command Prompt / Bash
cp .env.example .env
```

### 4. Run the backend server

#### Development Mode (with automatic restart on file changes):
```bash
npm run dev
```

#### Production Mode:
```bash
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API welcome banner and service directory |
| `GET` | `/health` | Server health check (uptime, status, timestamp) |
| `GET` | `/api/v1` | Version 1 API index |
| `GET` | `/api/v1/health` | Versioned health check endpoint |
| `GET` | `/api/v1/health/details` | Extended system metrics (memory, platform, Node version) |

---

## 🔒 Security & CORS

The backend includes:
- **Helmet**: Secures HTTP response headers against common vulnerabilities.
- **CORS**: Configured in `config/cors.js` with whitelist validation from the `ALLOWED_ORIGINS` environment variable. By default, it allows the frontend Vite development server (`http://localhost:5173` and `http://127.0.0.1:5173`).
- **Body Limits**: Request payloads are limited to 10MB to prevent denial-of-service payload attacks.
- **Centralized Error Handling**: Ensures stack traces and internal errors are never leaked in production.

---

## 🔌 How the Frontend Connects to this Backend

To communicate with this backend from the React + Vite frontend (`TAMIL_NADU_SHIA_MUSLIM_JAMAAT_FRONTEND`):

### Option A: Direct Fetch / Axios using Environment Variable
In `TAMIL_NADU_SHIA_MUSLIM_JAMAAT_FRONTEND/.env`:
```env
VITE_API_URL=http://localhost:5000/api/v1
```

In your frontend service or component:
```typescript
const response = await fetch(`${import.meta.env.VITE_API_URL}/health`);
const data = await response.json();
console.log(data);
```

### Option B: Vite Dev Server Proxy (Recommended for local dev)
In `TAMIL_NADU_SHIA_MUSLIM_JAMAAT_FRONTEND/vite.config.ts`, you can configure a proxy so frontend requests to `/api` are automatically forwarded to port 5000:
```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
```
This avoids cross-origin requests during local development.
