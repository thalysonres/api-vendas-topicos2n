// servidor http
import express from 'express'

// cors -> permissão de acesso às rotas
import cors from 'cors'

// cria o servidor
const server = express()

// servidor vai utilizar o cors
server.use(cors())

// servidor vai converte valores do usuário para jSON
server.use(express.json())

// sobe o servidor
server.listen(3333, () => {
    console.log(`Servidor up and running `)
})
