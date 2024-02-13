const Post = require("../models/post.model");

const addPost = async(req, res)=>{
    try{
        const {title, description} = re.body;
        const post =  new Post({
            title: title,
            description: description,
            })
         await post.save();
        res.status(200).send({sucess:true, data: "Add Post Data Successfully"})
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const updatePost = async (req, res) => {
    try {
        const { title, description, id } = req.body;

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).send({ success: false, message: "Post not found" });
        }

        post.title = title;
        post.description = description;
        await post.save();

        res.status(200).send({ success: true, data: "Updated post data successfully" });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).send({ success: true, data: posts });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params; 
        const post = await Post.findByIdAndDelete(id);

        if (!post) {
            return res.status(404).send({ success: false, message: "Post not found" });
        }

        res.status(200).send({ success: true, message: "Post deleted successfully" });
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    addPost,
    updatePost,
    getAllPosts,
    deletePost
}