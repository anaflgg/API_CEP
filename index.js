const axios = require('axios')
const express = require('express')
const app = express()

app.get('/endereco/:cep', async function (req, res) {
    const params = req.params;
    const dados = await buscarCep(params.cep)
    res.json(dados)
})

async function buscarCep(cep) {
    const APIResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return APIResponse.data
}
  
app.listen(3000)

