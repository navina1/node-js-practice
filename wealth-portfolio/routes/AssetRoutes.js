const expres=require("express");
const router=expres.Router();
const AssetController=require("../controllers/AssetController");

// GET all assets for a user
router.get('/:userId/assets', AssetController.getAllAssets);

// CREATE a new asset
router.post('/assets', AssetController.createAsset);

// UPDATE an asset
router.put('/assets/:id', AssetController.updateAsset);

// DELETE an asset
router.delete('/assets/:id', AssetController.deleteAsset);

module.exports = router;