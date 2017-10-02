const Author = require('../../models').Author
const bcrypt = require('bcrypt')

exports.create = (req, res) => {
  return Author
    .findOne({
      where: {
        login: req.body.login
      }
    }).then(user => {
      if (user) {
        return res.status(404).send({
          message: 'USER HAVE',
        })
      } else {
        return Author
          .create({
            login: req.body.login,
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email,
            avatar: null
          })
          .then(registr => res.status(201).send(registr))
          .catch(error => res.status(400).send(error))
      }
    })
    .catch(error => res.status(400).send(error))
}

exports.list = (req, res) => {
  return Author
    .findAll({
      order: [
        ['createdAt', 'ASC']
      ]
    })
    .then(registr => res.status(200).send(registr))
    .catch(error => res.status(400).send(error));
}
