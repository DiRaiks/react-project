const Registr = require('../models').Author;
const bcrypt = require('../../node_modules/bcrypt')


module.exports = {
    create(req, res) {
        console.log('registr post');
        if (req.body.vkId) {
            return Registr
                .findOne({
                    where: {
                        vkId: req.body.vkId
                    }
                })
                .then(user => {
                    if (user) {
                        return res.status(404).send({
                            message: 'USER HAVE',
                        });
                    } else {
                        return Registr
                            .create({
                                login: req.body.login,
                                name: req.body.name,
                                surname: req.body.surname,
                                password: bcrypt.hashSync(req.body.password, 10),
                                avatar: req.body.avatar || null,
                                vkId: req.body.vkId
                            })
                            .then(registr => res.status(201).send(registr))
                            .catch(error => res.status(400).send(error));
                    }
                })
        } else if (req.body.googleId) {
            return Registr
                .findOne({
                    where: {
                        googleId: req.body.googleId
                    }
                })
                .then(user => {
                    if (user) {
                        return res.status(404).send({
                            message: 'USER HAVE',
                        });
                    } else {
                        return Registr
                            .create({
                                login: req.body.login,
                                name: req.body.name,
                                surname: req.body.surname,
                                password: bcrypt.hashSync(req.body.password, 10),
                                email: req.body.email,
                                avatar: req.body.avatar || null,
                                googleId: req.body.googleId
                            })
                            .then(registr => res.status(201).send(registr))
                            .catch(error => res.status(400).send(error));
                    }
                })
        } else {
            return Registr
                .findOne({
                    where: {
                        login: req.body.login
                    }
                }).then(user => {
                    if (user) {
                        return res.status(404).send({
                            message: 'USER HAVE',
                        });
                    } else {
                        return Registr
                            .create({
                                login: req.body.login,
                                name: req.body.name,
                                surname: req.body.surname,
                                password: bcrypt.hashSync(req.body.password, 10),
                                email: req.body.email,
                                avatar: req.body.avatar || null
                            })
                            .then(registr => res.status(201).send(registr))
                            .catch(error => res.status(400).send(error));
                    }
                })
                .catch(error => res.status(400).send(error));
        }
    },
    list(req, res) {
        return Registr
            .findAll({
                order: [
                    ['createdAt', 'ASC']
                ]
            })
            .then(registr => res.status(200).send(registr))
            .catch(error => res.status(400).send(error));
    },
};