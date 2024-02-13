const express = require("express");
const blogRoute = express();
const bodyParser = require("body-parser");
blogRoute.use(bodyParser.json());
blogRoute.use(bodyParser.urlencoded({extended:true}));
const blogController = require("../controllers/blog.controller");


blogRoute.post('/addBlog', blogController.addBlog);

blogRoute.get('/getAllBlogs', blogController.getAllBlogs);

blogRoute.put('/updateBlog', blogController.updateBlog);

blogRoute.delete('/deleteBlog/:id', blogController.deleteBlog);


module.exports = blogRoute;