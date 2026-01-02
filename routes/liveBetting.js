const express = require("express");
const router = express.Router();
const liveBetting = require("../data/liveBetting");

// GET /api/live-betting - Get all live betting matches
router.get("/", (req, res) => {
  try {
    const { sport, status, limit } = req.query;

    let filteredMatches = [...liveBetting];

    // Filter by sport
    if (sport) {
      filteredMatches = filteredMatches.filter(
        (match) => match.sport.toLowerCase() === sport.toLowerCase()
      );
    }

    // Filter by status
    if (status) {
      filteredMatches = filteredMatches.filter(
        (match) => match.status.toLowerCase() === status.toLowerCase()
      );
    }

    // Limit results
    if (limit) {
      filteredMatches = filteredMatches.slice(0, parseInt(limit));
    }

    res.json({
      success: true,
      data: {
        matches: filteredMatches,
        total: filteredMatches.length,
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

// GET /api/live-betting/:id - Get single match by ID
router.get("/:id", (req, res) => {
  try {
    const match = liveBetting.find((m) => m.id === parseInt(req.params.id));

    if (!match) {
      return res.status(404).json({
        success: false,
        error: "Match not found",
      });
    }

    res.json({
      success: true,
      data: match,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// GET /api/live-betting/sport/:sport - Get matches by sport
router.get("/sport/:sport", (req, res) => {
  try {
    const filteredMatches = liveBetting.filter(
      (match) => match.sport.toLowerCase() === req.params.sport.toLowerCase()
    );

    res.json({
      success: true,
      data: {
        sport: req.params.sport,
        matches: filteredMatches,
        total: filteredMatches.length,
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
