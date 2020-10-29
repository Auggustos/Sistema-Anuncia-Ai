'use strict'
const database = require('../database/connection')

class ProductController{
  newProduct(request, response){

    const {nome, descricao, preco, imagem, id_usuario, quantidade} = request.body;

    database.insert({nome, descricao, preco, imagem, id_usuario, quantidade})
      .table("produtos").then(data => {
        console.log(data)
        response.send({message: "Produto criado com sucesso!"})
      }).catch(error => {
        console.log(error)
      })
  }

  listProducts(request, response){
    console.log('aqui 666')
    database.select("*").from("produtos").then(products => {
      console.log(products)
      response.send(products)
    }).catch(error => {
      console.log(error)
    })
  }
  
  listProduct(request, response){
    const id = request.params;
    console.log(id)
    database.select("*").from("produtos").where({id: id}).then(product => {
      console.log(product)
      response.send(product)
    }).catch(error => {
      console.log(error)
    })
  }
}

module.exports = new ProductController();