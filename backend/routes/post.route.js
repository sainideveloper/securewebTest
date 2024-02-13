const express = require("express");
const postRoute = express();
const bodyParser = require("body-parser");
postRoute.use(bodyParser.json());
postRoute.use(bodyParser.urlencoded({extended:true}));
const postController = require("../controllers/post.controller");


postRoute.post('/addPost', postController.addPost);

postRoute.get('/getPost', postController.getAllPosts);

postRoute.put('/updatePost', postController.updatePost);

postRoute.delete('/deletePost/:id', postController.deletePost);


module.exports = postRoute;