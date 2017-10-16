const News = require('../../models').News

module.exports = {
  create(req, res) {
    return News
      .create({
        tag: req.body.tag,
        theme: req.body.theme,
        author: req.body.author,
        text: req.body.text,
        authorId: req.params.authorId,
        newsImage: 'no-news.png'
      })
      .then(news => res.status(201).send(news))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return News
      .findAll({
        order: [
          ['createdAt', 'DESC']
        ]
      })
      .then(news => res.status(200).send(news))
      .catch(error => res.status(400).send(error));
  },
}
