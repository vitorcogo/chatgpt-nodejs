// >> node index.js
var app = require('./api/server');
const port = 8080;

app.listen(port, () => console.log('Server is running on port 8080.'));