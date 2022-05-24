const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    { postId: DataTypes.INTEGER, categoryId: DataTypes.INTEGER },
    {
      timestamps: false,
    }
  );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreingKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: 'PostCategory',
      foreingKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};
module.exports = PostCategory;
