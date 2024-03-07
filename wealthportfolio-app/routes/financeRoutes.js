// routes/financeRoutes.js
const express = require('express');
const router = express.Router();
const financeController = require('../controllers/financeController');

// API to return the income, expenses, and savings of the user in the current financial year
router.get('/:userId/finances', financeController.getFinancialDetails);

// API to return a detailed breakdown of income and expenses of the user
router.get('/:userId/finances/detailed', financeController.getDetailedFinancialDetails);

// CRUD Operations
router.post('/:userId/finances', financeController.createFinancialEntry);
router.put('/finances/:entryId', financeController.updateFinancialEntry);
router.delete('/finances/:entryId', financeController.deleteFinancialEntry);

module.exports = router;
