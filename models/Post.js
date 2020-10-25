const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model { }

// create fields/columns for Post model
Post.init(
    {
        // identifies the id column as the primary key and set it to auto-increment
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // title column is defined as a String value
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // also defined as a string, also has validation in the schema definition ensuring that this url is a verified link
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        // this column is defined by integers which help determine who posted the news article. the references property establishes the relationship between this post and the user by creating a reference to the User model, specifically to the id column that is defined by the key property which is the primary key
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    // this configures the metadata, including the naming conventions
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

// the export expression to make the Post model accessible to other parts of the application
module.exports = Post;