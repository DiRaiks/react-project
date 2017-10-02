const Login = require('../models').Author;
const Newses = require('../models').Newses;
const jwt = require('../../node_modules/jsonwebtoken');
const bcrypt = require('../../node_modules/bcrypt')

const config = require('../config');

module.exports = {
    list(req, res) {
        return Login
            .findAll({
                include: [{
                    model: Newses,
                    as: 'newses',
                }]
            })
            .then(news => res.status(200).send(news))
            .catch(error => res.status(400).send(error));
    },
    login(req, res) {
        if (req.body.vkId) {
            return Login
                .findOne({
                    where: {
                        vkId: req.body.vkId
                    }
                })
                .then(user => {
                    if (user) {
                        if (!req.body.password) {
                            const token = jwt.sign({
                                id: user.id,
                                username: user.name
                            }, config.jwtSecret);
                            return res.send({token});
                        } else if (bcrypt.compareSync(req.body.password, user.password)) {
                            const token = jwt.sign({
                                id: user.id,
                                username: user.surname
                            }, config.jwtSecret);

                            return res.send({token});
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
        } else if (req.body.googleId) {
            return Login
                .findOne({
                    where: {
                        googleId: req.body.googleId
                    }
                })
                .then(user => {
                    if (user) {
                        if (!req.body.password) {
                            const token = jwt.sign({
                                id: user.id,
                                username: user.name
                            }, config.jwtSecret);
                            return res.send({token});
                        } else if (bcrypt.compareSync(req.body.password, user.password)) {
                            const token = jwt.sign({
                                id: user.id,
                                username: user.surname
                            }, config.jwtSecret);

                            return res.send({token});
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
        } else {
            return Login
                .findOne({
                    where: {
                        login: req.body.login
                    }
                })
                .then(user => {
                    if (user) {
                        if (!req.body.password) {
                            const token = jwt.sign({
                                id: user.id,
                                username: user.name
                            }, config.jwtSecret);
                            return res.send({token});
                        } else if (bcrypt.compareSync(req.body.password, user.password)) {
                            const token = jwt.sign({
                                id: user.id,
                                username: user.surname
                            }, config.jwtSecret);

                            return res.send({token});
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
    },

    infoUser(req, res) {
        console.log(req.params)
        return Login
            .findById(req.params.id)
            .then(user => res.status(200).send(user))
            .catch(error => res.status(404).send(error));
    },
    showAll(req, res) {
        return Login
            .findAll({
                order: [
                    ['createdAt', 'ASC']
                ]
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },
    editUser(req, res) {
        return Login
            .findById(req.params.id)
            .then(user => {
                if (req.body.newPassword.length > 1) {
                    if(bcrypt.compareSync(req.body.password, user.password)) {
                        return user
                            .update({
                                login: req.body.login,
                                name: req.body.name,
                                surname: req.body.surname,
                                password: bcrypt.hashSync(req.body.newPassword, 10),
                                email: req.body.email
                            })
                            .then(() => res.status(200).send(user))
                            .catch(error => res.status(400).send(error))
                    } else {
                        return res.status(402).send({
                            message: 'User not Found'
                        })
                    }
                } else {
                    return user
                        .update({
                            login: req.body.login,
                            name: req.body.name,
                            surname: req.body.surname,
                            email: req.body.email
                        })
                        .then(() => res.status(200).send(user))
                        .catch(error => res.status(400).send(error))
                }
            })
    },
};