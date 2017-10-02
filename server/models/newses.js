
module.exports = (sequelize, DataTypes) => {
    const Newses = sequelize.define('Newses', {
        tag: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        theme: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        newsImage: {
            type: DataTypes.STRING
        },
    });
    Newses.associate = (models) => {
        Newses.belongsTo(models.Author, {
            foreignKey: 'authorId',
            onDelete: 'CASCADE',
        });
    };
    return Newses;
};