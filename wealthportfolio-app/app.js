// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const assetRoutes = require('./routes/assetRoutes');
const financeRoutes = require('./routes/financeRoutes');

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/finances', financeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
