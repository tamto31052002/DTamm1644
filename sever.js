const express = require('express')
const app = express()
app.get('/', (req, res) => {
res.send('Hello, World abcd!')
})
app.listen(3005, () => {
console.log('Server started on port 3000')
})