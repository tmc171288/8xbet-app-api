const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Import routes
const gamesRoutes = require("./routes/games");
const casinoInfoRoutes = require("./routes/casinoInfo");
const liveBettingRoutes = require("./routes/liveBetting");

// Routes
app.use("/api/games", gamesRoutes);
app.use("/api/casino-info", casinoInfoRoutes);
app.use("/api/live-betting", liveBettingRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to 8xbet APP API",
    version: "1.0.0",
    endpoints: {
      games: "/api/games",
      casino_info: "/api/casino-info",
      live_betting: "/api/live-betting",
    },
    documentation: "/api/docs",
    timestamp: new Date().toISOString(),
  });
});

// API Documentation endpoint
app.get("/api/docs", (req, res) => {
  res.json({
    success: true,
    api_name: "8xbet APP API",
    version: "1.0.0",
    base_url: `http://localhost:${PORT}/api`,
    endpoints: [
      {
        path: "/games",
        method: "GET",
        description: "Get all games",
        query_params: {
          category: "Filter by category (casino, sports, slots)",
          search: "Search games by name",
          limit: "Limit number of results",
          sort: "Sort by:  players, rating, name",
        },
        example: "/api/games?category=casino&limit=5",
      },
      {
        path: "/games/:id",
        method: "GET",
        description: "Get single game by ID",
        example: "/api/games/1",
      },
      {
        path: "/casino-info",
        method: "GET",
        description: "Get complete casino information",
        example: "/api/casino-info",
      },
      {
        path: "/casino-info/features",
        method: "GET",
        description: "Get casino features only",
        example: "/api/casino-info/features",
      },
      {
        path: "/casino-info/promotions",
        method: "GET",
        description: "Get current promotions",
        example: "/api/casino-info/promotions",
      },
      {
        path: "/live-betting",
        method: "GET",
        description: "Get all live betting matches",
        query_params: {
          sport: "Filter by sport (football, basketball, tennis, esports)",
          status: "Filter by status (live, upcoming, halftime)",
          limit: "Limit number of results",
        },
        example: "/api/live-betting?sport=football&status=live",
      },
      {
        path: "/live-betting/:id",
        method: "GET",
        description: "Get single match by ID",
        example: "/api/live-betting/1",
      },
    ],
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
    requested_path: req.path,
    available_endpoints: [
      "/api/games",
      "/api/casino-info",
      "/api/live-betting",
    ],
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Internal server error",
    message: err.message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════╗
║   🎰 8XBET APP API SERVER RUNNING 🎰   ║
╠════════════════════════════════════════════════╣
║  Port: ${PORT}                                   
║  Environment: ${process.env.NODE_ENV || "development"}
║                                                
║  Endpoints:                                    
║  → http://localhost:${PORT}/                    
║  → http://localhost:${PORT}/api/games           
║  → http://localhost:${PORT}/api/casino-info     
║  → http://localhost:${PORT}/api/live-betting    
║  → http://localhost:${PORT}/api/docs            
║                                                
║  Press Ctrl+C to stop                         
╚════════════════════════════════════════════════╝
  `);
});

module.exports = app;
