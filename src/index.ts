import { deleteBlogController, findBlogController, getBlogsController } from './controllers/blogsController'
import { deletePostController, findPostController, getPostsController } from './controllers/postsController'
import { SETTINGS } from './settings'
import express from 'express'

const app = express()
app.use(express.json())
 
app.listen(SETTINGS.PORT, () => {
  console.log(`Example app listening on port ${SETTINGS.PORT}`)
})

app.get(SETTINGS.PATH.blogs, getBlogsController)
app.get(SETTINGS.PATH.posts, getPostsController)
app.get(SETTINGS.PATH.postsById, findPostController)
app.get(SETTINGS.PATH.blogsById, findBlogController)
app.delete(SETTINGS.PATH.postsById, deletePostController)
app.delete(SETTINGS.PATH.blogsById, deleteBlogController)