# SailPoint - Full Stack Stock Trading Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://sailpoint-frontend.onrender.com)

A comprehensive full-stack stock trading platform that enables users to manage their investment portfolio, execute trades, and track real-time market positions with an intuitive dashboard interface.

## 🚀 Features

### Core Functionality

- **User Authentication & Authorization**: Secure JWT-based authentication with password encryption
- **Portfolio Management**: Real-time tracking of holdings, positions, and investment performance
- **Trading Operations**: Execute buy and sell orders with instant portfolio updates
- **Interactive Dashboard**: Dynamic charts and visualizations powered by Chart.js
- **Responsive Design**: Cross-device compatibility with modern UI/UX

### Advanced Features

- **Real-time Data Sync**: Live portfolio updates across all components
- **Order Management**: Complete order history and tracking system
- **Performance Analytics**: Visual representation of gains/losses and portfolio metrics
- **Material Design**: Clean, professional interface using Material-UI
- **Cross-platform Access**: Separate optimized interfaces for landing and trading

## 🏗️ Architecture

### System Design

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Dashboard     │    │   Backend       │
│   (React 19)    │◄──►│   (React 18)    │◄──►│   (Node.js)     │
│   Landing Page  │    │   Trading UI    │    │   REST API      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
    │                          │                      │
    │                          │                      │
   ┌────▼────┐            ┌────▼────┐            ┌────▼────┐
   │ Render  │            │ Render  │            │ MongoDB │
   │ Hosting │            │ Hosting │            │Database │
   └─────────┘            └─────────┘            └─────────┘

```

### Technology Stack

#### Backend (Node.js/Express)

- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens + bcryptjs + Passport.js
- **Security**: CORS configuration, cookie parsing, input validation
- **Architecture**: RESTful API design with proper error handling

#### Frontend (React)

- **Framework**: React.js 19.0 with functional components and hooks
- **Routing**: React Router DOM for SPA navigation
- **HTTP Client**: Axios for API communication
- **State Management**: React Context API
- **UI Components**: Custom components with responsive design
- **Notifications**: React Toastify for user feedback

#### Dashboard (React + Material-UI)

- **Framework**: React.js 18.2 with Material-UI components
- **Charts**: Chart.js with React-Chart.js-2 integration
- **Design System**: Material Design principles
- **Data Visualization**: Interactive charts and graphs
- **Real-time Updates**: Context-based state management

## 📁 Project Structure

```
SailPoint/
├── backend/                 # Node.js API server
│   ├── controllers/         # Request handlers
│   ├── middlewares/         # Authentication & validation
│   ├── models/             # Database models
│   ├── routes/             # API route definitions
│   ├── schemas/            # Mongoose schemas
│   ├── utils/              # Utility functions
│   └── index.js            # Server entry point
├── frontend/               # React landing application
│   ├── public/             # Static assets
│   ├── src/
│   │   └── landing_page/   # Landing page components
│   └── package.json        # Frontend dependencies
├── dashboard/              # React trading dashboard
│   ├── public/             # Dashboard assets
│   ├── src/
│   │   ├── components/     # Dashboard components
│   │   └── data/           # Mock data and utilities
│   └── package.json        # Dashboard dependencies
└── README.md
```

## 🔌 API Endpoints

### Authentication

- `POST /signup` - User registration
- `POST /login` - User authentication
- `POST /verify` - Token verification

### Trading Operations

- `GET /allHoldings` - Fetch user holdings
- `GET /allPositions` - Fetch trading positions
- `GET /allOrders` - Fetch order history
- `POST /newBuyOrder` - Execute buy order
- `POST /newSellOrder` - Execute sell order
- `DELETE /deleteAllOrders` - Clear order history

## 📊 Database Schema

### User Model

```javascript
{
  email: String (required, unique),
  username: String (required),
  password: String (required, hashed),
  createdAt: Date (default: now)
}
```

### Holdings Model

```javascript
{
  name: String,      // Stock symbol
  qty: Number,       // Quantity owned
  avg: Number,       // Average price
  price: Number,     // Current price
  net: String,       // Net change
  day: String        // Day change
}
```

### Orders Model

```javascript
{
  name: String,      // Stock symbol
  qty: Number,       // Order quantity
  price: Number,     // Order price
  mode: String       // 'BUY' or 'SELL'
}
```

## 🌐 Deployment

The application is deployed on **Render** with three separate services:

- **Backend API**: `https://sailpoint-backend.onrender.com`
- **Frontend**: `https://sailpoint-frontend.onrender.com`
- **Dashboard**: `https://sailpoint-dashboard.onrender.com`

### Deployment Configuration

- **Platform**: Render
- **Build Process**: Automatic deployment from GitHub
- **Environment**: Production-ready with environment variables
- **CORS**: Configured for cross-origin requests between services

## 🧪 Testing & Quality

### Code Quality

- **Error Handling**: Comprehensive try-catch blocks and error middleware
- **Input Validation**: Server-side validation for all user inputs
- **Security**: JWT authentication, password hashing, CORS configuration
- **Code Structure**: Modular design with separation of concerns

### Performance Optimizations

- **Database**: Indexed queries for improved performance
- **Caching**: Strategic use of React Context for state management
- **Bundle Size**: Optimized dependencies and code splitting
- **Responsive Design**: Mobile-first approach with flexible layouts

## 👨‍💻 Author

**Prem Kumar Dudi**

- GitHub: [@PREMKUMARDUDI](https://github.com/PREMKUMARDUDI)
- LinkedIn: [Connect with me](https://linkedin.com/in/dudipremkumar)

## 🙏 Acknowledgments

- React.js community for excellent documentation
- Material-UI team for the design system
- Chart.js for powerful charting capabilities
- MongoDB team for the robust database solution
- Render platform for seamless deployment

---

⭐ **Star this repository if you found it helpful!**

_Built with ❤️ for the trading community_
