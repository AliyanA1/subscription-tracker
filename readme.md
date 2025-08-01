# 📦 Subscription Management System

> A secure, production-ready backend for managing user subscriptions, payments, and automated workflows.

This project is a backend service for a real-world **SaaS subscription system**, designed with scalability, security, and extensibility in mind.

---

## 🧠 Key Features

- ✅ **JWT Authentication** for user sessions
- ✅ **MongoDB** schema design for users, subscriptions, and payments
- ✅ **RESTful API** architecture
- ✅ **Role-based Access Control (RBAC)**
- ✅ **Email Reminders** via QStash + Nodemailer
- ✅ **Rate-limiting & Security** via Arcjet
- ✅ **.env environment support** for development & production

---

## 🛠 Tech Stack

| Technology    | Purpose                              |
|---------------|--------------------------------------|
| Node.js + Express | Backend framework                 |
| MongoDB       | Database for user & subscription data |
| JWT           | Authentication tokens                |
| Bcrypt        | Secure password hashing              |
| Arcjet        | Protection & rate limiting           |
| QStash (Upstash) | Scheduled email jobs               |
| Nodemailer    | Email sending                        |

---

## 📁 Project Setup

### 1. Clone the Repository

```bash
git clone git@github.com:AliyanA1/subscription-tracker.git
cd subscription-tracker

```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables
Create two environment files:

`.env.development.local`

`.env.production.local`

Start by copying from the example:

```bash
cp .env.example
```

### 4. Running Locally Start QStash (for email reminders) in a separate terminal:  

```bash
npx @upstash/qstash-cli dev

npm run dev
```

📄 License
This project is currently private and intended for learning & personal use. Licensing terms may change when the project is completed.


---

Let me know when you'd like help with:
- Creating Swagger or Postman API documentation
- Writing integration tests
- Setting up Docker or CI/CD for deployment

I’ll help make this project production-grade step by step.

