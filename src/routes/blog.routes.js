import express from 'express'
import { createBlogs, getBlogs } from '../controllers/blogs.controllers.js'

const router = express.Router()


router.post('/create', createBlogs)
router.get('/get/:type', getBlogs)


export default router;