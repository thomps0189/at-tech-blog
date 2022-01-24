
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//associations

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});



Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
    hooks: true
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
    hooks: true
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    hooks: true
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
    hooks: true
});

module.exports = { User, Post, Comment}