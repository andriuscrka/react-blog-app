const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.listen(PORT, () => console.log('Server is running on port', PORT));
