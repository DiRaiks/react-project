
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        city: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        postImage: {
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
