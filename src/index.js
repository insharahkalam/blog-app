import dns from 'dns'
dns.setServers(['8.8.8.8', '1.1.1.1'])

import express from 'express'
import connectDB from './db/db.js'
import dotenv from 'dotenv'
import router from './routes/blog.routes.js'
dotenv.config()

const app = express()
app.use(express.json())

connectDB()

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend API is running",
        baseRoute: "/api/blog/get",
        endpoints: [
            "jwt",
            "ssr",
            "csr",
            "mongoose",
            "schema",
            "mvc",
            "bcrypt",
            "middleware"
        ],
        usage: "Combine baseRoute + endpoint → /api/blog/get/jwt"
    });
});


app.use('/api/blog', router)

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT} port`);
})