const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const realtimeRouter = require('./api/realtime');

app.use(express.json());
app.use(express.static('public'));

app.use('/api/realtime', realtimeRouter);

app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
