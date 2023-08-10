const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const serverInfo = {
    platform: os.platform(),
    architecture: os.arch(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
  };
  const htmlResponse = `
  <html>
    <head>
      <title>System and OS Information</title>
    </head>
    <body>
      <h1>System Information</h1>
      <h2>Platform : ${serverInfo.platform}</h2>
      <h2>Architecture : ${serverInfo.architecture}</h2>
      <h2>Release : ${serverInfo.release}</h2>
      <h2>Total Memory : ${serverInfo.totalMemory}</h2>
      <h2>Free Memory : ${serverInfo.freeMemory}</h2>
    </body>
  </html>
`;
  res.send(
    htmlResponse
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});