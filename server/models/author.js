
module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        login: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        googleId: {
            type: DataTypes.NUMERIC,
        },
        vkId: {
            type: DataTypes.NUMERIC,
        }
    });
    Author.associate = (models) => {
        Author.hasMany(models.Posts, {
            foreignKey: 'authorId',
            as: 'posts',
        });
    };
    return Author;
};
