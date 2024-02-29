const Asset=require("../models/Asset");
const mongoose=require("mongoose")
// GET all assets for a user
exports.getAllAssets = async (req, res) => {
    try {
      const userId = req.params.userId; // Assuming userId is passed in the request params
      const assets = await Asset.find({ user: userId });
      res.json(assets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // UPDATE an asset
  exports.updateAsset = async (req, res) => {
    try {
      const assetId = req.params.id;
      const updatedAsset = await Asset.findByIdAndUpdate(assetId, req.body, { new: true });
      res.json(updatedAsset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
// CREATE a new asset
exports.createAsset = async (req, res) => {
    const { user, type, name } = req.body;

    try {
      const newAsset = new Asset({ user, type, name });
      const savedAsset = await newAsset.save();
      res.status(201).json(savedAsset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};



  // DELETE an asset
  exports.deleteAsset = async (req, res) => {
    try {
      const assetId = req.params.id;
      await Asset.findByIdAndDelete(assetId);
      res.json({ message: 'Asset deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };