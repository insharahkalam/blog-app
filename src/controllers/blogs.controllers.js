import blogModel from '../models/blogs.models.js'

const createBlogs = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.json({
            message: "All feild required!"
        })
    }

    const blog = await blogModel.create({
        title, description
    })
    res.json({
        message: "Blog created successfully!",
        blog
    })
}

export { createBlogs }