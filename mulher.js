const express = require("express") // iniciando o express
const router = express.Router() // configurando a primeira parte da rota
const cors = require ('cors')

//conectando ao banco de dados
const conectaBanco = require('./bancoDeDados')
conectaBanco() // chamando a função que conecta o banco de dados 

const mulher = require ('./mulherModel')

const app = express() // iniciando o app 
app.use(express.json())
const porta = 3333 // criando a porta 



//get
async function mostraMulher(request, response) {
try{
    const mulherDb= await mulher.find()
    response.json (mulherDb)
}catch(err){
    console.log(err)
}

}
// post
async function criaMulher(request,response){
   const novaMulher = new mulher({
    nome:request.body.nome,
    minibio:request.body.minibio,
    citacao:request.body.citacao,
   })

 try{
        const mulherCriada = await novaMulher.save
        response.status(201).json(mulherCriada)
 }catch (err){
        console.log(err)
 }

}

//correção patch

async function corrigeMulher(request, response){
    try{
        const mulherEncontrada = await mulher.findById(request.params.findById)
        if (request.body.nome){
            mulherEncontrada.nome=request.body.nome
    
        }
        if (request.body.minibio){
            mulherEncontrada.minibio=request.body.minibio   
        }
        if (request.body.citacao){
            mulherEncontrada.citacao=request.body.citacao   
        }
     const mulherAtualizadaNoDb=await mulherEncontrada.save()
     response.json(mulherAtualizadaNoDb)

    }catch(err){
        console.log(err)
    }
    }



// Delete 
async function deletaMulheres(request,response){

  try{
    await mulher.findByIdAndDelete(request.params.id)
    response.json({mensagem:'Mulher deletada com sucesso!'})

  }catch(err){
    console.log(err)
  }
    }

function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}

app.use(router.get('/mulher', mostraMulher))
app.use(router.post('/mulher', criaMulher))
app.use(router.patch('/mulher/:id', corrigeMulher)) 
app.use(router.delete('/mulher/:id', deletaMulheres)) 

app.listen(porta, mostraPorta)


