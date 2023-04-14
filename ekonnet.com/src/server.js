const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use('/sign-in', (req, res) => {
    res.send({
        token: 'test123'
    })
})

app.listen(3000, () => console.log('API is running on localhost:3000/sign-in '))