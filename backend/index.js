const express = require('express')
const app = express()
const data = require('./data.json')
const cors = require('cors')

app.use(cors({ origin: 'https://5500-eduardareis-frontendcou-9j88vsfeloy.ws-us107.gitpod.io' }))

app.listen(3003, () => {
    console.log('server running on port 3003')
})

app.get('/getcountries', (req, res) => {
    const query = req.query

    let filteredData = data

    if (query.countryname) {
        filteredData = filteredData.filter((countryData) => {
            return countryData.name
                .toLowerCase()
                .startsWith(query.countryname.toLocaleLowerCase())
        })
    }

    return res.json(filteredData)
})

// app.post() -> criar algo novo na base

// app.put() -> atualizar algo na base

// app.delete() -> deletar algo da base