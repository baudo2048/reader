const express = require('express')

const app = express();
const port = process.env.PORT || 3000;

// Metodo 1

app.get('/', (req, res) => res.send('Hello World! BiP'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.use(express.static('./FE'))

