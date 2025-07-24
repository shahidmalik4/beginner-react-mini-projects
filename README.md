# 🚀 my-multi-project-app

A modular React application built with **Vite**, showcasing multiple mini-projects like **Counter**, **Todo**, and **Users**. Each feature is organized into reusable components and standalone pages—perfect for scalable development and learning React fundamentals.

---

## 📂 Project Structure

```
my-multi-project-app/
├── public/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Counter/
│   │   ├── Todo/
│   │   └── Users/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Counter.jsx
│   │   ├── Todo.jsx
│   │   └── Users.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🌟 Features

- ⚛️ Built with **React + Vite**
- 📁 Feature-based architecture for scalability
- 🔁 Modular routing (multiple mini-projects/pages)
- 🧩 Reusable components
- 🌐 Clean and maintainable codebase

---

## 📚 Included Mini Projects

### 1️⃣ Counter App
A simple counter component demonstrating:
- React state (`useState`)
- Button event handling
- Increment/decrement/reset functionality

### 2️⃣ Todo App
A basic todo list showing:
- Controlled form inputs
- State-based item management
- Add/delete todos dynamically

### 3️⃣ Users List (API-based)
A user list fetched from a public REST API:
- Uses `fetch()` to retrieve data from [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
- Demonstrates `useEffect` and async data fetching
- Maps over API data and displays user info in a clean format
- Great example of working with external APIs in React

---

## 🧠 Topics & Skills Demonstrated

- Component-based React architecture
- React state & props handling
- Data fetching with `fetch` and `useEffect`
- Async/await usage in React
- (Optional) React Router for page navigation
- Static asset management (`react.svg`)
- Vite configuration and setup
- ESLint integration for linting
- Git version control and `.gitignore` usage
- Project documentation (`README.md`)

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v16 or later)
- npm or yarn

### 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/my-multi-project-app.git

# Navigate to the project folder
cd my-multi-project-app

# Install dependencies
npm install
# or
yarn install
```

### 💻 Running the App

```bash
# Start the development server
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173`

---

## 🛠 Tech Stack

- **React** – UI Library
- **Vite** – Lightning-fast build tool
- **JavaScript (ES6+)**
- **ESLint** – Code linting
- **npm** – Package manager
- **REST API** – For fetching live user data in the Users mini-project

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [ESLint](https://eslint.org)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com) – for free fake REST API
