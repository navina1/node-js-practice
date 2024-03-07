// routes/assetRoutes.js
const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');

// API to return all assets of a user
router.get('/:userId/assets', assetController.getAllAssets);

// API to update an asset
router.put('/assets/:assetId', assetController.updateAsset);

// API to delete an asset
router.delete('/assets/:assetId', assetController.deleteAsset);

module.exports = router;
