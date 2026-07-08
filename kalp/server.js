const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const filesRouter = require('./api/files');

app.use(express.json());
app.use(express.static('public'));

app.use('/api/files', filesRouter);

app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
