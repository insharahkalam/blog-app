import blogModel from '../models/blogs.models.js'

const createBlogs = async (req, res) => {
    const { title, description, category, authors } = req.body;
    if (!title || !description || !category || !authors) {
        return res.json({
            message: "All feild required!"
        })
    }

    const blog = await blogModel.create({
        title, description, category, authors
    })
    res.json({
        message: "Blog created successfully!",
        blog
    })
}

const getBlogs = async (req, res) => {

    const { type } = req.params

    const getOne = await blogModel.findOne({ category: type })
    console.log(getOne);

    if (!getOne) {
        return res.status(404).json({
            message: "No blog founds."
        })
    }

    res.status(200).json({
        message: "blogs fetched successfully!",
        getOne
    })

}

export { createBlogs, getBlogs }