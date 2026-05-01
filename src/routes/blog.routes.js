import express from 'express'
import { createBlogs } from '../controllers/blogs.controllers.js'

const router = express.Router()


router.post('/create', createBlogs)


export default router;