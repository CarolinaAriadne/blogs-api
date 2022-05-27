const postChange = require('../services/changePost');

const changePost = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const { id } = req.params;
    const blogChanged = await postChange.changePost(id, title, content);

    return res.status(200).json(blogChanged);
  } catch (err) {
    next(err);
  }
};

module.exports = {
    changePost,
};
