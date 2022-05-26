const { BlogPost, User, Category } = require('../database/models');

const getPosts = async () => {
   const postsAndUsers = await BlogPost.findAll({ include: [
       { model: User, as: 'user', attributes: { exclude: 'password' } },
       { model: Category, as: 'categories', through: { attributes: [] } },
   ] });
   return postsAndUsers;
  };
  
  module.exports = {
    getPosts, 
  };
