# Finance Dashboard UI

## Project Overview
The Finance Dashboard UI is a frontend web application built using React.  
It allows users to track financial transactions, view financial summaries, analyze spending patterns, and manage transactions through an interactive dashboard.

This project focuses on component-based architecture, state management, role-based UI, data visualization, and responsive design.

---
## Features
- Dashboard summary cards (Balance, Income, Expenses)
- Balance trend line chart
- Spending category pie chart
- Transactions table
- Search transactions
- Filter transactions (Income / Expense)
- Add new transactions
- Edit transactions
- Delete transactions
- Role based UI (Admin / Viewer)
- Insights section with financial analysis
- Global state management using React Context
- Responsive layout
- Empty state handling
- Helper functions for formatting currency and date

---
## Tech Stack
- React
- React Router
- Recharts (Charts)
- JavaScript
- CSS
- Vite
- React Context API

---
## Folder Structure
src/
  components/
    layout/
      Navbar.jsx
      Sidebar.jsx
      Layout.jsx
    dashboard/
      SummaryCards.jsx
      Charts.jsx
    transactions/
      TransactionsTable.jsx
  pages/
    Dashboard.jsx
    Transactions.jsx
    Insights.jsx
  context/
    FinanceContext.jsx
  data/
    mockData.js
  utils/
    calculations.js
    helpers.js

---
## Installation and Setup
1. Clone the repository
2. Install dependencies
3. Run the development server(install npm)
4. Open in browser(npm run dev)
   
---
## Role Based Access
The application supports two user roles:

**Admin**
- Add transactions
- Edit transactions
- Delete transactions
- View dashboard and insights

**Viewer**
- View dashboard
- View transactions
- View insights
- Cannot modify data

---
## Insights Provided
The Insights page provides:
- Highest spending category
- Monthly income summary
- Monthly expense summary
- Balance calculation
- Financial observations

---
## State Management Approach
The application uses React Context API for global state management.
The FinanceContext manages:
- Transactions data
- Add transaction
- Edit transaction
- Delete transaction
- User role (Admin / Viewer)

This allows multiple components to access and update shared data efficiently.

---
## Approach
The project was built using a component-based architecture.
Reusable components were created for layout, dashboard, and transactions.
Mock data was used to simulate financial transactions.
Charts were used to visualize financial trends and spending patterns.
Role-based UI was implemented to demonstrate different user permissions.
Helper functions were created for formatting currency and date.
Context API was used for global state management.

---
## Future Improvements
- Dark mode
- Data persistence using Local Storage
- Export transactions to CSV
- Advanced filtering and sorting
- Authentication system
- Backend integration

---
## Author
Hima Varsha
Finance Dashboard UI Project
