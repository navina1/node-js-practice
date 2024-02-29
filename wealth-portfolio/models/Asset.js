const mongoose=require('mongoose');

const assetSchema=new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming there's a User model
    type: { type: String, enum: ['Equity', 'Fixed Income', 'Alternatives'], required: true },
    name: { type: String, required: true }
} ,{timestamps:true});

module.exports=mongoose.model("Asset",assetSchema);  