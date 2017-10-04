
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
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
  Posts.associate = (models) => {
      Posts.belongsTo(models.Author, {
            foreignKey: 'authorId',
            onDelete: 'CASCADE',
        });
    };
    return Posts;
};
