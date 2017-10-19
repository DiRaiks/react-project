
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        tag: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
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
