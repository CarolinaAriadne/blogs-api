const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreingKey: true },
      published: { type: DataTypes.DATE, defaultValue: new Date() }, 
      updated: { type: DataTypes.DATE, defaultValue: new Date() }, 
    },
    {
      timestamps: false,
    }
  );
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreingKey: 'userId',
      as: 'user',
    });
  };

  return BlogPost;
};
module.exports = BlogPost;
