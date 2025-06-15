# Players API

A simple Express + TypeScript API that fetches tennis player statistics from a public JSON source.

## Features

- GET `/players` – Returns sorted list of players
- GET `/players/:id` – Returns specific player by ID
- Uses `express-validator` for input validation
- Jest + Supertest setup for automated testing
- Environment-based config using `.env.*` files

---

## 📦 Setup

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/players-api.git
cd players-api
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Environment Variables

Create the following files:

.env.development
```env
PORT=3000
SERVER_URL=http://localhost:3000
```

.env.production

```env
PORT=80
SERVER_URL=https://myapp.example.com
```

---

## 🛠 Development

Start the dev server with:

```bash
npm run dev
```

---

## 📦 Build & Production

Build
```bash
npm run build
```

Run Production
```bash
npm start
```

---

## 🧪 Run Tests

```bash
npm test
```

Runs Jest unit tests defined under src/tests.

---

## 🔌 API Endpoints

GET /players
Fetch all players data sorted in ascending order by id

GET /players/:id
Fetch player details by ID.

---

## 🔄 CI Setup

Uses GitHub Actions to run tests on each push to main.

Path: .github/workflows/test.yml

---

## 📁 Folder Structure

```css
src/
├── controllers/
├── routes/
├── middelwares/
├── validators/
├── utils/
└── tests/
```

---

## 🛡 .gitignore

```text
node_modules/
.npm_cache/
.env.development
.env.production
```

---

## 📜 License

MIT

---

## 📧 Contact

For questions or suggestions, feel free to reach out or open an issue.