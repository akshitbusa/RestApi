const express = require('express')
const app = express();
const port = process.env.PORT || 8000
require('./db/con');
const studentRouter = require('./routers/stu')

app.use(express.json())

app.use(studentRouter)


app.listen(port, () => { console.log(`success at ${port}`); })