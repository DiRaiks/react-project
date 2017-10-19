const Posts = require('../../models').Posts
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')

const config = require('../../tokenSecret')

module.exports = {
  create(req, res) {
    return Posts
      .create({
        login: req.body.login,
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        avatar: null
      })
      .then(registr => res.status(201).send(registr))
      .catch(error => res.status(400).send(error))
  },
  // list(req, res) {
  //   return Author
  //     .findAll({
  //       include: [{
  //         model: Newses,
  //         as: 'newses',
  //       }]
  //     })
  //     .then(news => res.status(200).send(news))
  //     .catch(error => res.status(400).send(error));
  // },
  // login(req, res) {
  //   return Author
  //     .findOne({
  //       where: {
  //         login: req.body.login
  //       }
  //     })
  //     .then(user => {
  //       if (user) {
  //         if (bcrypt.compareSync(req.body.password, user.password)) {
  //           const token = jwt.sign({
  //             id: user.id,
  //             username: user.surname
  //           }, config.jwtSecret)
  //           return res.send({ token })
  //         } else {
  //           return res.status(405).send({
  //             message: 'Password not Correct'
  //           });
  //         }
  //       } else {
  //         return res.status(404).send({
  //           message: 'User not Found'
  //         })
  //       }
  //     })
  //     .catch(error => res.status(400).send(error));
  // }
}
