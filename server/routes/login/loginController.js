const Author = require('../../models').Author
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const config = require('../../tokenSecret')

module.exports = {
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
  login(req, res) {
    return Author
      .findOne({
        where: {
          login: req.body.login
        }
      })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({
              id: user.id,
              login: user.login
            }, config.jwtSecret)
            return res.send({ token })
          } else {
            return res.status(405).send({
              message: 'Password not Correct'
            });
          }
        } else {
          return res.status(404).send({
            message: 'User not Found'
          })
        }
      })
      .catch(error => res.status(400).send(error));
  }
}
