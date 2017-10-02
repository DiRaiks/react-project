'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Newses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tag: {
                type: Sequelize.STRING
            },
            theme: {
                type: Sequelize.STRING
            },
            author: {
                type: Sequelize.STRING
            },
            text: {
                type: Sequelize.STRING
            },
            newsImage: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            authorId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                reference: {
                    model: 'Author',
                    key: 'id',
                    as: 'authorId',
                }
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Newses');
    }
};