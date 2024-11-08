// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Create a route that returns a list of comments
app.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'John', comment: 'Hello!' },
    { id: 2, author: 'Jane', comment: 'Hi!' },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
