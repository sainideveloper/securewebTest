const Blog = require("../models/blog.model");

const addBlog = async(req, res)=>{
    try{
        const {title, description} = re.body;

        const blog =  new Blog({
            title: title,
            description: description,
            })

         await blog.save();

        res.status(200).send({sucess:true, data: "Add Blog Data Successfully"})
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const updateBlog = async (req, res) => {
    try {
        const { title, description, id } = req.body;

        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).send({ success: false, message: "Blog not found" });
        }

        blog.title = title;
        blog.description = description;
        await blog.save();

        res.status(200).send({ success: true, data: "Updated Blog data successfully" });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).send({ success: true, data: blogs });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params; 
        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            return res.status(404).send({ success: false, message: "Blog not found" });
        }

        res.status(200).send({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    addBlog,
    updateBlog,
    getAllBlogs,
    deleteBlog
}