'use strict'
const { hash, compare } = require('bcryptjs');
const { randomBytes } = require('crypto');
const database = require('../database/connection')

class UserController {
  async newUser(request, response) {
    const { nome, sobrenome, email, usuario, perfil,
      endereco, celular, pagamento_cartao, senha } = request.body;
    const hashedPassword = await hash(senha, 8);

    console.log(hashedPassword)
    database.insert({
      nome, sobrenome, email, usuario, perfil,
      endereco, celular, pagamento_cartao, senha: hashedPassword
    })
      .table("usuarios").then(data => {
        console.log(data)
        response.send({ message: "Usuário criado com sucesso!", error: false })
      }).catch(error => {
        response.status(500).send({error})
        console.log(error)
      })
  }

  async login(request, response) {

    const userReq = request.body;
    let user;

    findUser(userReq)
      .then(foundUser => {
        console.log(foundUser)
        user = foundUser;
      })
      .then(() => {
        response.status(201).json({ user })
      }).catch((err) => response.status(401).send(err))
  }
}


const findUser = (userReq) => {
  return database.select("*").from("usuarios").where({ usuario: userReq.usuario }).then((data) => data)
}

const checkPassword = (reqPassword, foundUser) => {
  return new Promise((resolve, reject) => {
    compare(reqPassword, foundUser.senha, (err, response) => {
      if (err) {
        reject(err)
      } else if (response) {
        resolve(response)
      } else {
        reject(new Error('As senhas não são iguais.'))
      }
    })
  })
}

const createToken = () => {
  return new Promise((resolve, reject) => {
    randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString('base64'))
    })
  })
}

module.exports = new UserController();