# 📦 Subscription Tracker API (Backend Only)

This project is a backend-only RESTful API for tracking user subscriptions. It allows users to register, log in, and manage their subscription plans with full CRUD functionality.

---


---

## 🔐 Auth Routes

> All auth routes under: `/api/v1/auth`

### ✅ `POST /signUp` – Create a new user

**Description**: Registers a new user account.

**Request Body:**
```json
{
  "userName": "JohnDoe",
  "email": "john@example.com",
  "password": "securePassword123"
}


```
### ✅ `POST /signIn` – Create a new user

**Description**: SignIn to your account.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}

```
### ✅ `GET /signOut` – Log out from the account
**Description**: Logs out the current user session.



-------------------------------------------------------------------------------


## 🔐 subscription Routes
> All subscription routes under: `/api/v1/subscription`

### ✅ `POST /` – Create a new subscription
**Description**:Adds a new subscription linked to the authenticated user.
**Request Body:**
```json
{
  "name": "Netflix",
  "price": 1500,
  "currancy": "pkr",
  "frequency": "monthly",
  "category": "entertainment",
  "paymentMethod": "Credit Card",
  "status": "Active",
}
```

### ✅ `GET /` – Get all subscriptions
**Description**: Retrieves all subscriptions only for the admin.

### ✅ `GET /:id` – Get a user all subscription by user ID
**Description**: Retrieves all subscriptions for a specific user by their ID.

### ✅ `PUT /:id` – Update a subscription by ID
**Description**: Updates an existing subscription by its ID.
**Request Body:**
```json
{
  "name": "Netflix",
  "price": 1500,
  "currancy": "pkr",
  "frequency": "monthly",
  "category": "entertainment",
  "paymentMethod": "Credit Card",
  "status": "Active",
}
```

### ✅ `DELETE /:id` – Delete a subscription by ID
**Description**: Deletes a subscription by its ID.



-------------------------------------------------------------------------------
## 🔐 User Routes
> All user routes under: `/api/v1/users`

### ✅ `GET /` – Get all users
**Description**: Retrieves all users, accessible only to admins.


### ✅ `GET /:id` – Get a user  by its ID
**Description**: Retrieves a specific user by their ID only to admins.


### ✅ `PUT /:id` – Cancel a user's subscription by its subscription ID
**Description**: Cancels a specific user's subscription by their ID only to admins.

### ✅ `DELETE /:id` – Delete a user by its's ID
**Description**: Deletes a user and their subscription details by their ID, accessible only to admins.