const express = require("express");
const router = express.Router();
const casinoInfo = require("../data/casinoInfo");

// GET /api/casino-info - Get all casino information
router.get("/", (req, res) => {
  try {
    res.json({
      success: true,
      data: casinoInfo,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// GET /api/casino-info/features - Get only features
router.get("/features", (req, res) => {
  try {
    res.json({
      success: true,
      data: casinoInfo.features,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// GET /api/casino-info/promotions - Get only promotions
router.get("/promotions", (req, res) => {
  try {
    res.json({
      success: true,
      data: casinoInfo.promotions,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// GET /api/casino-info/support - Get support info
router.get("/support", (req, res) => {
  try {
    res.json({
      success: true,
      data: casinoInfo.support,
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
