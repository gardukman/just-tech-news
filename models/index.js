const User = require('./User');
const Post = require('./Post')
const Comment = require('./Comment')

// creates associations between the User and Post, they are able to query each other's information in the context of a vote
User.hasMany(Post, {

    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});



module.exports = { User, Post, Comment };