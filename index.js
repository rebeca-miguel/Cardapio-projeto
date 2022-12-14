// config inicial
const express = require ('express')
const app = express ()
const mongoose = require('mongoose');
 



const card = require('./routerCardapio');

//forma de ler um json

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use("/v1", router);

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())
app.use("/cadastrar", card)

//rotas da API

app.post('/cardapio', async (req, res) => {
    //req.body
    const {categoria, name, descicao, preco, required} = req.body
    

    //(categoria:alimento, name:Pizza, descrição: calabresa, preço: 36, require:true)
    
    
    if(!cardapio) {
        res.status(422).json({ error: 'O cardapio foi inserido com suceso' })
    }

    //criar atributo
    const cardapio = {
        categoria,
        titulo,
        description,
        preco,
        required
    }
    try{
        //criando dados
        await Cardapio.create(cardapio)

        res.status(201).json({message: 'Cardapio inserido com sucesso no sistema!'})

    }   catch (error) {
        res.status(500).json({error:error})
    }
})

//rota inicial
app.get('/',(req, res) => {
    //mostrat rota
    res.json({message: 'olá express!'})
})

//qD7WgblQMMmZy3F1

//mongodb+srv://Rebeca:qD7WgblQMMmZy3F1@apicluster3.qvdwwhg.mongodb.net/bancodaapi?retryWrites=true&w=majority

//entregar a porta
const DB_USER = 'Rebeca'
const DB_PASSWORD = encodeURIComponent('qD7WgblQMMmZy3F1')

mongoose
.connect(
`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster3.qvdwwhg.mongodb.net/bancodaapi?retryWrites=true&w=majority`,
)
.then(() => {
    console.log('conectamos com o Mongo!')
    app.listen(8080)
})
.catch((err) => console.log(err))



