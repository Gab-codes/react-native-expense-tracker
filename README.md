<h1 align="center">💸 Expense Tracker with React Native & Express 🚀</h1>

---

## 🧑‍🍳 App Features Overview

- 🔐 **Authentication** with email verification using **Clerk**
- 📝 **Signup & Login** flows with 6-digit email code
- 🏠 **Home Screen** that shows your current balance & past transactions
- ➕ **Create Screen** to add **income** or **expense** transactions
- 🔄 **Pull to refresh** functionality from scratch
- 🗑️ **Delete transactions** to update balance
- 🚪 **Logout** to navigate back to login screen

---

## 📁 .env Setup

### ⚙️ Backend (`/backend`)

```bash
PORT=5001
NODE_ENV=development

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>

DATABASE_URL=<your_neon_postgres_connection_url>

REDIS_URL=<your_redis_connection_url>
```

### ⚙️ Backend (`/backend`)

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_key>
```

## ⚙️ Run the backend

```bash
cd backend
npm install
npm run dev or npm run start

```

## 📱 Run the mobile

```bash
cd mobile
npm install
npx expo start
```
