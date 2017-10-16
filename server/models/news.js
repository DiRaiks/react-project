
module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define('News', {
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
    News.associate = (models) => {
        News.belongsTo(models.Author, {
            foreignKey: 'authorId',
            onDelete: 'CASCADE',
        });
    };
    return News;
};
