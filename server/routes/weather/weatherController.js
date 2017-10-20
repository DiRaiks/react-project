const Posts = require('../../models').Posts


module.exports = {
  create(req, res) {
    console.log(req.body)
    return Posts
      .create({
        author: req.body.author,
        text: req.body.text,
        city: req.body.city,
        authorId: req.body.authorId,
        postImage: null
      })
      .then(post => res.status(200).send(post))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Posts
      .findAll({
        where: {
          city: req.params.city
        }
      })
      .then(news => res.status(200).send(news))
      .catch(error => res.status(400).send(error));
  },
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
