const express = require('express');
const os = require('os');

const app = express();
const port = 80;

app.get('/', (req, res) => {
  const serverInfo = {
    platform: os.platform(),
    architecture: os.arch(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
  };

  res.json(serverInfo);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});