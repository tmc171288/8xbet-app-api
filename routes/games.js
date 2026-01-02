const express = require("express");
const router = express.Router();
const games = require("../data/games");

// GET /api/games - Get all games (with optional category filter)
router.get("/", (req, res) => {
  try {
    const { category, search, limit, sort } = req.query;

    let filteredGames = [...games];

    // Filter by category
    if (category) {
      filteredGames = filteredGames.filter(
        (game) => game.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Search by name
    if (search) {
      filteredGames = filteredGames.filter((game) =>
        game.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
    if (sort === "players") {
      filteredGames.sort((a, b) => b.players - a.players);
    } else if (sort === "rating") {
      filteredGames.sort((a, b) => b.rating - a.rating);
    } else if (sort === "name") {
      filteredGames.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Limit results
    if (limit) {
      filteredGames = filteredGames.slice(0, parseInt(limit));
    }

    res.json({
      success: true,
      data: {
        games: filteredGames,
        total: filteredGames.length,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// GET /api/games/:id - Get single game by ID
router.get("/:id", (req, res) => {
  try {
    const game = games.find((g) => g.id === parseInt(req.params.id));

    if (!game) {
      return res.status(404).json({
        success: false,
        error: "Game not found",
      });
    }

    res.json({
      success: true,
      data: game,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// GET /api/games/category/:category - Get games by category
router.get("/category/:category", (req, res) => {
  try {
    const filteredGames = games.filter(
      (game) =>
        game.category.toLowerCase() === req.params.category.toLowerCase()
    );

    res.json({
      success: true,
      data: {
        category: req.params.category,
        games: filteredGames,
        total: filteredGames.length,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
