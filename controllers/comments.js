const Comments = require("../models/Comments");


module.exports = { createComments: async (req, res) => {
    try {


      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        posts: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  likeComment: async (req, res) => {
    try {
        const commentDocument = await Comment.findById(req.params.id)
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Comment Likes +1");
      res.redirect(`/post/${commentDocument._id}`);
    } catch (err) {
      console.log(err);
    }
  }}