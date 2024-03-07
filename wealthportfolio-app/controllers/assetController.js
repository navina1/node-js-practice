// controllers/assetController.js
const Asset = require('../models/Asset');

// API to return all assets for a user
exports.getAllAssets = async (req, res) => {
    try {
        const userId = req.params.userId;
        const assets = await Asset.findAll({ where: { userId: userId } });
        res.json(assets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// API to update an asset
exports.updateAsset = async (req, res) => {
    try {
        const assetId = req.params.assetId;
        const updatedAsset = await Asset.update(req.body, { where: { id: assetId } });
        res.json(updatedAsset);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// API to delete an asset
exports.deleteAsset = async (req, res) => {
    try {
        const assetId = req.params.assetId;
        await Asset.destroy({ where: { id: assetId } });
        res.json({ message: 'Asset deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
