const express = require ('express')
const router = express.Router()
const Cardapio = require('./modelCardapio')

///inserção de card
router.post('/card', async (req, res) => {
    const card = req.body
    try{
        const resposta = await new Cardapio(card).save()
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})

//pesquisar por titulo

router.post('/card/pesquisar', async (req, res) => {
    
    try{
        const resposta = await Cardapio.find({
            titulo: req.body.titulo
        })
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})

// perquisar por categoria
router.post('/card/pesquisar/categoria', async (req, res) => {
    
    try{
        const resposta = await Cardapio.find({
            categoria: req.body. categoria
        })
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})
// pesquisar todos
router.get('/card', async (req, res) => {
    
    try{
        const resposta = await Cardapio.find()
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})

// pesquisar por id
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const resposta = await Cardapio.findById(id)
        res.status(200).json({error: false, message: resposta})
    }catch(err){
    res.status(401).json({error: true, message:err.message})
}

})
// atualizar por id
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body
    try{
        const resposta = await Cardapio.findByIdAndUpdate(id, body)
        res.status(200).json({error: false, message: resposta})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})
//deletar por id
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        await Cardapio.findByIdAndDelete(id)
        res.status(200).json({error: false, message: 'card deletado com sucesso do Cardapio!'})
    }catch(err){
        res.status(401).json({error: true, message:err.message})
    }
    
})






module.exports = router