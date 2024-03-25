const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static('dist', ['etag']));

app.post('/reservation', (req, res) => {
  res.send('Reservation request received!');
});

app.listen(3000, () => console.log('Server is running on port 3000'));
